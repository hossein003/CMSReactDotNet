import Index from "./pages/Index/Index";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import Products from "./pages/Products/Products";
import Articles from "./pages/Articles/Articles";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Search from "./pages/Search/Search";
import AdminPanel from "./pages/AdminPanel/index";
import Users from "./pages/AdminPanel/Users/Users";
import AdminProducts from "./pages/AdminPanel/Products/Products";
import Menus from "./pages/AdminPanel/Menus/Menus";
import AdminArticles from "./pages/AdminPanel/Articles/Articles";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/product-info/:productName", element: <ProductInfo /> },
  { path: "/category-info/:categoryName/:page", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/products/:page", element: <Products /> },
  { path: "/articles/:page", element: <Articles /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/search/:value", element: <Search /> },
  {
    path: "/p-admin/*",
    element: <AdminPanel />,
    children: [
      { path: "users", element: <Users /> },
      { path: "products", element: <AdminProducts /> },
      { path: "menus", element: <Menus /> },
      { path: "articles", element: <AdminArticles /> },
    ],
  },
];

export default routes;
