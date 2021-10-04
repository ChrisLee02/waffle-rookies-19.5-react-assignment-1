import "./NoComment.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NoComment = (props) => {
  const params = useParams();
  const id = params.id;
  const [commentMessage, setCommentMessage] = useState("");

  const commentAdd = () => {
    axios
      .post("/student/" + id + "/comment", { content: commentMessage })
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          commentAdd();
        }}
        className={"CommentInputBox"}
      >
        <input
          value={commentMessage}
          onChange={(e) => {
            setCommentMessage(e.target.value);
          }}
          className={"CommentInput"}
          placeholder={"댓글을 작성하세요"}
          type="text"
        />
        <button type={"submit"} className={"CommentButton"}>
          작성
        </button>
      </form>
    </div>
  );
};

export default NoComment;
