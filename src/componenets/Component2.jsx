import React from "react";
import MyButton from "./MyButton";

export default function Component2({ setHeadline }) {
  return (
    <div>
      Component 2
      <MyButton
        title="Headline sätts från Component 2"
        setHeadline={setHeadline}
        setHeadlineTo="Headline satt från Component 2"
      />
    </div>
  );
}
