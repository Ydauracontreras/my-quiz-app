import styled from 'styled-components';

export const Wrapper = styled.div`
max-width: 1100px;
    background: #D7DDE8;
    border-radius: 10px;
    border: 1px solid #757F9A;
    padding: 20px;
    box-shadow: 0px 5px 10px rgb(0 0 0);
    text-align: center;
  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 35px;
    margin: 5px 0;
    background: ;
    background: ${({ correct, userClicked }) =>
        correct
            ? 'darkgreen'
            : !correct && userClicked
                ? 'darkred'
                : '#757F93'};
    border: 2px solid #2C3E6B;
    box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
    border-radius: 5px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0,0,0,0.25);
  }
`;