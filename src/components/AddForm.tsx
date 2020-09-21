import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useAddNote from "../hooks/useAddNote";

const { TextArea } = Input;

function AddForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addNote = useAddNote();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <Card
      key="addForm"
      id="addForm"
      title={
        <Input
          required
          placeholder="제목을 입력하세요."
          style={{ width: "60%" }}
          onChange={onChangeTitle}
          value={title}
        ></Input>
      }
      extra={
        <Button type="primary" onClick={onSubmit}>
          {<PlusOutlined />}
        </Button>
      }
    >
      <TextArea
        placeholder="내용을 입력하세요."
        rows={3}
        onChange={onChangeContent}
        value={content}
      ></TextArea>
    </Card>
  );
}

export default AddForm;
