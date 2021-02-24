import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
//text
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Button size={ButtonSize.Large} disabled>Disabled</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Baidu</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
