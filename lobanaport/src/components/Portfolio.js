import React from 'react'
import Container from '@material-ui/core/Container';
import portfolio from "../portfolio.png"

export default function Portfolio() {
    return (
        <Container maxWidth="sm">
        <div>
        <img src={portfolio} alt="" height="50%" width="100%" style={{margin:'0 auto'}}/>
        </div>
        </Container>
    )
}
