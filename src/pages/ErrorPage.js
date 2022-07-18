import React from 'react'
import { useNavigate} from 'react-router-dom'

function ErrorPage() {
    let navigate = useNavigate();
  return (
    <>
    <h1 className='heading'>ERROR!</h1>
    <p className='center homepage'>page not found</p>
    <p className='center homepage'><br/></p>
    <p className='center homepage'><br/></p>
    <p className='center homepage'>return to</p>
    <p className='center homepage' style={{cursor: 'pointer'}} onClick={() => {navigate("/")}}><b className="errorLink">Homepage</b></p>
    </>
  )
}

export default ErrorPage