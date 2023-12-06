import React, { useState } from 'react';

import axios from '../utils/axiosInstance';

import { SearchData } from '../mock/SearchData';

import SearchIcon from '../assets/search.png';
import Loading from '../assets/loading.gif';

const Search = () => {
  const { title, placeholder } = SearchData;
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const onSubmitForm = (ev) => {
    ev.preventDefault();

    setLoading(!loading);

    axios
      .post('/getresults', ev.target.value)
      .then((data) => {
        setResponse(data.json());
        setLoading(!loading);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(!loading);
      });
  };

  return (
    <div className='bg-custom-black flex flex-col items-center'>
      <h1 className='mt-14 text-3xl text-slate-50'> {title} </h1>
      <div className='relative w-3/4 h-16 top-10 left-0 right-0 m-auto rounded-lg'>
        <form
          className='absolute w-full flex justify-between items-center'
          onSubmit={onSubmitForm}
        >
          <input
            className='w-full p-4 pb-14 bg-custom-gray text-slate-50 rounded-lg'
            placeholder={placeholder}
            name='search'
          />
          <button className='absolute p-4 text-white right-0' type='submit'>
            <img className='w-6' src={SearchIcon} alt='Search' />
          </button>
        </form>
      </div>
      <div className='h-screen mt-14 w-3/4 top-10 left-0 right-0 m-auto rounded-lg text-white'>
        {Object.keys(response).length > 0 && (
          <div className='mt-24 p-4 bg-custom-gray text-slate-50 border-2 border-slate-600 rounded-lg'>
            {' '}
            {response}{' '}
          </div>
        )}
        {Object.keys(error).length > 0 && (
          <div className='mt-24 text-center'> {error} </div>
        )}
        {loading && (
          <div className='mt-20 text-center'>
            <img className='w-8 inline' src={Loading} alt='Loading' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
