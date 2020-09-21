const ADD_NOTE = "note/ADD_NOTE" as const;
const REMOVE_NOTE = "note/REMOVE_NOTE" as const;

export const addNote = (title: string, content: string) => ({
  type: ADD_NOTE,
  payload: { title, content },
});

export const removeNote = (id: number) => ({ type: REMOVE_NOTE, payload: id });

type NotesAction = ReturnType<typeof addNote> | ReturnType<typeof removeNote>;

export type Note = {
  id: number;
  title: string;
  content: string;
};

type NotesState = Note[];

const initialState: NotesState = [{ id: 1, title: "제발", content: "됐으면" }];

function notes(
  state: NotesState = initialState,
  action: NotesAction
): NotesState {
  switch (action.type) {
    case ADD_NOTE:
      const nextId = Math.max(...state.map((note) => note.id)) + 1;
      return state.concat({
        id: nextId,
        title: action.payload.title,
        content: action.payload.content,
      });
    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
}

export default notes;
