import * as React from 'react';
import './module.css'
import modules from "../../ModulesPage/modules";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import {Link} from "react-router-dom" ;

// import React from "react";
// import './module.css'
// import modules from "../../ModulesPage/modules";

// const Modules = () =>{
//     return(
//         <div>
//             <header className="title">Our Most Popular Learning Modules</header>
//             <ul className="itemsList">
//                 <div className="item">
//                     <li className="item1"><a href="/modules"><h3>Module 1:</h3>Intro to Stocks</a></li>
//                     <li className="item2"><a href="/modules"><h3>Module 2:</h3>Intro to Stocks</a></li>
//                     <li className="item3"><a href="/modules"><h3>Module 3:</h3>Intro to Stocks</a></li>
//                 </div>
//             </ul>
//         </div>
        
//     )

// }

// export default Modules;





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

// export default function DividerStack() {
//   return (
//     <div>
//       <Stack
//         direction="row"
//         divider={<Divider orientation="vertical" flexItem />}
//         spacing={2}
        
//       >
//         <Item><li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li></Item>
//         <Item><li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li></Item>
//         <Item><li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li></Item>
//       </Stack>
//     </div>
//   );
// }




export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `<Grid container spacing={${spacing}}>`;

  return (
    <div>
        <header className="title" style={{marginBottom: 25,}}>Our Most Popular Learning Modules</header>
        <Grid sx={{ flexGrow: 1 }} container spacing={1} style={{marginBottom: 25,}} >
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={5}>
                    <Grid key={0} item className="module-box">
                        <Paper
                            sx={{
                            height: 275,
                            width: 280,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                            className="item1"
                        >
                            {/* <Link to={{
                                pathname: '/modules/1',
                                state: {moduleId: 1},
                            }}  >Module 1: Intro to Stocks</Link> */}
                            <li className="item1"><a href="/modules/1"><h3>Module 1:</h3>Intro to Stocks</a></li>
                        </Paper>
                    </Grid>
                    <Grid key={1} item className="module-box">
                        <Paper
                            sx={{
                            height: 275,
                            width: 280,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                            className="item2"
                        >

                            <li className="item2"><a href="/modules/2"><h3>Module 2:</h3>Intro to Options</a></li>
                        </Paper>
                    </Grid>      
                    <Grid key={2} item className="module-box">
                        <Paper
                            sx={{
                            height: 275,
                            width: 280,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                            className="item3"
                        >

                            <li className="item3"><a href="/modules/4"><h3>Module 3:</h3>Technical Analysis</a></li>
                        </Paper>
                    </Grid>              
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}