import React from 'react'
import Container from '@material-ui/core/Container';
import contact from "../contactme.png"

export default function Contact() {
    return (
        <Container maxWidth="sm">
        <div>
        <img src={contact} alt="" height="50%" width="100%" style={{margin:'0 auto'}}/>
        </div>
        </Container>
    )
}
