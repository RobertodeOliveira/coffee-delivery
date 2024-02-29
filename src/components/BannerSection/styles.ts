import styled, { css } from 'styled-components'

const Container = styled.div`
  padding: 94px 0;
  background-image: url('../../assets/Background.svg');
  background-size: cover;
`

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div``

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSizes.xg};
    line-height: 130%;
    padding-bottom: 1rem;
  `}
`

const Image = styled.img``

interface TextProps {
  fontSize?: string
}

const Text = styled.p<TextProps>`
  ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}
`

const Highlights = styled.div`
  display: flex;
  width: 100%;

  gap: 2rem;
  padding-top: 66px;
`

const ContentHighlights = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const WrapperHighlights = styled.div`
  display: flex;
  flex-direction: column;

  height: 100px;
  flex-wrap: wrap;
  gap: 1rem;
`

export {
  Container,
  Wrapper,
  Content,
  Title,
  Image,
  Text,
  Highlights,
  ContentHighlights,
  WrapperHighlights,
}
