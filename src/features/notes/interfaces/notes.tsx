export type Note = {
  id: string;
  title: string;
  content: string;
  tags?: Tag[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Tag = {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type NotesState = {
  notes: Note[];
};
