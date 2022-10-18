import React from 'react';
import {useState} from 'react';
import circle from './img/circle.png'
import cross from './img/cross.png'

function Square(props) {
    const [val, setVal]= useState(props.value);
    const x = <img src={cross} width="100%" height="100%" alt='cross' />;
    const xhover = <img src={cross} width="100%" height="100%" style={{opacity: "20%"}} alt='cross'/>;
    const o = <img src={circle} width="100%" height="100%" alt='circle'/>;
    const ohover = <img src={circle} width="100%" height="100%" style={{opacity: "20%"}} alt='circle'/>;
    function hover(e){
        if(!props.winner && val==null ){
            if(props.xIsNext){
                setVal(xhover);
            } else if (!props.xIsNext){
                setVal(ohover);
            }
        }
    }
    
    function changeBack(e){
        setVal(null);
    }

    return (
    <button className="square"
        onClick={props.onClick}
        onMouseOver={hover}
        onMouseLeave={changeBack}
        style={{backgroundColor: props.winner && props.highlight ? '#d0ffca' : props.draw ? '#f3c5c5' :'white'}}
    >
        {props.value == null ? val : props.value == "X" ? x : o}

    </button>
  );
}

export default Square;