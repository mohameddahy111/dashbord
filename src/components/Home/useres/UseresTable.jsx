import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../../context/Store';
import useFetchData from '../../../Hooks/useFetchData';
import Loading from '../../Loading';

import DataTable from './DataTable';
export default function UseresTable() {
  const {usersData ,loadingPage}=useStore()


  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Typography component={'h3'} variant='h3' align='center' mb={3}>
            users
          </Typography>
          <DataTable data={usersData} />
        </>
      )}
    </>
  );
}
