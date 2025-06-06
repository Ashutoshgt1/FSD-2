import Car from './Car';
function Test3(){
    const carinfo={name:'ford',model:'mustang'}
    return(<>
    <h1>Car details</h1>
    <Car brand = {carinfo}/>
    </>)
}
export default Test3;