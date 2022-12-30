import styled from 'styled-components';

export const STradeRoom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
`
export const STitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 20px;
`

export const SHelpMessage = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #854df5;
  background: #ffae45;
`

export const STradersList = styled.div`
  display: flex;
  gap: 20px;
  width: calc(100vw - 380px);
  padding: 30px;
  margin-top: 20px;
  justify-content: start;
  align-content: center;
  align-items: center;
  border-radius: 15px;
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

export const SHeader = styled.div<{ $trading: boolean, $winner: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 40px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  color: #035e33;
  background: ${({$trading, $winner}) => {
    if ($trading) return '#70cb98'
    if ($winner) return 'gold'
    return 'transparent'
  }};
  border-radius: 5px;
`

export const STrader = styled.div`
  display: flex;
  min-width: 200px;
  flex-direction: column;
  background: transparent;
`

export const SWinner = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #0d00c7;
`

export const STraderInfo = styled.div`
  height: 300px;
  background: #9ba7de;
  border-radius: 5px;
  padding: 15px;
`