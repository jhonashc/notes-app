export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type NotesState = {
  notes: Note[];
};
