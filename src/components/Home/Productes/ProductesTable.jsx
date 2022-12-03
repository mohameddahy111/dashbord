import { Delete, Upload } from '@mui/icons-material';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DialogPop from '../useres/DialogPop';

export default function ProductesTable({ data }) {
  const navigate = useNavigate();
  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>ID</Typography>
            </TableCell>
            <TableCell>
              <Typography>Image</Typography>
            </TableCell>
            <TableCell>
              <Typography>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography>category</Typography>
            </TableCell>
            <TableCell>
              <Typography>count</Typography>
            </TableCell>
            <TableCell>
              <Typography>Actione</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(x => (
            <TableRow key={x.id}>
              <TableCell>
                <Typography>{x.id}</Typography>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => navigate(`/home/productes/${x.id}`)}>
                  <img src={x.image} alt={x.title} width={'50px'} height='50px' />
                </IconButton>
              </TableCell>
              <TableCell>
                <Typography>{x.title} </Typography>
              </TableCell>
              <TableCell>
                <Typography>{x.category} </Typography>
              </TableCell>
              <TableCell>
                <Typography>{x.rating.count} </Typography>
              </TableCell>
              <TableCell sx={{ display: 'flex', gap: '10px' ,alignItems:'center' , height :'100px'}}>
                <Button
                  startIcon={<Upload />}
                  color='warning'
                  variant='contained'
                >
                  Update
                </Button>
                <DialogPop color={'error'} butText='Delete' icon={<Delete />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
