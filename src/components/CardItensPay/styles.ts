import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    padding: 40px;
    margin-top: 1rem;
    background: ${theme.colors.base.card};
    border-radius: 6px 44px 6px 44px;

    word-break: break-all;
    max-width: 448px;
    margin-bottom: 2rem;
  `}
`

const Wrapper = styled.div``

const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xmd};
    font-weight: 600;
  `}
`

export { Container, Title, Wrapper }
