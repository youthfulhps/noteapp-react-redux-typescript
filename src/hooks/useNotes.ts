import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useNotes() {
  const notes = useSelector((state: RootState) => state.notes);
  return notes;
}
