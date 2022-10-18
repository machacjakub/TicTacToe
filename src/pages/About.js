import React from 'react'
import { useNavigate} from 'react-router-dom'

function About() {
  let navigate = useNavigate();
  return (<>
    <h1 className='heading'>About</h1>
    <p className='center homepage'> This simple app was made as one of the first projects of my portfolio.</p>
    <p className='center homepage'> <b>Explore mode</b> is deigned to simply play and try new tactics. You can switch between steps and explore new ways to win.</p>
    <p className='center homepage'> If you want to play against computer, there is <b>Single player</b> mode for you. But it provides only the hardest level of gameplay, so you won't be able to win <i>(try it)</i>. </p>
    <p className='center homepage'> Want to compare your TicTacToe skills with your friend? You can do that while tracking your score in <b>Two players</b> game mode.</p>
    <br/>
    <a href="https://github.com/machacjakub">
      <p className='center homepage' style={{cursor: 'pointer'}}><b className="errorLink">My GitHub profile</b></p>
    </a>
    <a href="mailto:webmaster@example.com">
      <p className='center homepage' style={{cursor: 'pointer'}}><b className="errorLink">mail@jakubmachac.cz</b></p>
    </a>
    </>
  )
}

export default About

//<p className='center homepage' style={{cursor: 'pointer'}} onClick={() => {navigate("/")}}><b className="errorLink">My portfolio</b></p>