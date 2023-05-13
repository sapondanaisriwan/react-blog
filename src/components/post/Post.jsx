import "./post.css";

export default function Post() {
  return (
    <div className="Post">
      <img
        className="postImg"
        src="https://avatars.githubusercontent.com/u/64634605?v=4"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ratione
          ullam animi impedit nemo voluptas aliquam esse laboriosam id!
          Architecto excepturi nisi eligendi! Ipsum molestiae tempora sapiente
          esse quibusdam in?
        </p>
      </div>
    </div>
  );
}
