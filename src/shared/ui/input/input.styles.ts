import styled from 'styled-components';

export const SInput = styled.input`
  width: 100%;
  outline: transparent solid 2px;
  transition: all;
  transition-duration: 300ms;
  font-size: 1rem;
  padding: 15px;
  border-radius: 10px;
  border-style: solid;
  border-image: initial;
  background: inherit;
  color: inherit;
  border-color: inherit;

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.67);
  }

  &:focus {
    border-color: transparent;
    outline: #ffffff solid 2px;
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.17);

    &::placeholder {
      color: transparent;
    }
  }
`