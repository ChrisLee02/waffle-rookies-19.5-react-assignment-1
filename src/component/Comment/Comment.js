import "./Comment.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useStudentContext } from "../../context/Context";
import { toast } from "react-toastify";

const Comment = (props) => {
  const context = useStudentContext();
  const history = useHistory();
  const params = useParams();
  const id = params.id;
  const [commentMessage, setCommentMessage] = useState("");
  const commentAdd = () => {
    axios
      .post(
        context.baseURL + "/student/" + id + "/comment",
        { content: commentMessage },
        context.config
      )
      .then(() => {
        props.commentUpdate();
        setCommentMessage("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div>
      <div className={"CommentBox"}>
        <ul className={"CommentList"}>{props.comments}</ul>
      </div>
      <div className={"CommentInputBox"}>
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              commentAdd();
            }
          }}
          value={commentMessage}
          onChange={(e) => {
            setCommentMessage(e.target.value);
          }}
          className={"CommentInput"}
          placeholder={"댓글을 작성하세요"}
          type="text"
        />
        <button onClick={commentAdd} className={"CommentButton"}>
          작성
        </button>
      </div>
    </div>
  );
};

export default Comment;
