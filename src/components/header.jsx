import React from "react";
import Main from './main';
import {useCounterContext} from "./context/counter";

function Header() {
    const {useCounter} = useCounterContext();
    const {Count, increment} = useCounter();
    return (
        <>
                <div style={{width: '100%', height: '100px', backgroundColor: '#AA3366', position: 'fixed', top: '0'}} >
                    <h1>Count: &nbsp;{Count}</h1>
                    <button onClick={() => {increment()}}>+</button>
                </div>
                <Main />
        </>
    )
}
export default Header;