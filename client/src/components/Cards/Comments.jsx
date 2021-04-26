import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { dateParser } from "../../components/Utils";

const Comments = ({ movieId }) => {
  // const usersData = useSelector((state) => state.usersReducer);

  const [message, setMessage] = useState("");

  const [comment, setComment] = useState([]);

  const [data, setData] = useState([]);
  console.log(data);

  const handleComment = async (e) => {
    e.preventDefault();

    axios({
      methode: "post",
      url: `${process.env.REACT_APP_API_URL}api/comments/`,
      data: {
        message,
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
                {/* {comment.commenter} */}
              </div>
              <div className="comments-message">{comment.message}</div>
              <div className="comments-date">Message posté {dateParser(comment.createdAt)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
