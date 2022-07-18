import React from 'react'
import HomePageLink from '../components/HomePageLink'

function Home() {
  return (
    <>
        <h1 className='heading'>Tic Tac Toe</h1>
        <p className='center homepage'>Hi! Welcome to Tic Tac Toe game app.</p>
        <p className='center homepage'>You can choose from <b>3 different game modes</b> here.</p>
        <div className='hplinks'>
            <HomePageLink navigate="/TicTacToe/explore" text="Explore mode"/>
            <HomePageLink navigate="/TicTacToe/singleplayer" text="Single player"/>
            <HomePageLink navigate="/TicTacToe/pvp" text="Player vs. player"/>
        </div>
        <p className='center homepage'>Enjoy the game!</p>
    </>
  )
}

export default Home