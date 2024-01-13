import styled, { css } from 'styled-components'

const Container = styled.div`
  height: 544px;
  /* background: cadetblue; */
  padding: 94px 0;
`

const Wrapper = styled.div`
  display: flex;
  /* background: red; */
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: purple; */
  padding: 28px;
`

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.title};
    font-size: ${theme['font-size'].xg};
    line-height: 130%;
    /* background: pink; */
  `}
`

const Image = styled.img``

const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme['font-size'].lg};
    padding-top: 1rem;
  `}
`

const Instrutions = styled.div`
  padding-top: 66px;
`

export { Container, Wrapper, Content, Title, Image, Text, Instrutions }
