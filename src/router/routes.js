import Products from '../pages/products';
import ProductDetail from '../pages/productDetail';
import Cart from '../pages/cart';
import Login from "../pages/login";
import Register from "../pages/register";
import Member from "../pages/member";
import Home from "../pages/home";

const routes = [
  {name: "home", path: "/pages/home", component: Home},
  {name: "products", path: "/pages/products", component: Products},
  {name: "productDetail", path: "/pages/productDetail", component: ProductDetail},
  {name: "cart", path: "/pages/cart", component: Cart},
  {name: "login", path: "/pages/login", component: Login},
  {name: "register", path: "/pages/register", component: Register},
  {name: "member", path: "/pages/member", component: Member, auth: true}
];

export default routes;