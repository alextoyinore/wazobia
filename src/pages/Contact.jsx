import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();
  const alertRef = useRef(null);

  const [alertType, setAlertType] = useState('error'); // 'error' or 'success'

  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    // prevent default form submission behavior (page will not reload)
    e.preventDefault();

    // ensure alert is visible
    alertRef.current.style.display = 'block';

    setAlertType('error'); // reset to error on each submit

    console.log({ fullname, email, message });
    // Here you can add further logic to handle the form submission,
    // like sending the data to a server or displaying a success message.
    
    // BEGIN VALIDATIONS

    // check if all fields are filled
    if(!(fullname && email && message)) {
      alertRef.current.innerText = 'All fields are required';
      return;
    }

    // simple email validation
    if(!email.includes('gmail')) {
      alertRef.current.innerText = 'Please enter a valid gmail';
      return;
    }

    // message length validation
    if(message.length < 10) {
      alertRef.current.innerText = 'Message should be at least 10 characters long';
      return;
    }

    // END VALIDATIONS

    // if all validations pass

    alertRef.current.innerText = '';
    setAlertType('success');
    alertRef.current.innerText = 'Form submitted successfully!';
    setFullname('');
    setEmail('');
    setMessage('');

    // navigate to home page after submission
    navigate('/');
  }

  const errorStyle = { 
    color: 'red', 
    padding: '5px', 
    backgroundColor: '#ff000011', 
    marginBottom: '10px',
    textAlign: 'center',
    display: 'none'
  };

  const successStyle = { 
    color: 'green', 
    padding: '5px',
    backgroundColor: '#00ff0011',
    marginBottom: '10px',
    textAlign: 'center', 
    display: 'none'
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Please fill out the form below to contact us.</p>

      <form onSubmit={handleSubmit}>

        <div style={alertType == 'error' ? errorStyle : successStyle} className='error' ref={alertRef}></div>

        <label>Full Name</label>
        <input
          type="text"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
        />

        <br/><br/>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <br/><br/>

        <label>Message</label>
        <textarea
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>

        <br/><br/>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default Contact
