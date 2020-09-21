import React from "react";
import { Card, Button, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Note } from "../modules/note";
import useRemoveNote from "../hooks/useRemoveNote";

const { Paragraph } = Typography;

type NoteItemProps = {
  note: Note;
};

function NoteItem({ note }: NoteItemProps) {
  const onRemove = useRemoveNote(note.id);
  return (
    <Card
      hoverable={true}
      key={note.id}
      title={<h3>{note.title}</h3>}
      extra={
        <Button danger type="ghost" onClick={onRemove}>
          {<DeleteOutlined />}
        </Button>
      }
    >
      <Paragraph>{note.content}</Paragraph>
    </Card>
  );
}

export default NoteItem;
