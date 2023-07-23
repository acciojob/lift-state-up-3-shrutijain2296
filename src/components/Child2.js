import React from "react";

const Child2 = ({setSelectedOption, option}) =>{

    return(
        <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick = {() => setSelectedOption(option)}>{option}</button>
        </div>
    )
}
export default Child2;