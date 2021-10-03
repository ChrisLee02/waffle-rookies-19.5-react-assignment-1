import './Comment.css';
import {useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

const Comment = (props) => {
    const params = useParams();
    const id = params.id;
    const [commentMessage, setCommentMessage] = useState('');
    const commentAdd = () => {
        axios
            .post(
                '/student/' + id + '/comment',
                {content: commentMessage}
            )
            .then(() => {
                props.commentUpdate();
                setCommentMessage('');
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <div>
            <div className={props.comments.length === 0 ? 'NoComment' : 'CommentBox'}>
                {props.comments.length === 0 ?
                    <p id={'NoCommentText'} className={'Text'}>
                        댓글이 없어요 :(
                    </p>
                    :
                    <ul className={'CommentList'}>{props.comments}</ul>
                }
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                commentAdd();
            }} className={'CommentInputBox'}>
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
