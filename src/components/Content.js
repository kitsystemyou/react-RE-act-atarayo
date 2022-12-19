import './Content.css';

const character_data = {
  "yudu": {
    "character_name":"ユヅ",
    "character_img_path": "https://image.jimcdn.com/app/cms/image/transf/dimension=320x1024:format=jpg/path/se095f67148f22699/image/ic9ef7aa04f85824a/version/1668512189/image.jpg",
    "cast_img_path":"https://pbs.twimg.com/profile_images/1566563843727589376/QVkoGuOl_400x400.jpg",
    "cast_name":"青木里菜",
    "text":"かわいい",
    "twitter": "https://twitter.com/MORE_RINA_A"
  },
  "aoi": {
    "character_name":"アオイ",
    "character_img_path": "https://image.jimcdn.com/app/cms/image/transf/dimension=310x1024:format=jpg/path/se095f67148f22699/image/i3e38624541eb84d6/version/1668678214/image.jpg",
    "cast_img_path":"https://pbs.twimg.com/profile_images/1603386945098465281/Rqr5n4pc_400x400.jpg",
    "cast_name":"福満薫",
    "text":"きれい",
    "twitter": "https://twitter.com/nngkaoru"
  }
}

export default function Content(props) {
  console.log(props.name)
  // props.name でキャラクター・キャスト様の判定
  if (props.name in character_data) {
    var character_name = character_data[props.name]["character_name"]
    var img_path = character_data[props.name]["character_img_path"]
    var cast_img_path = character_data[props.name]["cast_img_path"]
    var cast_name = character_data[props.name]["cast_name"]
    var text = character_data[props.name]["text"]
    var twitter = character_data[props.name]["twitter"]
  }
  else{
    img_path = "https://image.jimcdn.com/app/cms/image/transf/dimension=1980x10000:format=jpg/path/se095f67148f22699/image/ie223db32d772890a/version/1663659650/image.jpg"
  }
  var id_string = twitter.split("/")
  var twitter_id=id_string.pop()
  return (
    <div>
      <div className="character-name">
        <h2>{character_name}</h2>
      </div>
      <div className="content">
        <img src={img_path}
        className="character-image" alt="character" />
        <div>
        <img src={cast_img_path}
        className="cast-image" alt="cast" />
        {cast_name}さん <a className="twitter" href={twitter}>@{twitter_id}</a>
        <br></br>--説明文とか--
        <p>{text}</p>
        </div>
      </div>
    </div>
  );
}