//write a simple form in react
import React from 'react';
function Contact() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const handlesubmit = (e) => {
        e.preventDefault();
        setName = '';
        console.log(name, email, subject, message);
    }

    return (
        <div className='Contact'>
            <form onSubmit={handlesubmit}>
                <fieldset>
                    <div className="field">
                        <input htmlfor="name"
                            type="text"
                            id="name"
                            placeholder='Name'
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="field">
                        <input type="email"
                            htmlfor="email"
                            id="email"
                            placeholder='Email'
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field">
                        <input type="text"
                            htmlfor="subject"
                            id="subject"
                            placeholder='Subject'
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div className="field">
                        <textarea
                            placeholder='Message'
                            htmlfor="message"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button disabled={!name || !email || !subject || !message} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
export default Contact;