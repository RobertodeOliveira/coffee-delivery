// import { HTMLProps } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  height: 544px;
  padding: 94px 0;
`

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px;
`

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.title};
    font-size: ${theme['font-size'].xg};
    line-height: 130%;
    padding-bottom: 1rem;
  `}
`

const Image = styled.img``

// // eslint-disable-next-line prettier/prettier
// interface TextProps extends HTMLProps<HTMLParagraphElement> { }

interface TextProps {
  fontSize?: string
}

const Text = styled.p<TextProps>`
  ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}
`

const Instrutions = styled.div`
  display: flex;
  /* flex-direction: column; */

  gap: 2rem;
  padding-top: 66px;
`

const ContentInstructions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const WrapperInstrutions = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export {
  Container,
  Wrapper,
  Content,
  Title,
  Image,
  Text,
  Instrutions,
  ContentInstructions,
  WrapperInstrutions,
}
