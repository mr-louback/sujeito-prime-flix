import './index.css';
import Routess from './routes';
import { ToastContainer} from 'react-toastify';
  
function App() {
  return (
    <div className='.App'>
      <ToastContainer autoClose={3000}/>
      <Routess />
    </div>
  )
}

export default App;
