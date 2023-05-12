import React from 'react'

function Main() {
  return (
    <div className='header'>
        <div className='row4'>
            <h1>A room without book is like <br /> a body without a suol</h1>

        </div>
        <div className='row5'>
            <h2>Find Your Book</h2>
            <div className='search'>
                <input type ="text" placeholder='Enter Your Book Name' />
                <button><i class ="fas fa-search"></i></button>

            </div>
        

        </div>

    </div>
  )
}

export default Main