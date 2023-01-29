import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
export default function ChertsCard({ title, data }) {
  console.log(data);
//   const totel = data.reduce((a, c) => a + c.seles, 0);
// console.log(totel);
  return (
    <Grid item md={4} xs={12}>
      <Card>
        <CardHeader>
          <Typography component={'h4'} variant='h5'>
            {title}
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography component={'h4'} variant='h6'>
            sele 
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
