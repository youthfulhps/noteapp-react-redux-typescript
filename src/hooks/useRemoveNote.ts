import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { removeNote } from "../modules/note";

export default function useRemoveNote(id: number) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(removeNote(id)), [dispatch, id]);
}
