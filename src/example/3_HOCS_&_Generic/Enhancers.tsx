import * as React from "react";

function getDisplayName<P>(WrappedComponent: React.ComponentType<P>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

interface IProps {
  loading: boolean;
}

const withLoading = <P extends {}>(Component: React.ComponentType<P>) => {
  class WithLoading extends React.Component<P & IProps, {}> {
    static displayName = `WithSubscription${getDisplayName(Component)}`;

    render() {
      const { loading, ...rest } = this.props as IProps;
      return loading ? <div>Loading....</div> : <Component {...rest} />;
    }
  }

  return WithLoading;
};

const withLoadingSFC = <P extends {}>(
  Component: React.ComponentType<P>
): React.SFC<P & IProps> => ({ loading, ...rest }: IProps) => {
  if (loading) {
    return <div>Loading....</div>;
  }
  return <Component {...rest} />;
};

export { withLoading, withLoadingSFC };
