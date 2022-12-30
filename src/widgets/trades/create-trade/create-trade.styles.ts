import styled from 'styled-components';

export const SCreateTrade = styled.div`
  color: #fff;
  min-width: 400px;
  height: 100%;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #443f70;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.58);
`

export const SCreateTradeTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`

export const SUsersListTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const SUsersList = styled.div`
  width: 100%;
  height: 100%;
  max-height: 350px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-content: center;
  margin-bottom: 20px;

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

export const SUserWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

export const SInputWrapper = styled.div`
  margin-bottom: 20px;
`