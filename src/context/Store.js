import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useFetchData from '../Hooks/useFetchData';

const Store = createContext();

export const StoreProvider = ({ children }) => {
  const params = useParams();
  const [userInfo, setUserInfo] = useState(false);
  const [chaneEmail, setchaneEmail] = useState(false);
  const [notifications, setNotifications] = useState(2);
  const [orders, setOrders] = useState(3);
  const [messages, setMessages] = useState(6);
  const [usersData, setUsersData] = useState([]);
  const [loadingPage, setLodingPage] = useState(false);

  const allUsers = 'https://fakestoreapi.com/users';
  const { data, loading } = useFetchData(allUsers);
  useEffect(() => {
    setUsersData(data);
    setLodingPage(loading);
  }, [data]);

  const changeEmailFun = () => {
    setchaneEmail(!chaneEmail);
  };

  return (
    <Store.Provider
      value={{
        userInfo,
        setUserInfo,
        chaneEmail,
        setchaneEmail,
        changeEmailFun,
        notifications,
        setNotifications,
        orders,
        setOrders,
        messages,
        setMessages,
        usersData,
        setUsersData,
        loadingPage,
        setLodingPage,
      }}
    >
      {children}
    </Store.Provider>
  );
};
export const useStore = () => useContext(Store);
