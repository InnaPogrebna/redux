import { useState, useEffect } from 'react';
import {commentUpdate, commentDelete } from "../redux/actions";
import { useDispatch } from 'react-redux';

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id))
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id))
  }

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      {/* <input type="submit" hidden /> */}
      <button type="submit" className='button'>Update</button>
    </form>
  )
}

export default SingleComment;