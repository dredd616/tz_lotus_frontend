import styled from 'styled-components';

export const SUser = styled.div<{ $selected?: boolean }>`
  transition: all;
  transition-duration: 300ms;
  background: ${({ $selected }) => ($selected ? '#70cb98' : 'rgba(207,195,235,0.17)')};
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const STitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
