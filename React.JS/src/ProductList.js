import ProductCard from './ProductCard'
import img2 from './1.png';
import logo from './logo.svg';
function ProductList(){
    const products=[{
        title:"iPhone15Pro",
        price:"10000",
        rating:4.8,
        image:img2
    },
    {
        title:"Samsung",
        price:"700",
        rating:5.0,
        image:logo
    }]
    return(
        <div>
            <ProductCard list={products}/>
        </div>
    )
}
export default ProductList;