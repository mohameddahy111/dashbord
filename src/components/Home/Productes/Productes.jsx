import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../context/Store';
import useFetchData from '../../../Hooks/useFetchData';
import Loading from '../../Loading';
import ProductesTable from './ProductesTable';

export default function Productes() {
  const allProductes = 'https://fakestoreapi.com/products';
  const { data, loading } = useFetchData(allProductes);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Typography component={'h3'} variant='h3' align='center' mb={3}>
            Productes
          </Typography>
          <ProductesTable data={data} />
        </>
      )}
    </>
  );
}
