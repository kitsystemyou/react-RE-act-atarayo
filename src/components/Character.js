import './Character.css';
import Content from './Content'
import { Link, useParams } from 'react-router-dom';

export default function Character() {
  const { characteID } = useParams()
    return (
      <div>
        <div className="logo-space">
          <img src="https://pbs.twimg.com/profile_images/1302068627458330625/35ruJoSf_400x400.jpg"
          className="logo" alt="logo" /><br></br>
        <Link to="/">トップページ</Link>　　
        <Link to="/character/yudu">ユヅ</Link>/
        <Link to="/character/yudu">カンナ</Link>/
        <Link to="/character/yudu">イグサ</Link>/
        <Link to="/character/yudu">キョウ</Link>/
        <Link to="/character/yudu">イマリ</Link>/
        <Link to="/character/yudu">バァバ</Link>/
        <Link to="/character/yudu">ウツギ</Link>/
        <Link to="/character/aoi">アオイ</Link>/
        <Link to="/character/yudu">リンドウ</Link>/
        <Link to="/character/yudu">アリウム</Link>/
        <Link to="/character/yudu">アヤメ</Link>/
        <Link to="/character/yudu">サルビア</Link>
        </div>
        <div className="Character">
          <h2>Character&Cast</h2>
          <Content name={characteID}/>
        </div>
      </div>
    );
  }