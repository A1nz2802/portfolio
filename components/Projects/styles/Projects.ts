import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #212529;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
`

export const Title = styled.h5`
  font-family: 'poppins', sans-serif;
  line-height: 1.3;
  background-image: linear-gradient(to right, #6a67ce, #fc636b);
  font-size: 2.6rem;
  font-weight: 600;
  letter-spacing: -0.01rem;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-align: center;
`

export const SubTitle = styled.p`
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  line-height: 26px;
  text-align: center;
`