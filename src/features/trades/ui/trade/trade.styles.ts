import styled from 'styled-components';

export const STrade = styled.div`
  width: 300px;
  color: #fff;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  background: #9ba7de;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: auto;
`

export const STitle = styled.h2`
  min-height: 60px;
  margin: 0 0 10px 0;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const STimeInfo = styled.div`
  margin: 0 0 10px 0;
`

export const SUsersList = styled.div`
  max-height: 300px;
  padding: 5px;
  overflow: auto;
  
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

export const SUserWrapper = styled.div<{ $trading: boolean, $winner: boolean }>`
  font-weight: bold;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  outline: 2px solid rgba(71, 0, 255, 0.17);
  border-radius: 5px;
  margin-bottom: 10px;
`

export const SWinner = styled.div`
  color: gold;
  margin-right: auto;
  background: rgba(71, 0, 255, 0.17);
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`

export const STrading = styled.div`
  color: #b4ecc1;
  margin-right: auto;
  background: rgba(71, 0, 255, 0.17);
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`