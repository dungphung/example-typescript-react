import * as React from "react";

interface IPropsWithLoading {
  children(props: IStateWithLoading): JSX.Element;
}

interface IStateWithLoading {
  loading: boolean;
}

class WithLoading extends React.Component<
  IPropsWithLoading,
  IStateWithLoading
> {
  state: IStateWithLoading = {
    loading: true
  };

  connectServer = () => {
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.connectServer();
    }, 3000);
  }

  getProps = () => {
    return {
      loading: this.state.loading
    };
  };

  render() {
    return this.props.children(this.getProps());
  }
}

class About extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <WithLoading>
          {({ loading }) =>
            loading ? <div>Loading....</div> : <h1>About page</h1>
          }
        </WithLoading>
      </div>
    );
  }
}

export default About;
