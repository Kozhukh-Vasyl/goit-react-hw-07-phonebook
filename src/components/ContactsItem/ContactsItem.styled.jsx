import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${appear} 500ms ease-in-out;
`;

const ContactName = styled.p`
  margin-right: 10px;
`;

const ContactButton = styled.button`
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

  &:disabled {
    background-color: #bbbfa6;
  }
`;

export { ContactItem, ContactName, ContactButton };
