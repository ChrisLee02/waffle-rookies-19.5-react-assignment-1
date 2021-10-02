import "./NoComment.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNetworkContext } from "../../context/NetworkContext";

const NoComment = (props) => {
  const networkContext = useNetworkContext();
  const params = useParams();
  const id = params.id;
  const [commentMessage, setCommentMessage] = useState("");

  const commentAdd = () => {
    axios
      .post(
        networkContext.baseURL + "/student/" + id + "/comment",
        { content: commentMessage },
        networkContext.config
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
