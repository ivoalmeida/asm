import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IAppProps {
  name: string;
}
const App = (props: IAppProps) => <h1>Market UI {props.name}</h1>;

const root = document.getElementById('root');

ReactDOM.render(<App name={'monalisa'} />, root);
