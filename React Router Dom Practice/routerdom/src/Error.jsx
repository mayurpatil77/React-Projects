import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Ooops</h1>
      <h2>{error.error.message}</h2>
      <h3> Error {error.status} - Something Went Wrong</h3>
     

    </div>
  )
}

export default Error
