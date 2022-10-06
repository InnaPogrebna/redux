import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputText } from "../redux/actions";


function Title() {
  const text = useSelector(state => {
    const { inputReducer } = state;
    return inputReducer.text;
  })

  const [title, setTitle] = useState("");

  const dispatch = useDispatch();


  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleTitleSubmit = (e) => {
    e.preventDefault();
    dispatch(inputText(title));
    setTitle("");
  }

  return (
    <div className="card-title">
      <form className="card-title-top" onSubmit={handleTitleSubmit} >
        <input type="text" onChange={handleChange} value={title} placeholder="Add title" />
        <button type="submit"
          className={`${(title==="") ? "button-disabled" : ""}`}
        >
          Add
        </button>
      </form>
      <p>{text}</p>
    </div>
  )
}

export default Title;