import * as React from "react";
import { withLoading, withLoadingSFC } from "./Enhancers";
import { withCounter } from "./injectors";

interface IState {
  loading: boolean;
}

class Wellcome extends React.Component<{}, {}> {
  render() {
    return <h1>Chào mừng đến với trang web</h1>;
  }
}

export const WrapperWellcome = withLoading(Wellcome);

export const WrapperWellcomeSFC = withLoadingSFC(Wellcome);

interface IPropsCalculate {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

class Calculate extends React.Component<IPropsCalculate, {}> {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <input type="text" value={value} readOnly={true} />
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

const WrapperCalculate = withCounter(Calculate);

export default class Home extends React.Component<{}, IState> {
  state: IState = {
    loading: true
  };

  connectServer = () => {
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    setTimeout(this.connectServer, 3000);
  }

  render() {
    return (
      <div>
        <WrapperWellcome loading={this.state.loading} />
        <WrapperCalculate maxValue={20} minValue={-1} />
      </div>
    );
  }
}
