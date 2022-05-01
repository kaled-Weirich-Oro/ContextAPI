import React from "react";
import {useCounterContext} from "./context/counter";

function Footer() {
    const {useCounter} = useCounterContext();
    const {Count, decrement} = useCounter();
    return (
        <div style={{width: '100%', height: '100px', backgroundColor: '#99AA55', position: 'fixed', bottom: '0'}} >
        <h1>Count: &nbsp;{Count}</h1>
        <button onClick={() => {decrement()}}>-</button>
    </div>
    )
}
export default Footer;