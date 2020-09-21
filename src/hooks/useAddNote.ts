import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addNote } from "../modules/note";

export default function useAddNote() {
  const dispatch = useDispatch();
  return useCallback((title, content) => dispatch(addNote(title, content)), [
    dispatch,
  ]);
}
