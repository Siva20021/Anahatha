import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";
const AddBlog = () => {
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (text) => {
    if (text.length <= 50) {
      setTitle(text);
    }
  };

  const handleContentChange = (text) => {
    if (text.length <= 1000) {
      setContent(text);
    }
  };
  console.log(user.email);
  const AddBlog = async () => {
    if (!title || !content) {
      alert("Empty blog Cannot be submmited");
    } else {
      try {
        const response = await axios.post(
          "https://144f-183-82-204-71.in.ngrok.io/post",
          {
            email: user.email,
            title: title,
            body: content,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title (max 50 words)</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={handleTitleChange}
        placeholder="Enter title here"
      />
      <Text style={styles.label}>Content (max 1000 words)</Text>
      <TextInput
        style={[styles.input, styles.contentInput]}
        value={content}
        onChangeText={handleContentChange}
        placeholder="Enter content here"
        multiline
      />
      <TouchableOpacity onPress={AddBlog}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add New Post</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddBlog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: 50,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  contentInput: {
    height: 500,
    textAlignVertical: "top",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#82AAE3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
