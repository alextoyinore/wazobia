import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  const navigate  = useNavigate();
  const { name } = useParams();
  // const slug = params.slug;

  // const goToContact = () => {
  //   navigate('/contact');
  // }

  // const arr = { name: 'john', age: 30, city: 'New York', country: 'USA', profession: 'Developer' };
  // const { name, age } = arr;

  useEffect(() => {

    if(name === 'admin') {
      // fetch user data
      navigate('/dashboard');
    }
  }, []);

  return (
    <div>
        This is the Home Page
        {/* Hello {name}, you are {age} years old. */}
        {/* <button onClick={goToContact}>Go to contact</button> */}
    </div>
  )
}

export default Home
