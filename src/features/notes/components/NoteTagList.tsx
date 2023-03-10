import React from "react";
import { Tag } from "../interfaces";
import { NoteTagItem } from "./NoteTagItem";

type NoteTagListProps = {
  tags: Tag[];
};

export const NoteTagList: React.FC<NoteTagListProps> = ({
  tags,
}): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags?.map((tag) => (
        <NoteTagItem key={tag.id} tag={tag} />
      ))}
    </div>
  );
};
