//create react app to pass colour red to background color and font size italic 
// as proprty to componenet and apply css to lj students text return in p tag
import PEx1 from './PEx1';

// Parent component passing style props
function PB1() {
  const mystyle = {
    color:'red',
    backgroundColor: 'yellow',
    fontSize:'25px',
    fontStyle: 'italic'
  };

  return (
    <>
    <div>
      <PEx1 css={mystyle} />
    </div>
    </>
  );
}

export default PB1;