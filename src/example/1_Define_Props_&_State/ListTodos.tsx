import * as React from "react";
import { IState as IProps } from "./index";

const ListTodos: React.SFC<IProps> = ({ listTodos }) => {
  return (
    <ul>
      {listTodos.map(todo => (
        <li key={todo.id}>+ {todo.text}</li>
      ))}
    </ul>
  );
};

export default ListTodos;
