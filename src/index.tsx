import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './components/atoms/button';

interface IAppProps {
  name: string;
}
const App = (props: IAppProps) => (
  <>
    <h1>Market UI {props.name}</h1>
    <Button variant="primary">click me</Button>
  </>
);

const root = document.getElementById('root');

ReactDOM.render(<App name={'monalisa'} />, root);
