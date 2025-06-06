import Test from './Test';
import Test2 from './Test2'
import './App.css'
import Arraymap from './Arraymap';
import Arrimg from './Arrimg';
import Arrayfilter1 from './Arrayfilter1';
import Arrayfilter2 from './Arrayfilter2';
import Arrayfilter3 from './Arrayfilter3';
import Football  from './Event1';
import Event2  from './Event2';
import Event3  from './Event3';
// import Event4  from './Qb374';
import Main from './component/Main'
import Main1 from './component/a1'
import CountApp  from './Hook/CountApp';
import QB415 from './QB-415';
import QB416 from './QB416';
import QB417 from './QB417';
import QB417_2 from './QB417_2';
import QB418 from './QB418'
import Todolist from './Todolist';


function App() {
  const name = "champak";
  const mystyle = {backgroundColor:'blue',color:'red'}
  return (
    <>
    <div>
   {/* <h1 className='c1'>Hello {name}</h1>
   <img src="img1.jpg" align={"center"}></img>
   <h2 style={mystyle}>jay shree walekum </h2>

   <Test></Test>
   <Test2></Test2>
   <Arraymap></Arraymap>
   <Arrimg></Arrimg> */}
   <Arrayfilter1></Arrayfilter1><br></br>
<Arrayfilter2></Arrayfilter2><br></br>
<Arrayfilter3></Arrayfilter3><br></br>
<Football/><br></br>
  <Event2/><br></br>
  <Event3/><br></br>

{/* <Event4></Event4> */}
<Main/><br></br>
<Main1/><br></br>
<CountApp/><br></br>
<QB415/><br></br>
<QB416></QB416><br></br>
<QB417/><br></br>
<QB417_2/><br></br>
<QB418/><br></br>
<Todolist/><br></br>
      </div>
   </>
  );
}

export default App;
