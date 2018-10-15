import * as React from "react";

interface IProps {
  defaultColor?: any;
  onSubmit(todo: IState): void;
}

type DefaultProps = {
  defaultColor: "#00BCD4" | "#eee" | "#aaa";
};

export interface IState {
  id: number;
  text: string;
}

export default class Form extends React.Component<IProps, IState> {
  static defaultProps: DefaultProps = {
    defaultColor: "#00BCD4"
  };

  state: IState = {
    id: 0,
    text: ""
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value,
      id: Date.now()
    });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.text !== "") {
      const todo = { ...this.state };

      this.setState(
        {
          text: ""
        },
        () => {
          this.props.onSubmit(todo);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={this.onChange} />
          <button style={{ color: this.props.defaultColor }}>Submit</button>
        </form>
      </div>
    );
  }
}
