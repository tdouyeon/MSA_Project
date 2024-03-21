import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ data, handleItemPress, title, onPress }) => {
  if (title && onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  } else if (data && handleItemPress) {
    return (
      <TouchableOpacity
        onPress={() => handleItemPress(data)}
        style={styles.item}
      >
        <Text style={styles.title}>{data.title}</Text>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#99ccff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 16,
  },
});

export default Button;
