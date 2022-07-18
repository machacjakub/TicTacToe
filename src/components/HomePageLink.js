import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import circle from './img/circle.png'
import cross from './img/cross.png'

function HomePageLink(props) {
  let hoverCircle = <div className='hpimg'><img  src={cross} width="35px" height="35px" style={{opacity: "30%"}} alt='circle'/></div>;
  let hoverCross = <div className='hpimg'><img  src={cross} width="35px" height="35px" style={{opacity: "30%"}} alt='cross'/></div>;
  let img = <div className='hpimg'><img  src={circle} width="35px" height="35px" style={{opacity: "6%"}} alt='circle'/></div>;
  let navigate = useNavigate();
  const [displayx, setDisplayx]= useState(false);
  function hover(){
    setDisplayx(true);
  }
  function changeBack(){
    setDisplayx(false)
  }
  return (
    <div className='hpitem'>
      {displayx ? hoverCircle : img}
      <div
      className='hplink'
      onClick={() => {navigate(props.navigate)}} onMouseOver={hover} onMouseLeave={changeBack}>{props.text}
      </div>
      {displayx ? hoverCross : img}
    </div>
  )
}

export default HomePageLink;