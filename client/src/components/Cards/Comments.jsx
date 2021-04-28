import React, { useState, useEffect } from "react";
import axios from "axios";
import { dateParser } from "../../components/Utils";

const Comments = ({ movieId }) => {

  const [message, setMessage] = useState("");
  // console.log(message);

  const [commenter, setCommenter] = useState("");
  console.log(commenter);

  // const [movieId, setMovieId] = useState("");

  const [comment, setComment] = useState([]);

  const [data, setData] = useState([]);
  console.log(data);

  const handleComment = async (e) => {
    e.preventDefault();

    axios({
      methode: "post",
      url: `${process.env.REACT_APP_API_URL}api/comments/`,
      data: {
        movieId,
        commenter: commenter,
        message: message
      },
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/comments/${movieId}`)
      .then((res) => {
        setComment(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}api/user/all`).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}api/user`).then((res) => {
      setCommenter(res.data)
    })
  })

  return (
    <div className="comments-container">
      
      {/* fil des messages */}
      <div className="comments-thread-container">
        {comment.map((comment) => (
          <div className="comments-thread" comment={comment}>
            {console.log(comment)}
            <div className="comments-picture">
              <img
                src={data
                  .map((user) => {
                    if (user._id === comment.commenter) return user.picture;
                  })
                  .join("")}
                alt=""
              />
            </div>
            <div className="comments-details">
              <div className="comments-pseudo">
                {data.map((user) => {
                  if (user._id === comment.commenter) return user.pseudo;
                })}
              </div>
              <div className="comments-message">{comment.message}</div>
              <div className="comments-date">Message posté {dateParser(comment.createdAt)}</div>
            </div>
          </div>
        ))}
      </div>
      {/* formulaire d'envoi des messages */}
      <div className="comments-form">
        <form onSubmit={handleComment} enctype="application/json">
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            name=""
            className="input-message"
          />
          <input className="input-btn" type="submit" value="Send !" />
        </form>
      </div>
    </div>
  );
};

export default Comments;
