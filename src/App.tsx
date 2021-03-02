import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert from './components/Alert/Alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
//text
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={1} onSelect={(index) => { alert(index) }} mode='vertical'>
          <MenuItem index={1}>
            cool link
          </MenuItem>
          <MenuItem index={2} disabled>
            cool link2
          </MenuItem>
          <MenuItem index={3}>
            cool link3
          </MenuItem>
          <li>asdfasd</li>
        </Menu>
        <Button>Hello</Button>
        <Button size={ButtonSize.Large} disabled>Disabled</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} className='klass'>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Baidu</Button>
        <Alert type='success' message='hello' description='talsdkjflajf'/>
        <Alert type='warning' message='hello' description='talsdkjflajf' />
        <Alert type='danger' message='hello' description='talsdkjflajf' closable />
        <Alert message='hello' description='talsdkjflajf' />
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
