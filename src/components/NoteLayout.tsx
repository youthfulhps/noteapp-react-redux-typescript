import React from "react";
import NoteItem from "./NoteItem";
import AddForm from "./AddForm";
import { Layout } from "antd";
import useNotes from "../hooks/useNotes";

function NoteLayout() {
  const notes = useNotes();

  return (
    <Layout>
      <AddForm />
      {notes.map((note) => (
        <NoteItem note={note} key={note.id}></NoteItem>
      ))}
    </Layout>
  );
}

export default NoteLayout;
