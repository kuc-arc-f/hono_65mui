import Head from '../components/Head'
import React from 'react';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//
export default function Page() {
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <h1 className=""
    >Checkbox!</h1>
    <hr />
    <Checkbox {...label} defaultChecked />
    <Checkbox {...label} />
    <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked />
  </div>
  )
}

