import { useId } from "react";

export default function TagList(props) {
  const tag = props.tag;
  return (
    <>
      <span key={props.key} className="bg-gray-500 rounded-lg p-1 m-1 text-white">
        {tag}
      </span>
    </>
  );
}
