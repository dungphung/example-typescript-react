import * as React from "react";
import { Subtract } from "utility-types";

export interface IIjectProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface IState {
  value: number;
}

interface IProps {
  maxValue?: number;
  minValue?: number;
}

const getDisplayName = <P extends {}>(Component: React.ComponentType<P>) => {
  return Component.displayName || Component.name || "Component";
};

const withCounter = <P extends IIjectProps>(
  Component: React.ComponentType<P>
) => {
  class WithCounter extends React.Component<
    Subtract<P, IIjectProps> & IProps,
    IState
  > {
    static displayName = `WithComponent${getDisplayName(Component)}`;
    static defaultProps = {
      maxValue: 10,
      minValue: 0
    };
    state: IState = {
      value: 0
    };

    onIncrement = () => {
      this.setState(prevState => {
        if (this.props.maxValue === prevState.value) {
          return null;
        }
        return {
          value: prevState.value + 1
        };
      });
    };

    onDecrement = () => {
      this.setState(prevState => {
        if (this.props.minValue === prevState.value) {
          return null;
        }
        return {
          value: prevState.value - 1
        };
      });
    };

    render() {
      const { maxValue, minValue, ...rest } = this.props as IProps;
      return (
        <Component
          {...rest}
          value={this.state.value}
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
        />
      );
    }
  }

  return WithCounter;
};

export { withCounter };
