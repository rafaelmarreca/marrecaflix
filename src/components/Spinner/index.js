import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s ease-in-out infinite;
  transform: translateZ(0);
  
  border-top: ${({ sizeBorder }) => `${sizeBorder}px`} solid #dedede;
  border-right: ${({ sizeBorder }) => `${sizeBorder}px`} solid #dedede;
  border-bottom: ${({ sizeBorder }) => `${sizeBorder}px`} solid #dedede;
  border-left: ${({ sizeBorder }) => `${sizeBorder}px`} solid transparent;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Spinner;
