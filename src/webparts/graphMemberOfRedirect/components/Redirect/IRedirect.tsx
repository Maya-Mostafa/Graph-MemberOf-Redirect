import * as React from 'react';
import { useHistory } from "react-router-dom";

export default function IRedirect() {
  let history = useHistory();

  function handleClick() {
    history.push("https://google.com");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go Home
    </button>
  );
}