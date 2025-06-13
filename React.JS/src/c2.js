import { useContext } from "react";
import { Fname, Fname1 } from "./p";

function C2() {
  const value1 = useContext(Fname);
  const value2 = useContext(Fname1);

  return (
    <h1 style={{ color: value1, backgroundColor: value2 }}>
      Welcome
    </h1>
  );
}

export default C2;
