import React from 'react'

const UseEffect = () => {
    const [myNumber, setmyNumber] = React.useState(0);
    React.useEffect(() => {
        document.title = `Chats(${myNumber})`
       
    });
    console.log(setmyNumber);
    return (
        <>
            <div className="center_div">
                <p> {myNumber} </p>
                <div className="button2" onClick={() => setmyNumber(myNumber + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
               
            </div>
        </>
    );
}


export default UseEffect
