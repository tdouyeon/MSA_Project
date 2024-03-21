import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostDetail = ({ route }) => {
  // route.params에서 item 객체 추출
  const { item } = route.params;

  // Reg Time에서 'T' 이전의 문자열 추출
  const regTimeBeforeT = item.regTime.split("T")[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{`등록일: ${regTimeBeforeT}`}</Text>
        <Text style={styles.info}>{`작성자: ${item.email}`}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{item.post_content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: "#666",
  },
  contentContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
  },
  content: {
    fontSize: 18,
  },
});

export default PostDetail;
