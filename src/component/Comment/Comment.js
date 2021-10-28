import './Comment.css';
import {useRef, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

const Comment = (props) => {
    const params = useParams();
    const id = params.id;
    const [commentMessage, setCommentMessage] = useState('');
    const commentAdd = () => {
        axios
            .post('/student/' + id + '/comment', {content: commentMessage})
            .then(() => {
                props.setPage(1);
                props.commentUpdate();
                setCommentMessage('');

            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });

    };
    const ulRef = useRef();
    const handleScroll = () => {
        //
        if (-1 < ulRef.current.clientHeight + ulRef.current.scrollTop - ulRef.current.scrollHeight && ulRef.current.clientHeight + ulRef.current.scrollTop - ulRef.current.scrollHeight < 1 && props.page!==null) {
            props.commentUpdate();
        }
    }
    return (
        <div>
            {props.comments.length === 0 ? (
                <p
                    className={'NoComment Text'}>
                    댓글이 없어요 :(
                </p>
            ) : (
                <ul ref={ulRef} onScroll={handleScroll}
                    className={'CommentBox'}
                    id={'CommentList'}>{props.comments}</ul>
            )}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    commentAdd();
                }}
                className={'CommentInputBox'}
            >
                <input
                    value={commentMessage}
                    onChange={(e) => {
                        setCommentMessage(e.target.value);
                    }}
                    className={'CommentInput'}
                    placeholder={'댓글을 작성하세요'}
                    type="text"
                />
                <button type={'submit'} className={'CommentButton'}>
                    작성
                </button>
            </form>
        </div>
    );
};

export default Comment;
