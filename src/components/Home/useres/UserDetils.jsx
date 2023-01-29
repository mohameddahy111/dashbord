import {
  Badge,
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import FromData from './FromData';
import { useStore } from '../../../context/Store';
import { Delete, DoneAll, NoAccounts, Upload } from '@mui/icons-material';
import DialogPop from './DialogPop';
import { ClockLoader, GridLoader } from 'react-spinners';

export default function UserDetils() {
  const params = useParams();
  const { usersData, loadingPage } = useStore();
  const newData = usersData.find(x => x.id == params.id);
  console.log(newData);
  

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <Container>
          <Grid container spacing={1}>
            <Grid item md={2} xs={12}>
              <Card>
                <CardMedia
                  component={'img'}
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                />
              </Card>
            </Grid>
            <Grid item md={10} xs={12}>
              <List>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: 700, textTransform: 'capitalize' }}
                  >
                    first Name :{''}
                  </Typography>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ ml: '10px', textTransform: 'capitalize' }}
                  >
                    {newData.name.firstname}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: 700, textTransform: 'capitalize' }}
                  >
                    last Name :{''}
                  </Typography>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ ml: '10px', textTransform: 'capitalize' }}
                  >
                    {newData.name.lastname}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: 700, textTransform: 'capitalize' }}
                  >
                    E-mail :{''}
                  </Typography>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ ml: '10px', textTransform: 'capitalize' }}
                  >
                    {newData.email}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: 700, textTransform: 'capitalize' }}
                  >
                    username :{''}
                  </Typography>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ ml: '10px', textTransform: 'capitalize' }}
                  >
                    {newData.username}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: 700, textTransform: 'capitalize' }}
                  >
                    phone :{''}
                  </Typography>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ ml: '10px', textTransform: 'capitalize' }}
                  >
                    {newData.phone}
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      marginRight: '10px',
                    }}
                  >
                    address {''}
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>city</TableCell>
                          <TableCell>street</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>zipcode</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>{newData.address.city} </TableCell>
                          <TableCell>{newData.address.street} </TableCell>
                          <TableCell>{newData.address.number} </TableCell>
                          <TableCell>{newData.address.zipcode} </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px',
                  }}
                >
                  <Button
                    startIcon={<Upload />}
                    variant='contained'
                    color='warning'
                  >
                    {' '}
                    Update
                  </Button>
                  <DialogPop
                    color={'error'}
                    butText='Delete'
                    icon={<Delete />}
                  />
                  <DialogPop
                    butText='Block'
                    icon={<NoAccounts sx={{ color: '#fff' }} />}
                    baColor='#202020'
                  />
                </ListItem>
              </List>
              <Box m={2}>
                <Typography
                  component={'h4'}
                  variant='h4'
                  sx={{ textTransform: 'capitalize' }}
                >
                  {newData.username} orders
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>prodct</TableCell>
                        <TableCell>data</TableCell>
                        <TableCell>state</TableCell>
                        <TableCell></TableCell>
                        <TableCell>total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>21 </TableCell>
                        <TableCell>mobil </TableCell>
                        <TableCell>22/10/2022 </TableCell>
                        <TableCell>
                          <Badge
                            align='center'
                            sx={{
                              backgroundColor: '#d2ffd1',
                              color: 'green',
                              p: '10px',
                              borderRadius: '10px',
                            }}
                          >
                            {' '}
                            shipping
                          </Badge>{' '}
                        </TableCell>
                        <TableCell>
                          <DoneAll sx={{ color: '#36d7b7' }} />
                        </TableCell>

                        <TableCell>2555 $ </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>39 </TableCell>
                        <TableCell>tv </TableCell>
                        <TableCell>20/11/2022 </TableCell>
                        <TableCell>
                          <Badge
                            align='center'
                            sx={{
                              backgroundColor: '#fff5a3',
                              color: '#ffc000',
                              p: '10px',
                              borderRadius: '10px',
                            }}
                          >
                            {' '}
                            Prepare
                          </Badge>{' '}
                        </TableCell>
                        <TableCell>
                          <GridLoader color='#ffc000' size={10} />{' '}
                        </TableCell>

                        <TableCell>2555 $ </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>54 </TableCell>
                        <TableCell>smart watch </TableCell>
                        <TableCell>2/9/2022 </TableCell>
                        <TableCell>
                          <Badge
                            align='center'
                            sx={{
                              backgroundColor: '#ffcbd7',
                              color: 'red',
                              p: '10px',
                              borderRadius: '10px',
                            }}
                          >
                            {' '}
                            Holding
                          </Badge>{' '}
                        </TableCell>
                        <TableCell>
                          <ClockLoader color='#e88590' size={30} />
                        </TableCell>

                        <TableCell>2555 $ </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
