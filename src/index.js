import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoBar from './TodoBar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const App = () => (
  <MuiThemeProvider>
    <TodoBar />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();

export default App;