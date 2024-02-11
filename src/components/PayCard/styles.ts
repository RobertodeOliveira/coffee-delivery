import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    padding: 40px;
    margin-top: 1rem;
    background: ${theme.colors.base.card};
    border-radius: ${theme.radius.md};

    max-width: 640px;
    margin-bottom: 2rem;
  `}
`
const Content = styled.div``

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`

const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.base.subtitle};
  `}
`

const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.base.text};
    font-size: ${theme.fontSizes.sm};
  `}
`

const WrapperContent = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 8px;
`

export { Container, Content, Wrapper, Title, Text, WrapperContent }
