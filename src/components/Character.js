import './Character.css';
import Content from './Content'

export default function Character() {
    return (
      <div>
        <div className="logo-space">
          <img src="https://pbs.twimg.com/profile_images/1302068627458330625/35ruJoSf_400x400.jpg"
          className="logo" alt="logo" />
        </div>
        <div className="Character">
          <h2>Character</h2>
          <Content name="ユヅ"/>
        </div>
      </div>
    );
  }