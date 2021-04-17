import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import { postComment, getComment } from "../../actions/comments.actions";

const Comments = (props, comment) => {
  const [message, setMessage] = useState("");

  const [movie] = useState(props.movie);

  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const commentData = useSelector((state) => state.commentsReducer);
  const dispatch = useDispatch();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message) {
      dispatch(
        postComment(
          movie._id,
          commentData.movieId,
          commentData.commenterId,
          message
        )
      )
        .then(() => dispatch(getComment()))
        .then(() => setMessage(""));
    }
  };

  return (
    <div className="comments">
      {/* saisi des messages */}
      {userData._id && (
        <form onSubmit={sendMessage} className="comments-form">
          <input
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Laisser un commentaire"
          />
          <input type="submit" value="Envoyer" />
        </form>
      )}

      {/* fil de commentaires */}
      <div className="comments-thread">
        {movie.comment.map((comment) => {
          return (
            <div>
              {/* picture */}
              <div className="comments-left">
                <img
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === comment.commenterId)
                          return user.picture;
                        else return null;
                      })
                      .join("")
                  }
                  alt=""
                />
              </div>
              {/* pseudo */}
              <div className="comments-right">
                <div className="comments-pseudo">
                  <div className="pseudo">
                    <h3>
                      {!isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === comment.commenterId)
                              return user.pseudo;
                            else return null;
                          })
                          .join("")}
                    </h3>
                  </div>
                  <span>{dateParser(comment.createdAt)}</span>
                </div>
                <p>{comment.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
