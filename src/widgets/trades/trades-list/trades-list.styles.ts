import styled from 'styled-components';

export const STradesListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: auto;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  align-items: center;
  color: #fff;
`

export const STitle = styled.h1`
  margin-bottom: 20px;
`

export const STradesList = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
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