import styled, { css } from 'styled-components'

const Container = styled.div`
  height: 544px;
  /* padding: 94px 160px; */
`

const Wrapper = styled.div``

const Content = styled.div`
  /* width: 124px; */
  display: flex;
`

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.title};
  `}
`

const Image = styled.img``

export { Container, Wrapper, Content, Title, Image }
