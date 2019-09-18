import * as React from 'react';

interface IAuthProviderState {
  isAuth: boolean;
}

const AuthContext = React.createContext({ isAuth: false, login: () => {}, logout: () => {} });

const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component<{}, IAuthProviderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }
  public render() {
    return (
      <AuthContext.Provider
        value={{ isAuth: this.state.isAuth, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }

  private login = () => {
    setTimeout(() => this.setState({ isAuth: true }), 1000);
  };

  private logout = () => {
    this.setState({ isAuth: false });
  };
}

export { AuthProvider, AuthConsumer };
