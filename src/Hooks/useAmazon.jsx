import { SignalCellularNullOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useAmazon = (url, params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const gitData = async () => {
    await axios
      .get(url, {
        headers: {
          'X-RapidAPI-Key':
            'af91ac563fmsh4e5021114e8f977p1b04bejsn068b6102ebc5',
          'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
        },
        params:params?{
          country:params.country?params.country:'us',
          lang:params.lang?params.lang :'en',
          currentpage:params.currentpage?params.currentpage :params.id?null:'0',
          pagesize:params.pagesize?params.pagesize:params.id?null:'30',
          categories:params.categories?params.categories:params.id?null:"men_all",
          concepts:params.concepts?params.concepts:params.id?null:'H&M MAN',
          productcode:params.id?params.id:null
        }:null
      })
      .then(res => setData(res.data.results));
  };
  console.log(data);

  useEffect(() => {
    gitData()
      .then(setLoading(false))
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [params]);
  return {
    data,
    loading,
    error,
  };
};
export default useAmazon;
