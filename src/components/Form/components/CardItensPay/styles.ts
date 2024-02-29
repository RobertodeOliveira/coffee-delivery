import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`

const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 40px;
    margin-top: 1rem;
    background: ${theme.colors.base.card};
    border-radius: 6px 44px 6px 44px;

    word-break: break-all;
    margin-bottom: 2rem;
  `}
`

const Content = styled.div`
  max-height: 500px;
  overflow-y: auto;
`

const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xmd};
    font-weight: 600;
  `}
`

const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.brand.yellow};
    border-radius: ${theme.radius.md};
    border: none;
    color: ${theme.colors.base.white};
    padding: 12px 0;
    font-weight: 700;

    cursor: pointer;
    width: 100%;

    &:hover {
      background: ${theme.colors.brand.yellowDark};
      transition: 0.2s;
    }
  `}
`

export { Container, Title, Wrapper, Content, Button }
