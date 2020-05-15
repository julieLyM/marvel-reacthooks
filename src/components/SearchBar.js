import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getOneCharacter } from '../service/marvelData';

import {
  MainHeaderContainer,
  ContainerForm,
  InputSearch,
  ContainerSearchBar,
  BlocSearch,
  Title,
  ImgLogo,
} from './style/searchBarStyle';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const seek = async () => {
      if (search !== '') {
        const data = await getOneCharacter(search);
        return setResponse(data);
      } else {
        clearSearchBar();
      }
    };
    seek();
  }, [search]);

  const searchCharacter = (e) => {
    setSearch(e.target.value);
  };

  const clearSearchBar = () => {
    setResponse([]);
  };

  return (
    <MainHeaderContainer>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Title>
          <ImgLogo
            src={'https://i.ya-webdesign.com/images/marvel-logo-png-4.png'}
          />
        </Title>{' '}
      </Link>
      <ContainerForm>
        <InputSearch
          type="text"
          placeholder="search a character"
          value={search}
          onChange={searchCharacter}
        />
        <ContainerSearchBar>
          <BlocSearch>
            {response.map((elem, i) => (
              <div key={i}>
                <Link onClick={clearSearchBar} to={`/character/${elem.id}`}>
                  {elem.name}
                </Link>
              </div>
            ))}
          </BlocSearch>
        </ContainerSearchBar>
      </ContainerForm>
    </MainHeaderContainer>
  );
};
