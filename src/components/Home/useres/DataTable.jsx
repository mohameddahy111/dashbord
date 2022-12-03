import { Delete, Upload } from '@mui/icons-material';
import {
  Avatar,
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DialogPop from './DialogPop';

export default function DataTable({ data }) {
  const navigate =useNavigate()
  return (
    <>
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
                <Typography>E-mail</Typography>
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
                  <IconButton onClick={()=>navigate(`/home/users/${x.id}`)}>
                    <Avatar src={''} />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Typography>
                    {x.name.firstname} {x.name.lastname}{' '}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{x.email} </Typography>
                </TableCell>
                <TableCell sx={{ display: 'flex', gap: '10px' }}>
                  <Button
                    startIcon={<Upload />}
                    color='warning'
                    variant='contained'
                  >
                    Update
                  </Button>
                  <DialogPop
                    color={'error'}
                    butText='Delete'
                    icon={<Delete />}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
