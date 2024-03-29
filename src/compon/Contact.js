import {
    CandidateCreateForm
} from '.././ui-components';
import Navbar from './Navbar';
import "./contact.css"
import { Box, margin } from '@mui/system';
import Footer from './Footer';
import React from 'react'; import { API } from 'aws-amplify'; import { createCandidate } from '../graphql/mutations';
import { Container, Typography } from '@mui/material';
function Contact() {
    //     const [name, setName] = React.useState('');
    //     const [email, setEmail] = React.useState('');
    //     const [subject, setSubject] = React.useState('');
    //     const [message, setMessage] = React.useState('');
    //     const handleSubmit = (e) => {
    //         e.preventDefault();
    //         setName('');
    //         console.log(name, email, subject, message);
    //         if (name && email) {
    //             try {
    //                 console.log(name)
    //                 API.graphql({
    //                     query: createCandidate,
    //                     variables: {
    //                         input: {
    //                             Name: name,
    //                             Email: email,
    //                             Subject: subject,
    //                             Message: message
    //                         }
    //                     }
    //                 })
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //         }
    //     }
    return (
        //     <div className='Contact'>
        //         <form onSubmit={handleSubmit}>
        //             <fieldset>
        //                 <div className="field">
        //                     <input htmlFor="name"
        //                         type="text"
        //                         id="name"
        //                         placeholder='Name'
        //                         name="name"
        //                         value={name}
        //                         onChange={(e) => setName(e.target.value)} />
        //                 </div>
        //                 <div className="field">
        //                     <input type="email"
        //                         htmlFor="email"
        //                         id="email"
        //                         placeholder='Email'
        //                         name="email"
        //                         value={email}
        //                         onChange={(e) => setEmail(e.target.value)} />
        //                 </div>
        //                 <div className="field">
        //                     <input type="text"
        //                         htmlFor="subject"
        //                         id="subject"
        //                         placeholder='Do you wanna know let us know something?'
        //                         name="subject"
        //                         value={subject}
        //                         onChange={(e) => setSubject(e.target.value)} />
        //                 </div>
        //                 <div className="field">
        //                     <textarea
        //                         placeholder='Do you wanna know let us know something?'
        //                         htmlFor="message"
        //                         id="message"
        //                         name="message"
        //                         value={message}
        //                         onChange={(e) => setMessage(e.target.value)} />
        //                 </div>
        //                 <button disabled={!name || !email} type="submit">Submit</button>
        //             </fieldset>
        //         </form>
        //     </div>
        <div>
            <div id="navbar">
                <Navbar />
            </div>
            <Container sx={{ marginTop: 12, marginBottom: 20 }}>

                <h1> Need Help?</h1>
                <Box id={{ xs: "bro", md: "sid" }} sx={{ overflow: 'auto' }}>
                    <CandidateCreateForm />
                </Box>
                <Typography sx={{alignItems:"center"}}>
                    <h4>Phone:+919373098227</h4>
                    <h4>Email:chessbrainstormers@gmail.com</h4>
                </Typography>
            </Container>

        </div>
    );
}
export default Contact;