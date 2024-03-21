import React, { useState } from "react";
import { TextInput, TouchableOpacity, Keyboard } from "react-native";
import styled from "styled-components/native";
import { createPost } from "../utils/BoardData";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  background-color: white;
`;

const SubContainer = styled.View`
  flex-direction: row;
  align-items: center; /* 수정: 수직 정렬 조정 */
  margin-bottom: 30px; /* 수정: 여백 추가 */
`;

const Input = styled.View`
  width: 270px;
  height: 60px;
  border-bottom-width: 0.5px;
  border-bottom-color: grey;
  padding: 15px;
`;

const TitleText = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin-right: 30px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #99ccff;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center; /* 수정: 수직 정렬 조정 */
  margin-bottom: 30px; /* 수정: 여백 추가 */
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

const AddPost = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [post_content, setPostContent] = useState("");

  const handleAddPost = async () => {
    await createPost(email, title, post_content);
    navigation.goBack();
  };

  return (
    <TouchableOpacity activeOpacity={1} style={{ flex: 1 }}>
      <Container>
        <SubContainer>
          <TitleText>이메일</TitleText>
          <Input>
            <TextInput value={email} onChangeText={(text) => setEmail(text)} />
          </Input>
        </SubContainer>

        <SubContainer>
          <TitleText>제목</TitleText>
          <Input>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} />
          </Input>
        </SubContainer>
        <SubContainer>
          <TitleText>내용</TitleText>
          <Input>
            <TextInput
              multiline={true}
              value={post_content}
              onChangeText={(text) => setPostContent(text)}
            />
          </Input>
        </SubContainer>
        <SubmitButton onPress={handleAddPost}>
          <ButtonText>등록</ButtonText>
        </SubmitButton>
      </Container>
    </TouchableOpacity>
  );
};

export default AddPost;
