import styled, { css } from 'styled-components';

export const VideoCardWrapper = styled.div`
  transition: all 0.5s;
  &:hover,
  &:focus {
    transform: scale(1.5);
    margin: 0 80px;
  }
`;

export const VideoCardContainer = styled.div`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
 /*  overflow: hidden; */
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  &:not(:first-child) {
    margin-left: 20px;
  }

  ${({ hasLoading }) => hasLoading && css`
    & > div {
      display: none;
    }
    &:hover > div {
      display: flex;
      align-self: center;
      margin: auto;
    }
  `};


`;
