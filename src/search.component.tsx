/**
 * Copyright 2023 - MagabeLab (Tanzania). All Rights Reserved.
 * Author Edwin Magabe
 */

import { useState } from "react";
import { Button, TextInput, Tile } from "@carbon/react";

type SearchProps = {
  inputLabel: string;
  buttonText: string;
  onSearch: (value: string) => void;
};

export default function Search(props: SearchProps) {
  const [search, setSearch] = useState("");

  return (
    <Tile
      style={{
        maxWidth: "400px",
      }}
    >
      <TextInput
        type="text"
        labelText={props.inputLabel}
        onChange={(e) => setSearch(e.currentTarget.value)}
        id={""}
      />
      <Button
        style={{ marginTop: "2px" }}
        onClick={() => props.onSearch(search)}
      >
        {props.buttonText}
      </Button>
    </Tile>
  );
}
