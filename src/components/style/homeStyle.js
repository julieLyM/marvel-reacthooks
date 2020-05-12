import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './mediaQueries';

import left from './images/left.svg';
import right from './images/right.svg';

export const MainHomeContainer = styled.div`
  text-align: center;
  background: url('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/226320/20cfc6eb149b4d436ae3726c527d5b046fca3ce5.jpg');
  background-repeat: repeat-x;
  background-size: cover;
  color: white;
  min-height: 100vh;
`;

export const HomeBloc = styled.div`
  display: flex;
  flex: 1 1 200px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageBloc = styled.div`
  width: 100px;
  margin: 2%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  align-items: center;
  display: flex;
  padding: 2%;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: rotate(20deg);
  }
  @media (${device.mobileL}) {
    padding: 6%;
  }
`;

export const ImgCard = styled.img`
  width: 100px;
`;

export const BlocLoading = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 1%;
  font-size: 2em;
  font-weight: 900;
  margin: 0 auto;
  text-transform: uppercase;
  @media (${device.laptopL}) {
    width: 40%;
  }
  @media (${device.tablet}) {
    width: 40%;
  }
  @media (${device.mobileL}) {
    width: 100%;
  }
`;

export const LinkCharacters = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  @media (${device.tablet}) {
    margin-top: 10%;
  }
`;

export const ButtonLeft = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${left});
  background-repeat: no-repeat;
`;

export const ButtonRight = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${right});
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 500;
  &:hover {
    color: gold;
  }
`;
