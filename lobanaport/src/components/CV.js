import React from 'react'
import Container from '@material-ui/core/Container';
import cv from "../cv.png"
export default function CV() {
    return (
        <Container maxWidth="sm">
        <div>
        <img src={cv} alt="" height="1%" width="100%" style={{margin:'0 auto'}}/>
        </div>
        </Container>
    )
}
