import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import Rating from '../Rating';
import 'react-dropdown/style.css'
import './filter.css';
import { fetchGenreList } from '../../modules/service';
import {
  filterFromYearAction,
  filterGenre,
  filterToYearAction,
  filterType,
} from '../../modules/action';
import { useDispatch } from 'react-redux';

const type = [
  'Movies'
];

const year = [
  '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
]

const Filter = () => {
  const [genre, updateGenre] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchGenreList()
      .then(res => {
        return res.map((gen: { id: number, name: string }) => {
          const { id, name } = gen;
          return {
            value: id,
            label: name,
          }
        })
      })
      .then(updateGenre);
  }, [])
  return (
    <div className='filterWrapper'>
      <span className='filterHeader'>DISCOVER OPTIONS</span>
      <div className='filterFields'>Type</div>
      <Dropdown
        options={type}
        className='dropdown'
        value={type[0]}
        onChange={(val) => dispatch(filterType(val.value))}
      />
      <div className='filterFields'>Genre</div>
      <Dropdown
        options={genre}
        className='dropdown'
        onChange={(val) => {
          const { value, label } = val;
          dispatch(filterGenre({
            id: Number(value),
            name: label,
          }))
        }}
      />
      <div className='filterFields'>Year</div>
      <div style={{display: 'flex'}}>
        <Dropdown
          options={year}
          className='smalldropdown'
          onChange={val => dispatch(filterFromYearAction(val.value))}
        />
        <div style={{padding: '20px 5px 20px 0px'}}> -- </div>
        <Dropdown
          options={year}
          className='smalldropdown'
          onChange={val => dispatch(filterToYearAction(val.value))}
        />
      </div>
      <div className='filterFields'>Rating</div>
      <Rating/>
    </div>
  );
}

export default Filter;
