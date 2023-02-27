from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2
import bcrypt
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
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

    return {"message": "User created successfully"}

# Login endpoint


@app.post("/login")
def login(user: LoginUser):
    cursor = conn.cursor()

    # Retrieve user from database
    cursor.execute(
        "SELECT email, password FROM users WHERE email=%s", (user.email,))
    db_user = cursor.fetchone()

    if db_user is None:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")

    # Verify password
    if bcrypt.checkpw(user.password.encode(), db_user[1].encode()):
        return {"message": "Login successful"}
    else:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")


# Predict API endpoint
@app.post("/predict")
def predict(data: HeartDiseaseInput):
    # Splitting the Features and the Target
    X = heart_data.drop(columns="target", axis=1)
    Y = heart_data["target"]

    # Splitting data into testing and train data
    X_train, X_test, Y_train, Y_test = train_test_split(
        X, Y, test_size=0.2, stratify=Y, random_state=2)

    # Model Training
    model = LogisticRegression()
    model.fit(X_train, Y_train)

    # Make the prediction
    input_data = np.asarray(list(data.dict().values()))
    input_data_reshaped = input_data.reshape(1, -1)
    prediction = model.predict(input_data_reshaped)

    # Return the result
    if prediction[0] == 1:
        return {"result": "Heart Defect"}
    else:
        return {"result": "No Heart Defect"}
