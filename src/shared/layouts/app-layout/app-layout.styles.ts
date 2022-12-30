import styled from 'styled-components';

export const SAppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  overflow: hidden;
  display: flex;
  background: #312b4e;
`;

export const SSidebar = styled.div`
  width: 300px;
  padding: 20px;
  background: #fff;
`;

export const SSidebarTitle = styled.h1`
  color: #453e72;
  margin-bottom: 20px;
`

export const SContent = styled.div`
  flex: 1;
  margin: 40px;
`;

export const SNavItem = styled.div<{ $active?: boolean }>`
  color: ${({$active}) => ($active ? '#fff' : 'black')};
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  transition: all;
  transition-duration: 300ms;
  background: ${({$active}) => ($active ? 'linear-gradient(90deg, rgba(49,44,79,1) 0%, rgba(124,129,207,1) 100%);' : '')};
  margin-bottom: 10px;

  &:hover {
    background: ${({$active}) => ($active ? '' : 'rgba(204,204,204,0.32)')};
  }
`;
