// import React from "react";
// import './index.css';


// const DiscordPage = () =>{
    
//     return(
//         <div>
//             <h1 className="disc-title">This is the discord documentation page</h1>
//         </div>
        
//     )
// };

// export default DiscordPage


import React from "react";
import './index.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import NotesIcon from '@mui/icons-material/Notes';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';

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


const DiscordPage = () =>{
    
    return(
      
        <div className="DiscordPage">
         <div className="TickrBot">
            <h1 className="DiscordPageTitle">Tickr Discord Bot</h1>
            <p className="tickrDescription">Tickr Bot is a helpful tool to help you learn about the stock market! Our bot provides the most up-to-date data on the market using FinViz APIs. Our bot provides our users with an intuitive and user-friendly experience that can be used on any Discord server! Below you can find the information on how to install our bot, the commands, and each of the updates our bot has received. If there are any questions about our bot feel free to contact us and let us know!<br />
                {/* <br /><strong>Our current features for the bot:</strong> */}
              </p>
              <h3 className="tickrBotFeature">Our current features for the bot:</h3>
          </div>

          <div className="tickrFeatureList">
            <Box sx={{ ...commonStyles, width: '100%', maxWidth: 500, bgcolor: 'background.paper', borderRadius: '8px', borderColor: "grey.100", alignItems: 'center'}}>
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <SsidChartIcon />
                          </ListItemIcon>
                          <ListItemText primary="Display real-time accurate charts of specific stocks" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <NotesIcon />
                          </ListItemIcon>
                          <ListItemText primary="Provide information on a stock" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <WaterfallChartIcon />
                          </ListItemIcon>
                          <ListItemText primary="Visualize stock data charts in Discord" />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <NewReleasesIcon />
                          </ListItemIcon>
                          <ListItemText primary="More features coming soon" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                    <Divider />
                </Box>
          </div>

          <br /><br />
          <div className="ticker-commands">
            <h2 className="tickrCmdTitle">Tickr Bot Commands:</h2>
            <div className="CommandTable">
            <Box sx={{ ...commonStyles, borderRadius: '8px', borderColor: "grey.100",}}>
            <TableContainer component={Paper} style={{alignContent: 'center'}}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Command</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Arguments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.command}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.command}
                      </TableCell>
                      <TableCell align="right">{row.desc}</TableCell>
                      <TableCell align="right">{row.arg}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className="changelogIntro">
            <h2 className="tickrChangelogTitle">Tickr Bot Changelog</h2>
              <p className="changelogDesc">All notable changes to this project will be documented in this file using Semantic Versioning 2.0.0.</p>   
          </div>
          
          <div className="changelog">
          <br />
             <Box sx={{ ...commonStyles, borderRadius: '8px', borderColor: "grey.100"}}>      
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{flexShrink: 0 }}><strong>How to read changelogs:</strong></Typography>
                </AccordionSummary>          
                <AccordionDetails>
                  <Typography>
                      <strong>[X.Y.Z] - yyyy-mm-dd</strong>
                      <br />- X is Major <br />- Y is Minor <br />- Z is Patch <br />
                      <strong>&nbsp;Added</strong>
                      <br />- New features <br />
                      <strong>Changed</strong>
                      <br />- Changes in existing functionality <br />
                      <strong>Deprecated</strong>
                      <br />- For once-stable features removed in upcoming releases <br />
                      <strong>Removed</strong>
                      <br />- For deprecated features removed in this release <br />
                      <strong>Fixed</strong>
                      <br />- For any bug fixes
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Box>
              <br />
            <h3>Changelogs:</h3>
            <Box sx={{ ...commonStyles, borderRadius: '8px', borderColor: "grey.100"}}>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.6.6] - 2022-04-13</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added </strong>
                    <br />- Quoting now also displays the day's change in value and percentage <br />- Quoting functionality improved to simplify function in main bot file <br />
                    <strong>Changed</strong>
                    <br />- Quoting displays the same name and symbol for ETFs <br />
                    <strong>Fixed</strong>
                    <br />- Fixed the stock name lookup for ETFs <br />
                    <strong>Removed</strong>
                    <br />- main.py removed <br />- yfinance, tabulate libraries removed from packages
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.6.5] - 2022-04-11</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong><br />Changed </strong>
                    <br />- Look up stock quotes now uses Finnhub API function to simplify functionality <br />- Charting functionality improved to simplify function in main bot file <br />
                    <strong>Fixed</strong>
                    <br />- Fixed 403 Error when looking up stock quotes with Finnhub API function <br />
                    <strong>Removed</strong>
                    <br />- Quoting no longer needs to use requests library to fetch stock information from Finnhub
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.6.4] - 2022-04-10</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Changed </strong>
                    <br />- import Discord library to send embedded messages from within function
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.6.3] - 2022-04-08</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added </strong>
                    <br />- Quoting functionality to look up daily stock information 
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.6.2] - 2022-03-25</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added </strong>
                    <br />- import Finnhub api with token
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.6.1] - 2022-03-18</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Heads or Tails function for some fun lottery plays
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.6.0] - 2022-03-11</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Created quote.py for finnhub stock quoting <br />- !sheesh function for fun <br />- randomize emoticons within sheesh function
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.5.3] - 2022-03-04</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Download charts into /charts directory <br />- Charting( ) also deletes file after being sent to Discord <br />
                    <strong>Changed</strong>
                    <br />- Send chart method changed from posting link to sending chart.png <br />
                    <strong>Fixed</strong>
                    <br />- No longer displays link to chart from Finviz when a user tries to download or sees a notification from Discord
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.4.0] - 2022-03-03</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Meeting with Project Advisor <br />
                    <strong>Added</strong>
                    <br />- Send link to chart from Finviz with specified symbol into Discord chat <br />
                    <strong>Changed</strong>
                    <br />- Commands begin with '!' instead of '$' <br />- !help message sent to chat instead of Discord DMs
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.3.0] - 2022-02-25</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- chart.py for chart fetching function <br />
                    <strong>Changed</strong>
                    <br />- Bot will send some messages as an embedded message for readability
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.2.1] - 2022-02-18</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- bot.py for main bot functionality <br />
                    <strong>Changed</strong>
                    <br />- Get stock information from any US market stock symbol with command <br />
                    <strong>Removed</strong>
                    <br />- main.py removed to make Discord bot functions modular and readability <br />- Specific function for GME and AMC information fetch
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.1.0] - 2022-01-28</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Stock and options information fetch on 'GME' with command <br />
                    <strong>Changed</strong>
                    <br />- Presentation of stock and options information with tabulate for readability
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[1.0.0] - 2022-01-14</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Stock information fetch on 'AMC' with command <br />- Options information fetch on 'AMC' with command
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[0.4.1] - 2021-12-20</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Basic Discord bot functionality of sending messages on command <br />- Import libaries for stock information
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[0.3.2] - 2021-12-17</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Discord command parsing <br />
                    <strong>Changed</strong>
                    <br />- Initializing Discord client with Tickr Bot token
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[0.2.3] - 2021-11-26</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- Tickr Bot created on Discord <br />- Tickr Bot token set as secret environment variable <br />- Discord bot linked to test channel
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}><strong>[0.1.1] - 2021-10-29</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>Added</strong>
                    <br />- main.py created <br />- import discord
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Box>
              <br />

            </div>
        </div>
        
    )
};

export default DiscordPage;
