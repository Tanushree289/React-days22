import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    
      <p className='heading'>
      <Link to ='/' className='text'>Home</Link>
      <Link to='/interview' className='text'>REACT-IP DAY2</Link> 
      </p> 
      <h3>Home</h3>
    </div>
  )
}
