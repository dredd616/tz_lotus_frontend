import styled from 'styled-components';

export const SUsersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
`

export const SUsersList = styled.div`
  height: calc(100vh - 150px);
  gap: 20px;
  border-radius: 15px;
  overflow: auto;
  margin-bottom: 10px;


  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px transparent;
    border: solid 3px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px #6e7aac;
    border: solid 3px transparent;
  }
`

export const STitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

export const SUserWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  background: #9ba7de;
  border-radius: 5px;
`