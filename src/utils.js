import { useState } from "react";

export function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = e => setValue(e.target.value);
  return [value, handleChange, setValue];
}

export const isValidJson = json => {
  try {
    return Boolean(JSON.parse(json));
  } catch (error) {
    return false;
  }
};

export const formatJson = (json, space = 4) => {
  try {
    const o = JSON.parse(json);
    const string = JSON.stringify(o, null, +space);
    return string;
  } catch (error) {
    return json;
  }
};
