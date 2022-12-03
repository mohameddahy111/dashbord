import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchData = (url, parmes) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    await axios.get(url).then(res => setData(res.data));
  };
  useEffect(() => {
    getData()
      .then(setLoading(false))
      .catch(err => {
        setError(err);
        loading(false);
      });
  }, [parmes]);

  return {
    data,
    error,
    loading,
  };
};
export default useFetchData;
