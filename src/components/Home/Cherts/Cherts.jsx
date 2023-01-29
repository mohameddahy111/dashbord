import { Grid } from '@mui/material';
import React from 'react';
import ChertsCard from './ChertsCard';
import data from '../../../data/data';


export default function Cherts() {
  return (
    <>
      <Grid container spacing={1} >
        <Grid item md={4} xs={12}>
          <ChertsCard data={data.dailySales} />
        </Grid>
        {/* <Grid item md={4} xs={12}>
          <ChertsCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <ChertsCard />
        </Grid> */}
      </Grid>
    </>
  );
}
