import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from "uniqid";
import SingleComment from "./SingleComment";
import { commentCreate, commentsLoad } from "../redux/actions";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector(state => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  })

  useEffect(() => {
    dispatch(commentsLoad())
  }, [])

  const handleInput = (e) => {
    setTextComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment('');
  }

  return (
    <>
      <div className="card-comments">
        <form className="comments-item-create" onSubmit={handleSubmit}>
          <input type="text" value={textComment} onChange={handleInput} />
          <button type="submit" className={`button ${(textComment === "") ? 'button-disabled' : ''}`} >Add</button>
        </form>
        <div className='card-wrapper'>
          <div className='card-block'>
            {
              (comments.length > 0)
              &&
              comments.map(res => {
                return <SingleComment key={res.id} data={res} />
              })
            }
          </div>

        </div>
      </div>
    </>


  )
}

export default Comments;