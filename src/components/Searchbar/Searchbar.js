import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { ReactComponent as SearchIcon } from './search.svg';
import s from './Searchbar.module.css';

export default function Searchbar ({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = value.trim();
    if (!searchValue) {
      Notiflix.Notify.info('Please write some value');
    }
    onSubmit(searchValue);
    setValue('');
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.Button}>
        <SearchIcon width="20" height="20" />
          <span className={s.ButtonLabel}>Search</span>
        </button>
        <input
          className={s.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


