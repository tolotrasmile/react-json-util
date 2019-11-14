import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import Select from "./select";

import { useInput, isValidJson, formatJson } from "./utils";

import "./styles.css";

function App() {
  const [isValid, setValid] = useState(false);
  const [text, onChangeText, setText] = useInput();

  useEffect(() => {
    setValid(isValidJson(text));
  }, [text]);

  const onClickBeutify = e => {
    setText(formatJson(text));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: 20
          }}
        >
          <textarea
            {...{ value: text, onChange: onChangeText }}
            placeholder="Paste your JSON here"
            style={{
              flex: 1,
              backgroundColor: "transparent",
              fontFamily:
                "sans serifmonaco, Consolas, Menlo, Courier, monospace",
              fontSize: 14,
              padding: 20,
              color: isValid ? "black" : "red",
              border: "2px solid #5e5ce6"
            }}
          />
        </div>
        <div
          style={{
            padding: 20,
            paddingTop: 0,
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <Button onClick={onClickBeutify} style={{ marginRight: 10 }}>
              Beautify
            </Button>
            <Button>Validate</Button>
          </div>
          <div>
            <Select
              options={[
                { value: 4, label: "4 spaces" },
                { value: 2, label: "4 spaces" }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
