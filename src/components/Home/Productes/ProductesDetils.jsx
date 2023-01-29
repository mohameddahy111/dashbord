import {
  Card,
  Container,
  Grid,
  List,
  ListItem,
  Rating,
  Typography,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../../Hooks/useFetchData';
import Loading from '../../Loading';

export default function ProductesDetils() {
  const parames = useParams();
  const Producte = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail';


  const { data, loading } = useFetchData(Producte ,parames);
  //   const rating = data.rating
  console.log(data, parames);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Grid container spacing={1}>
            <Grid item md={2} xs={12}>
              <Card></Card>
              <img src={data.image} alt={data.title} width='100%' />
            </Grid>
            <Grid item md={10} xs={12}>
              <List>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ textTransform: 'capitalize', fontWeight: 700 }}
                  >
                    name : {data.title}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ textTransform: 'capitalize', fontWeight: 700 }}
                  >
                    description :
                    <Typography component={'span'}>
                      {' '}
                      {data.description}
                    </Typography>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ textTransform: 'capitalize', fontWeight: 700 }}
                  >
                    category : {data.category}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ textTransform: 'capitalize', fontWeight: 700 }}
                  >
                    rating : <Rating readOnly precision={0.5} value={2} />
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
