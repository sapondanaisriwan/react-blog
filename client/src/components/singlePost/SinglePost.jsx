import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="" alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet consectetur
        <div className="singlePostEdit">
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Sapondanai Sriwan</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
        <p className="singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid alias esse incidunt magni qui eligendi repellat sed dolorem, voluptates ab id iste necessitatibus, ut consectetur aliquam, cupiditate modi consequatur quo!</p>
      </div>
    </div>
  );
}
