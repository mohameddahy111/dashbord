import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { StoreProvider } from './context/Store';
import Router from './Routers/Router';

export default function App() {
  return (
    <StoreProvider>
      <RouterProvider router={Router}></RouterProvider>
    </StoreProvider>
  );
}
