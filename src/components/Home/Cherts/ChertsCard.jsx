import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';

export default function ChertsCard({ title, data }) {
  return (
    <Grid item md={4} xs={12}>
      <Card>
        <CardHeader>
          <Typography component={'h4'} variant='h4'>{title}</Typography>
        </CardHeader>
        <CardContent>
          <Typography component={'h4'} variant='h4'>sele : </Typography>
          
        </CardContent>
      </Card>
    </Grid>
  );
}
