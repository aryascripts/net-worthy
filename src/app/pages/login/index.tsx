import React, { useState } from "react";
import { useDatabase } from "./../../hooks/useDatabase";

export const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { db, create } = useDatabase();

  return (
    <div>
      <input
        type="text"
        name="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        onClick={() => {
          create({ name: username, password });
        }}
      >
        submit
      </button>
    </div>
  );
};
