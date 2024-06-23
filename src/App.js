import { useState } from "react";

const fs = [
  {
    name: "public",
    type: "folder",
    children: [
      {
        name: "index.html",
        type: "file",
      },
    ],
  },
  {
    name: "src",
    type: "folder",
    children: [
      { name: "App.js", type: "file" },
      { name: "index.js", type: "file" },
      { name: "style.css", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [{ type: "file", name: "Main.js" }],
      },
    ],
  },
  { name: "package.json", type: "file" },
];

export default function App() {
  const DisplayFile = (props) => {
    const [expanded, setIsExpanded] = useState(false);
    return props.el.type === "file" ? (
      <p style={{ marginLeft: `${props.d * 15}px` }}>{props.el.name}</p>
    ) : (
      <>
        <p
          onClick={() => setIsExpanded(!expanded)}
          style={{ marginLeft: `${props.d * 15}px` }}
        >
          {`${expanded ? "^" : ">"} ${props.el.name}`}
        </p>
        {expanded &&
          props.el.children.map((el) => {
            return <DisplayFile el={el} d={props.d + 1} />;
          })}
      </>
    );
  };

  return (
    <div>
      {fs.map((el) => {
        return <DisplayFile el={el} d={0} />;
      })}
    </div>
  );
}
