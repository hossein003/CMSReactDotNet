import Index from "./pages/Index/Index"
import ProductInfo from "./pages/ProductInfo/ProductInfo"
import Category from "./pages/Category/Category"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"

const routes = [
    {path: '/', element: <Index />},
    {path: '/product-info/:productName', element: <ProductInfo />},
    {path: '/category-info/:categoryName', element: <Category />},
    {path: '/article-info/:articleInfoName', element: <ArticleInfo />},
]


export default routes