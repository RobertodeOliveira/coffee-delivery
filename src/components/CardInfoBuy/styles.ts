import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${theme.colors.base.background};
    min-width: 32rem;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: -1px;
      z-index: -1;
      border-radius: 7px 37px 7px 37px;
      background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }
  `}
`

export { Container }
