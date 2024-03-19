import Index from "./pages/Index/Index"
import ProductInfo from "./pages/ProductInfo/ProductInfo"
import Category from "./pages/Category/Category"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
import Products from "./pages/Products/Products"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

const routes = [
    {path: '/', element: <Index />},
    {path: '/product-info/:productName', element: <ProductInfo />},
    {path: '/category-info/:categoryName/:page', element: <Category />},
    {path: '/article-info/:articleInfoName', element: <ArticleInfo />},
    {path: '/products/:page', element: <Products />},
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
]


export default routes