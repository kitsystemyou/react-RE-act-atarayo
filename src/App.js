import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>可惜夜の泪 キャラクター&キャスト様紹介</h1>
        <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/se095f67148f22699/image/i3cf6302b72aeb55a/version/1665661115/image.jpg"
          className="main-theme" alt="main-theme" />
        <Link to="/character">キャラクター&キャスト様一覧へ</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created with&nbsp;
          <a href="https://ja.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >React.js</a>
        </p>
      </header>
    </div>
  );
}

export default App;
