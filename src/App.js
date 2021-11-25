import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { makeStyles } from '@material-ui/core/styles';
import { auth } from './firebase';
import Routes from "./router/routes"
import AuthRouter from "./router/authRoute";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  const { pathname } = location;
  const classes = useStyles();
  const openLoading = useSelector(state => state.loadingStatusReducer);
  const userId = localStorage.userId;

  const logout = () => {
    dispatch({ type: "SET_OPENLOADING", payload: true })
    auth.signOut();
    localStorage.clear();
    if (pathname === "/pages/member") {
      history.push('/pages/home');
    };
    alert('logout successful');
    dispatch({ type: "SET_OPENLOADING", payload: false })
  }

  const checkLogin = userId => {
    if (userId) {
      logout();
    } else {
      history.push('/pages/login');
    }
  }

  return (
    <div>
      <Backdrop className={classes.backdrop} open={openLoading}>
        <CircularProgress />
      </Backdrop>
      <Header>
        <ul>
          <li>
            <Link to="/pages/home">Home</Link>
          </li>
          <li>
            <Link to="/pages/products">Products</Link>
          </li>
          <li>
            <Link to="/pages/member">Member</Link>
          </li>
        </ul>
        <IconContent>
          <Link to="/pages/cart">
            <HiOutlineShoppingCart style={iconStyle} />
          </Link>
          <LoginStatus onClick={e => {
            e.preventDefault();
            checkLogin(userId);
          }}>
            {userId ? "Sign up" : "Sign in"}
          </LoginStatus>
        </IconContent>
      </Header>
      <Main>
        <AuthRouter routes={Routes}/>
      </Main>
    </div>
  );
}

export default App;

const iconStyle = { fontSize: "1.5rem", color: "#fff" }
const IconContent = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    cursor: pointer;
    border-radius: 50%;
    width: 40%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #64758E;
    }
  }
`
const LoginStatus = styled.div`
  cursor: pointer;
  border-radius: 10px 10px;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  &:hover {
    background: #64758E;
  }
`
const Header = styled.header`
  width: 100%;
  height: 80px;
  background: #3D4858;
  padding-left: 6rem;
  padding-right: 6rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 30%;
    a {
      border-radius: 10px 10px;
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      &:hover {
        background: #64758E;
      }
    }
  }
`
const Main = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: scroll;
  margin-top: 80px;
  background: #ECECEC;
`