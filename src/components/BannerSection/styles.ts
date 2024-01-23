// import b from '../../assets/Background.svg'
// import { HTMLProps } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  /* height: 544px; */
  padding: 94px 0;
  background-image: url('../../assets/Background.svg');
  /* background-repeat: repeat; */
  background-size: cover;
`

const Wrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`

const Content = styled.div`
  /* display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 28px; */
`

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.title};
    font-size: ${theme.fontSizes.xg};
    line-height: 130%;
    padding-bottom: 1rem;
  `}
`

const Image = styled.img`
  /* max-width: 476px; */
`

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
