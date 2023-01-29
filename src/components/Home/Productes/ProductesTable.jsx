import { Delete, Upload } from '@mui/icons-material';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagention from '../Pagention';
import DialogPop from '../useres/DialogPop';

export default function ProductesTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          'https://zincoint.com/api/recently_products?min=&max=&category_id=&brand_id=&sort='
        )
        .then(res => {
          setData(res.data.data.data);
        });
    };
    return getData;
  }, []);
  const navigate = useNavigate();
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>pk</Typography>
            </TableCell>
            <TableCell>
              <Typography>Image</Typography>
            </TableCell>
            <TableCell>
              <Typography>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography>Brand</Typography>
            </TableCell>
            <TableCell>
              <Typography>stockLevel</Typography>
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
                <IconButton
                  onClick={() =>
                    navigate(`/home/productes/${x.articleCodes[0]}`)
                  }
                >
                  <img
                    src={x.image.name}
                    alt={''}
                    width={'50px'}
                    height='50px'
                  />
                </IconButton>
              </TableCell>
              <TableCell>
                <Typography>{x.name_en} </Typography>
              </TableCell>
              <TableCell>
                <Typography>{x.name_ar} </Typography>
              </TableCell>
              <TableCell>
                {/* <Typography>{x.stock.stockLevel} </Typography> */}
              </TableCell>
              <TableCell
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  height: '100px',
                }}
              >
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
        <TableFooter>
          <TableRow>
            <Pagention numPage={data.page} />{' '}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
