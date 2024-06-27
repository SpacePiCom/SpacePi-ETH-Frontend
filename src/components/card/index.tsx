import styled from 'styled-components'

export const CardBox = styled.div`
  background-color: #2a3039;
  padding: 40px 40px 40px 40px;
  border-radius: 20px 20px 20px 20px;
  display: grid;
  gap: 8px;
  width: 100%;
  grid-auto-rows: auto auto 1fr;
  .icon{
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 30px 30px 30px;
  }
`
