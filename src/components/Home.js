import React, { useState, useEffect } from 'react';

import { getCharacters } from '../service/marvelData';

import {
  MainHomeContainer,
  HomeBloc,
  ImageBloc,
  ImgCard,
  ContainerButton,
  ButtonLeft,
  ButtonRight,
  LinkCharacters,
  BlocLoading,
  Text,
} from './style/homeStyle';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setLoading(true);
      try {
        const getData = await getCharacters(page);
        setCharacters(getData);
      } catch (error) {
        setIsError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [page]);

  const changePage = (pageNumber) => {
    setPage((beforePage) => Math.min(Math.max(beforePage + pageNumber, 0), 75));
  };

  return (
    <MainHomeContainer style={{ paddingTop: '5%' }}>
      {loading && !isError ? (
        <BlocLoading>
          Loading... !!!
          <div style={{ marginTop: '5%' }}>
            <img
              alt="groot"
              style={{ borderRadius: '80%' }}
              src={'https://data.whicdn.com/images/306102758/original.gif'}
            />
          </div>
        </BlocLoading>
      ) : isError ? (
        <BlocLoading>something's wrong</BlocLoading>
      ) : (
        <HomeBloc>
          {characters.map((element, i) => (
            <ImageBloc key={i}>
              <LinkCharacters to={`character/${element.id}`}>
                <ImgCard
                  src={`${element.thumbnail.path}.${element.thumbnail.extension} `}
                  alt=""
                />
                <Text>{element.name}</Text>
              </LinkCharacters>
            </ImageBloc>
          ))}
        </HomeBloc>
      )}
      <ContainerButton>
        <ButtonLeft onClick={changePage.bind(null, -1)}></ButtonLeft>
        <ButtonRight onClick={changePage.bind(null, 1)}></ButtonRight>
      </ContainerButton>
    </MainHomeContainer>
  );
};
