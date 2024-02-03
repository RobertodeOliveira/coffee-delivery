import styled, { css } from 'styled-components'

const Container = styled.div`
  /* display: flex;
  justify-content: space-between; */
`

const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xmd};
    font-weight: 600;
  `}
`

export { Container, Title }
