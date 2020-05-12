import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getCharacterById } from '../service/marvelData';

import {
  ContainerLink,
  BlocLink,
  ImgCharacter,
  ContainerCharacter,
  CardCharacter,
} from './style/characterStyle';

import { MainHomeContainer, BlocLoading, ButtonLeft } from './style/homeStyle';

export const Character = () => {
  const [person, setPerson] = useState([]);
  // const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchDatas = async () => {
      const dataCharacter = await getCharacterById(id);
      setPerson(dataCharacter);
      setLoading(false);
    };
    fetchDatas();
  }, [id]);

  return (
    <MainHomeContainer>
      {loading ? (
        <BlocLoading>
          Loading... !!!
          <div style={{ marginTop: '5%' }}>
            <img
              alt=""
              style={{ borderRadius: '80%' }}
              src={'https://data.whicdn.com/images/306102758/original.gif'}
            />
          </div>
        </BlocLoading>
      ) : (
        <ContainerCharacter>
          {person.map((elem, i) => (
            <CardCharacter key={i}>
              <div>
                <ImgCharacter
                  src={`${elem.thumbnail.path}.${elem.thumbnail.extension} `}
                  alt=""
                />
              </div>
              <div
                style={{
                  width: '50%',
                }}
              >
                <h2>{elem.name}</h2>
                <p>{elem.description}</p>
              </div>

              <ContainerLink>
                <BlocLink>
                  <h3>comics</h3>
                  {elem.comics.items.map((item, i) => (
                    <div key={i}>
                      {/* <Link to={`/comic/${item.id}`}> */}
                      {item.name}
                      {/* </Link> */}
                    </div>
                  ))}
                </BlocLink>
                <BlocLink>
                  <h3>stories</h3>
                  {elem.stories.items.map((item, i) => (
                    <div key={i}>
                      {/* <Link to={`/storie/${item.resourceURI}`}> */}
                      {item.name}
                      {/* </Link> */}
                    </div>
                  ))}
                </BlocLink>
                <BlocLink>
                  <h3>url</h3>
                  {elem.urls.map((item, i) => (
                    <div key={i}>
                      <a href={item.url}>{item.type}</a>
                    </div>
                  ))}
                </BlocLink>
              </ContainerLink>
            </CardCharacter>
          ))}
        </ContainerCharacter>
      )}

      <Link to={'/'}>
        <ButtonLeft></ButtonLeft>
      </Link>
    </MainHomeContainer>
  );
};
