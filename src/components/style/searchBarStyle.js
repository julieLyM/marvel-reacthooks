import styled from 'styled-components';
import { device } from './mediaQueries';
import img from './images/back.gif';

export const MainHeaderContainer = styled.div`
  background-image: url(${img});
  background-size: auto;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  height: 200px;
  justify-content: space-around;
  align-items: center;
  @media (${device.tablet}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const Title = styled.p`
  color: red;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
  @media (${device.mobileM}) {
    margin: 10px;
  }
`;

export const ContainerForm = styled.div`
  position: relative;
`;

export const InputSearch = styled.input`
  width: 270px;
  height: 50px;
  font-size: 1.7em;
  padding-left: 10px;
  border-radius: 10px;
`;

export const ContainerSearchBar = styled.div`
  position: relative;
`;

export const BlocSearch = styled.div`
  position: absolute;
  font-size: 1.5em;
  background-color: white;
  width: 268px;
  border-radius: 5px;
  padding-right: 17px;
`;

export const ImgLogo = styled.img`
  width: 200px;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(2,2);
  }
`;
