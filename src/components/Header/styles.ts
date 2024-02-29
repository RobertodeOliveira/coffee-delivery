import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

const ButtonLogo = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  gap: 0.375rem;
`

const ButtonCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.brand.yellowLight};
    border-radius: ${theme.radius.md};
    padding: 0.5rem;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 1000px;

      right: -12px;
      top: -10px;
      background: ${theme.colors.base.yellowDark};
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.base.white};
    }
  `}
`

export { Container, Content, ButtonLogo, ButtonCart }
