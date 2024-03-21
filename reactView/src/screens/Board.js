import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getList } from "../utils/BoardData";
import { Button } from "../components";
import { FlatList } from "react-native";

const Board = ({ navigation }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const data = await getList();
    console.log(data);
    setList(data);
  };

  // useFocusEffect(): 화면이 포커스를 받을 때마다 특정 작업을 수행할 수 있도록 함
  useFocusEffect(
    React.useCallback(() => {
      fetchList();
    }, [])
  );

  const handleItemPress = (item) => {
    navigation.navigate("PostDetail", { item });
  };

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item) => (
        <Button data={item.item} handleItemPress={handleItemPress} />
      )}
    />
  );
};

export default Board;
