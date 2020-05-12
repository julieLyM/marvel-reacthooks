import styled from 'styled-components';
import { device } from './mediaQueries';

export const ContainerLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BlocLink = styled.div`
  margin: 1%;
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 7px;
  flex: 1 1 250px;
`;

export const ContainerCharacter = styled.div`
  padding: 5%;
`;

export const ImgCharacter = styled.img`
  width: 50%;
  border-radius: 60%;
`;

export const CardCharacter = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px auto;
  width: 50%;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  padding: 2%;
  flex-wrap: wrap;
  @media (${device.tablet}) {
    width: 100%;
  }
  @media (${device.mobileL}) {
    background: none;
  }
`;
