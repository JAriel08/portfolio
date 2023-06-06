import React, { useState } from 'react';
import "../Connect/connectform.css";

const ConnectForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isRequired, setIsRequired] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true)

    const sendMessage = (e) => {
        e.preventDefault();
    }
    return (
        <aside className='contact-form'>
            <div className='contact-title'>
                <span>CONTACT FORM</span>
            </div>
            <div className='form-container'>
                <form onSubmit={sendMessage}>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Full Name'  required={isRequired}/>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' />
                    <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Your Number' />
                    <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Message Subject' />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message'></textarea>
                    <button 
                    type='button' 
                    disabled={message === "" ? isDisabled : !isDisabled}
                    onClick={() => alert(`Thank you for messaging me. I will connect to you ASAP! :)`)}
                    id={message === "" ? "disabled" : "not-disabled"}
                    >Send Message</button>
                </form>
            </div>
        </aside>
    )
}

export default ConnectForm
