import { SyncLoader } from "react-spinners";
import './style.css';
function Loading() {
  return (
    <div className='loading'>
    <SyncLoader size={15} color={'#123abc'} loading={true} />
  </div>
  )
}
export default Loading;