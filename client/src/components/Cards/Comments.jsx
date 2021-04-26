import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ movieId }) => {
  const [commenter, setCommenter] = useState("");
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState([]);

  const handleComment = async (e) => {
    e.preventDefault()
    axios({
      methode : "post",
      url : `${process.env.REACT_APP_API_URL}api/comments/`,
      data : {
        movieId,
        commenter,
        message,
      }
    })
      
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/comments/${movieId}`)
      .then((res) => {
        setComment(res.data);
      });
  }, []);

  return (
    <div className="comments-container">
      {/* formulaire d'envoi des messages */}
      <div className="comments-form">
        <form onSubmit={handleComment} enctype="application/json">
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            name=""
          />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
      {/* fil des messages */}
      <div className="comments-thread">

        {comment.map((comment) => (
          <div comment={comment}>
            <div className="comment-picture"><img src="" alt=""/></div>
            <div className="comments-pseudo">{comment.commenter}</div>
            <div className="comments-message">{comment.message}</div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Comments;
