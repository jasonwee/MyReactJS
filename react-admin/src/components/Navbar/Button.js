import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to='sign-up'>
      <button className='profile'>P</button>
    </Link>
  );
}

export default Button;
