const Arrimg=()=>{
    const arr = ["img1.jpg","img2.jpg","images.jpeg"]
    return(<div>
        <h1>using Arraymap</h1>
        {
            arr.map((value)=>{
                return<img src={value} height='200px' width='200px'></img>
})}
    </div>)
}
export default Arrimg;