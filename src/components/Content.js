import './Content.css';

const img_path_list = {
  "ユヅ": "https://image.jimcdn.com/app/cms/image/transf/dimension=320x1024:format=jpg/path/se095f67148f22699/image/ic9ef7aa04f85824a/version/1668512189/image.jpg"
}


export default function Content(props) {
  if (props.name in img_path_list) {
    var img_path = img_path_list[props.name]
  }
  else{
    img_path = "https://image.jimcdn.com/app/cms/image/transf/none/path/se095f67148f22699/image/i3cf6302b72aeb55a/version/1665661115/image.jpg"
  }
    return (
      <div>
        <div className="character-name">
          <h2>{props.name}</h2>
        </div>
        <div className="content">
          <img src={img_path}
          className="character-image" alt="character" />
          <p className="text">*ここになんか書く予定</p>
        </div>
      </div>
    );
  }