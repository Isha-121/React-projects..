import React from 'react';
import "./style.css";

const UseState = () => {
    //const initialData = 10;
    const [myNumber, setmyNumber] = React.useState(0);
    console.log(setmyNumber);
    return (
        <>
          <div className="center_div">
              <p> {myNumber} </p>
              <div className="button2" onClick={()=>setmyNumber(myNumber+1)}>
                  <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
              </div>
                <div className="button2" onClick={() => myNumber > 0 ?setmyNumber(myNumber - 1):setmyNumber(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                   DECR
                </div>
          </div>
        </>
    );
}

export default UseState;
