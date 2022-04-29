import React from "react";
import './index.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const commonStyles = {
  m: 1,
  border: 5,
  
};

function createData(command, desc, arg,) {
  return { command, desc, arg,};
}

const rows = [
  createData('!help <command>', 'Displays all the available bot commands or info on a specific <command>', '<command>: Tickr command'),
  createData('!chart <symbol> <duration>', 'Gets a stock chart in a specified duration', '<Symbol>: Stock symbol (ex. GME) <Duration>: Time period (ex. 1 = 1 day)'),
  createData('!quote <symbol>', 'Get daily information on specific <symbol>', '<Symbol>: Stock symbol (ex. GME)'),
];


const ContactPage = () =>{
    return(
      
        <div className="ContactPage">
         <div className="ContagePageMain">
            <h1 className="ContactUsTitle">Contact Us</h1>
            <p className="ContactDesc">Thank you for your interest in the TickrBot. If you have any further questions or concerns, please feel free to contact us below.<br />
                <br /><strong></strong>
              </p>
          </div>

          <div className="ContactPageInfo">
            <Box sx={{ ...commonStyles, width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '8px', borderColor: "grey.100"}}>
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <AccountBalanceIcon />
                          </ListItemIcon>
                          <ListItemText primary="School: San Jose State University" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <ApartmentIcon />
                          </ListItemIcon>
                          <ListItemText primary="City: San Jose" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <DeviceHubIcon />
                          </ListItemIcon>
                          <ListItemText primary="Major: Computer Engineering" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <SchoolIcon />
                          </ListItemIcon>
                          <ListItemText primary="Graduation: Spring 2022" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                    <Divider />
                </Box>
          </div>

          <br /><br />

          <div className="individContact">
            <h2 className="individContactTitle">Contact Information</h2>
          </div>
          
          <div className="individContactList">
            <Box sx={{ ...commonStyles, borderRadius: '8px', borderColor: "grey.100"}}>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>Austin Nguyen</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Email: </strong>
                    <br />austin.nguyen@sjsu.edu<br />
                    <strong>Phone:</strong>
                    <br /> [REDACTED]<br />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Box>

              <Box sx={{ ...commonStyles, borderRadius: '8px', borderColor: "grey.100"}}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>Huey Nguyen</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  <strong>Email: </strong>
                    <br />huey.nguyen@sjsu.edu<br />
                    <strong>Phone:</strong>
                    <br /> [REDACTED]<br />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Box>

              <Box sx={{ ...commonStyles, borderRadius: '8px', borderColor: "grey.100"}}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>Andy Ho</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Email: </strong>
                    <br />andy.q.ho@sjsu.edu<br />
                    <strong>Phone:</strong>
                    <br /> [REDACTED]<br />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Box>

              <Box sx={{ ...commonStyles, borderRadius: '8px', borderColor: "grey.100"}}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>Nathan Le</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  <strong>Email: </strong>
                    <br />nathan.le@sjsu.edu<br />
                    <strong>Phone:</strong>
                    <br /> [REDACTED]<br />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Box>
              <br />
            </div>

            <div className="ContactFormTitle">
            <h2 >Contact Form</h2>
            </div>
            <div className="ContactForm">
              <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '40%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <br />
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Name"
                      multiline
                      maxRows={4}
                      defaultValue="Ben Dover"
                    />
                    <br />
                    <TextField
                      id="outlined-textarea"
                      label="Email"
                      placeholder="Placeholder"
                      multiline
                      defaultValue="bendover@xtrahotmail.com"
                    />
                    <br />
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={7}
                      defaultValue="Type your message here..."
                    />
                  </div>
                  <br />
                </Box>
                <div>
              <Stack direction="row" spacing={3}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Stack>
            </div>
            </div>
            <br />
        </div>
    )
    
};

export default ContactPage;