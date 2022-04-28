// import React from "react";
// import './module.css'
// import modules from "../../ModulesPage/modules";

// const Modules = () =>{
//     return(
//         <div>
//             <header className="title">Our Most Popular Learning Modules</header>
//             <ul className="itemsList">
//                 <div className="item">
//                     <li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li>
//                     <li className="item2"><a href="/modules"><h3>Module 2:</h3> {modules.module2.title}</a></li>
//                     <li className="item3"><a href="/modules"><h3>Module 3:</h3> {modules.module3.title}</a></li>
//                 </div>
//             </ul>
//         </div>
        
//     )

// }

// export default Modules;


import * as React from 'react';
import './module.css'
import modules from "../../ModulesPage/modules";

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        
      >
        <Item><li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li></Item>
        <Item><li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li></Item>
        <Item><li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li></Item>
      </Stack>
    </div>
  );
}

