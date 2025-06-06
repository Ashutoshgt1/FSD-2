function  ProductCard(props){
    return(
        <>
            {
                props.list.map((product,index)=>(
                    <div key={index}>
                        <img src={product.image} width="100px"/>
                        <h2>{product.title}</h2>
                        <p>Price:{product.price}</p>
                        <p>Rating:{product.rating}</p>
                    </div>
                )
                )
            }
        </>
    )
}
export default ProductCard;