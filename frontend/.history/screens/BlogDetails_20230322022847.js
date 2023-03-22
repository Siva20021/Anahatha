import React from "react";
import {
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const BlogDetails = ({ route }) => {
  const { blog } = route.params;
  const navigation = useNavigation();
  const handleViewComments = () => {
    navigation.navigate("Comments", { postId: blog[5] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require("../assets/user.png")} style={styles.image} />
        <View style={styles.titleColumn}>
          <Text style={styles.title}>{blog[2]}</Text>
          <Text style={styles.author}>By: {blog[1]}</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.content}>{blog[3]}</Text>
      </ScrollView>
      <TouchableOpacity onPress={handleViewComments}>
        <View>
          <Text>View Comments({blog[4]})</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  author: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  row: {
    marginTop: 20,
    height: 100,
    gap: 10,
    flex: 0,
    flexDirection: "row",
    borderColor: "black",
    borderBottomWidth: 2,
  },
  titleColumn: {
    marginTop: 5,
  },
});

export default BlogDetails;
