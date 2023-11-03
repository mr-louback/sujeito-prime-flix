import './style.css';
import { useState } from 'react'
function Footer({ text }) {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div className="AppFooter">
      <h1>My {text} Component</h1>
      <h2 onClick={handleCount}>click to count {count}</h2>
    </div>
  )
}
export default Footer;