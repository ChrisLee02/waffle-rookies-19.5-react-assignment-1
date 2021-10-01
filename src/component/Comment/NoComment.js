import "./NoComment.css";
import { useHistory, useParams } from "react-router-dom";
import { useStudentContext } from "../../context/Context";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NoComment = (props) => {
  const context = useStudentContext();
  const params = useParams();
  const history = useHistory();
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
      <div className={"NoComment"}>
        <p id={"NoCommentText"} className={"Text"}>
          댓글이 없어요 :(
        </p>
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

export default NoComment;
