import * as React from "react";
import FormTodo, { IState as ITodo } from "./FormTodo";
import ListTodos from "./ListTodos";

export interface IState {
  listTodos: ITodo[];
}

export default class Todo extends React.Component<{}, IState> {
  state: IState = {
    listTodos: []
  };

  onSubmit = (todo: ITodo) => {
    this.setState(prevState => {
      return {
        listTodos: [...prevState.listTodos, todo]
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <ListTodos listTodos={this.state.listTodos} />
        <FormTodo onSubmit={this.onSubmit} />
      </div>
    );
  }
}
