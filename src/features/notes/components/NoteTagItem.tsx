import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "../interfaces";

type NoteTagItemProps = {
  tag: Tag;
};

export const NoteTagItem: React.FC<NoteTagItemProps> = ({
  tag,
}): JSX.Element => {
  return (
    <Link
      to="#"
      className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
    >
      #{tag.name}
    </Link>
  );
};
