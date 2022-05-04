import React from "react";
import './footer.css';
import logo from '../logo.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () =>{
    return(
        <div className="footer-section">
            <div className="footer-title">
                <header className="footer-name"> Tickr &copy;</header>
                <img src={logo} className="footer-logo"/>
                <div className="slogan">
                    <p>The market doesn't stop.</p>
                </div>
            </div>
            
            <div className="links">
                <ul className="foot-items">
                    <li className="foot-link"><a href="/modules">Modules</a></li>   
                    <li className="foot-link"><a href="/about">About Us</a></li>
                    <li className="foot-link"><a href="/discord">Discord Bot</a></li>
                    <li className="foot-link"><a href="/contact">Contact Us</a></li>
                    <li className="foot-link"><a href="#">Careers</a></li>
                </ul>
            </div>

            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                    <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                    <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                    <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box> */}
        </div>
    )
}

export default Footer; 




