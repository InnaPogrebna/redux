import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';

function Loading(props) {
  const spinner = useSelector(state => state.appReducer.loading);

  return (
    <div className='loader-styles'>
      <Loader
        height="100"
        width="100"
        color="blue"
        type="TailSpin"
        visible={spinner}

      />
    </div>
  )
}

export default Loading