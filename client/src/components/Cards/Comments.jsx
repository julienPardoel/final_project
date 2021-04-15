import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import { postComment, getComment } from "../../actions/comments.actions";

const Comments = (comment) => {
  const [formValue, setFormValue] = useState("");
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const commentData = useSelector((state) => state.commentsReducer);
  const dispatch = useDispatch();

  const sendMessage = async () => {
    if (formValue) {
      const data = new FormData();
      data.append("commenterId", userData._id);
      data.append("message", commentData.message);

      await dispatch(postComment(data));
      dispatch(getComment());
    } else {
      alert("Veuillez entrer un message");
    }
  };

  return (
    <div className="comments">
      {/* formulaire de post */}
      <div className="comments-form">
        <form onSubmit={sendMessage}>
          <label htmlFor="">Message</label>
          <input
          className="input-message"
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Écrivez ici votre message..."
          />
          <input type="submit" value="Envoyer" disabled={!formValue} />
        </form>
      </div>
      {/* fil de commentaires */}
      <div className="comments-thread">
        <div className="comments-left">
          <img
            src={
              !isEmpty(usersData[0]) &&
              usersData
                .map((user) => {
                  if (user._id === comment.commenterId) return user.picture;
                  else return null;
                })
                .join("")
            }
            alt=""
          />
        </div>
        <div className="comments-right">
          <div className="comments-pseudo">
            <div className="pseudo">
              <h3>
                {!isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === comment.commenterId) return user.pseudo;
                      else return null;
                    })
                    .join("")}
              </h3>
            </div>
            <span>{dateParser(comment.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
