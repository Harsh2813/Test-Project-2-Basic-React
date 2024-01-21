import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/Auth';

const Header = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuthenticated);//many reducers h isiliye auth wale ke liye auth key di h index store me isiliye auth.isAuthenticated kiye state ko access krne ke liye

  const logoutHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
