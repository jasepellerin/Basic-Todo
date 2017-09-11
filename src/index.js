import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoBar from './components/TodoBar';
import TodoItem from './components/TodoItem';
import store from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Container = () => (
  <div class="container">
    <TodoBar title="Simple Todo List" />
    <TodoItem title="Example task" info="Some more info" />
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <Container />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();