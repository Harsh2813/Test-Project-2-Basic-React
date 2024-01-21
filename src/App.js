import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import UserProfile from '../src/components/UserProfile';
import Auth from '../src/components/Auth';
import Header from '../src/components/Header';


function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
    <Header/>
    {!isAuth && <Auth/>}
    {isAuth && <UserProfile/>}
    <Counter />
    </>
    
  );
}

export default App;
