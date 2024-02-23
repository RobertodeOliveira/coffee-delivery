import styled, { css } from 'styled-components'

const Container = styled.div``

const WrapperText = styled.div`
  margin-bottom: 40px;
`

const SectionSucess = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxl};
    font-family: ${theme.fontFamily.title};
    color: ${theme.colors.base.yellowDark};
  `}
`

const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
  `}
`

export { Container, WrapperText, Title, Text, SectionSucess }
