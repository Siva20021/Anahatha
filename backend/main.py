from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2
import bcrypt
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

from sklearn.metrics import accuracy_score
heart_data = pd.read_csv('heart_disease_data.csv')
app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Database connection
conn = psycopg2.connect(
    host="localhost",
    database="Anahatha",
    user="postgres",
    password="test"
)

# User model


class User(BaseModel):
    email: str
    password: str
    age: int
    sex: str
    name: str

# HeartDisease model


class HeartDiseaseInput(BaseModel):
    age: int
    sex: int
    cp: int
    trestbps: int
    chol: int
    fbs: int
    restecg: int
    thalach: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int

# LoginUser model


class LoginUser(BaseModel):
    email: str
    password: str

# Signup endpoint


@app.post("/signup")
def signup(user: User):
    cursor = conn.cursor()

    # Check if email already exists
    cursor.execute("SELECT email FROM users WHERE email=%s", (user.email,))
    existing_user = cursor.fetchone()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash password
    hashed_password = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt())

    # Insert user into database
    cursor.execute(
        "INSERT INTO users (email, password, age, sex, name) VALUES (%s, %s, %s, %s, %s)",
        (user.email, hashed_password.decode(), user.age, user.sex, user.name)
    )
    conn.commit()
    user_data = {
        "email": user.email,
        "password": user.password,
        "age": user.age,
        "sex": user.sex,
        "name": user.name
    }
    return {"data": user_data}

# Login endpoint


@app.post("/login")
def login(user: LoginUser):
    cursor = conn.cursor()

    # Retrieve user from database
    cursor.execute(
        "SELECT email, password, age, sex, name FROM users WHERE email=%s", (user.email,))
    db_user = cursor.fetchone()

    if db_user is None:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")

    # Verify password
    if bcrypt.checkpw(user.password.encode(), db_user[1].encode()):
        # Return user data
        return {
            "email": db_user[0],
            "age": db_user[2],
            "sex": db_user[3],
            "name": db_user[4]
        }
    else:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")


@app.post("/predict")
def predict(data: HeartDiseaseInput):
    # Splitting the Features and the Target
    X = heart_data.drop(columns="target", axis=1)
    Y = heart_data["target"]

    # Splitting data into testing and train data
    X_train, X_test, Y_train, Y_test = train_test_split(
        X, Y, test_size=0.2, stratify=Y, random_state=2)

    # Scale the data
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

    # Model Training
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train, Y_train)

    # Make the prediction
    input_data = np.asarray(list(data.dict().values()))
    input_data = input_data.astype(int)
    input_data_reshaped = input_data.reshape(1, -1)
    input_data_reshaped = scaler.transform(input_data_reshaped)
    prediction = model.predict(input_data_reshaped)

    # Insert a new row into the testreports table
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO testreports (
            age, sex, cp, trestbps, chol, fbs, restecg, thalach,
            exang, oldpeak, slope, ca, thal, email, prediction
        )
        VALUES (
             %s, %s, %s, %s, %s, %s, %s, %s,
            %s, %s, %s, %s, %s, %s, %s::integer
        );
    """, (
        data.age, data.sex, data.cp, data.trestbps, data.chol,
        data.fbs, data.restecg, data.thalach, data.exang, data.oldpeak,
        data.slope, data.ca, data.thal, "test@gmail.com", int(prediction[0])

    ))
    conn.commit()
    cursor.close()

    # Return the result
    if prediction[0] == 1:
        return {"result": "Heart Defect"}
    else:
        return {"result": "No Heart Defect"}
