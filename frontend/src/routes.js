import Index from "./pages/Index/Index"
import ProductInfo from "./pages/ProductInfo/ProductInfo"
import Category from "./pages/Category/Category"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
import Products from "./pages/Products/Products"
import Articles from "./pages/Articles/Articles"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Search from "./pages/Search/Search"

const routes = [
    {path: '/', element: <Index />},
    {path: '/product-info/:productName', element: <ProductInfo />},
    {path: '/category-info/:categoryName/:page', element: <Category />},
    {path: '/article-info/:articleName', element: <ArticleInfo />},
    { path: "/products/:page", element: <Products /> },
    { path: "/articles/:page", element: <Articles /> },
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    {path: '/contact', element: <Contact />},
    {path: '/about', element: <About />},
    {path: '/search/:value', element: <Search />},
]


export default routes