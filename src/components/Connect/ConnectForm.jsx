import React, { useState } from 'react';
import "../Connect/connectform.css";
import emailjs from '@emailjs/browser';

const ConnectForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isRequired, setIsRequired] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_77advas', 'template_d7h06go', e.target, 'q3xrPa0yJcTsRG2do')
            .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });

        alert(`Thank you for messaging me. I will connect to you ASAP! :)`)

        setName("");
        setEmail("")
        setNumber("")
        setSubject("")
        setMessage("")
    };

    
    return (
        <aside className='contact-form'>
            <div className='contact-title'>
                <span>CONTACT FORM</span>
            </div>
            <div className='form-container'>
                <form onSubmit={sendEmail}>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Full Name'  required={isRequired} name='name'/>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' required={isRequired} name='email'/>
                    <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Your Number' required={isRequired} name='number'/>
                    <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Message Subject' required={isRequired} name='subject'/>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required={isRequired} name='message'></textarea>
                    <input 
                    type='submit' 
                    // disabled={message === "" ? isDisabled : !isDisabled}
                    // onClick={resetValue}
                    value="Send Message"
                    className='form-button'
                    id={message === "" ? "disabled" : "not-disabled"}
                    />
                </form>
            </div>
        </aside>
    )
}

export default ConnectForm
