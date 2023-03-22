import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
const BlogPage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [postData, setPostData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://6658-183-82-176-80.in.ngrok.io/post")
      .then((response) => {
        setPostData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  // const filteredBlogs = blogData.filter((blog) =>
  //   blog.id.toString().includes(searchQuery)
  // );

  const getBlogByName = (title) => {
    const filteredBlogs = postData.filter((post) =>
      post[2].toLowerCase().includes(title.toLowerCase())
    );
    return filteredBlogs;
  };
  const filteredBlogs = getBlogByName(searchQuery);
  const getBlogById = () => {};
  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.blogContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search by ID"
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
            <Ionicons
              style={styles.icon}
              name="search-outline"
              size={20}
              onPress={getBlogByName}
            />
          </View>
          <View style={styles.blogs}>
            {/* <Text>{postData}</Text> */}
            {postData.map((post) => (
              <View key={post[0]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("BlogDetails", { blog: post });
                  }}
                >
                  <View style={styles.blog}>
                    <Text style={styles.Blogtitle} numberOfLines={1}>
                      {post[2]}
                    </Text>
                    {/* <Text>{post[6]}</Text> */}
                    <Text style={styles.author}> {post[1]}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Blogtitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  author: {
    color: "gray",
    marginTop: 2,
    fontSize: 10,
    fontWeight: 100,
    color: "#ffffff",
  },
  searchBar: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  blogContainer: {
    paddingTop: 40,
  },
  searchContainer: {
    width: 300,

    paddingHorizontal: 20,
    height: 40,
    flex: 0,
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    right: 0,
    marginTop: 20,
    marginRight: -50,
  },
  blogs: {
    height: "100%",

    marginHorizontal: 20,
    gap: 10,
    marginTop: 40,
    width: 330,
    borderColor: "black",
  },

  blog: {
    backgroundColor: "#82AAE3",
    padding: 5,
    paddingHorizontal: 10,
    height: 60,
    borderRadius: 20,
    width: "100%",
    marginTop: 6,
    borderWidth: 2,
    borderColor: "black",
    elevation: 10, // add shadow
  },
});

export default BlogPage;
