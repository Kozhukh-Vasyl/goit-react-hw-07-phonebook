import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  display: block;
  margin-right: auto;
`;

const StyledField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1.5px solid #ccc;

  &:focus {
    outline: none;
    border-color: #afbd4b;
  }
`;

const Error = styled.div`
  position: absolute;
  color: #d15656;
  animation: ${appear} 500ms ease-in-out;
`;

const StyledButton = styled.button`
  background-color: #f8fcd9;
  color: #000000;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: #e3e8c8;
  }
`;

export {
  StyledLabel,
  StyledField,
  Error,
  StyledButton,
  StyledForm,
};
