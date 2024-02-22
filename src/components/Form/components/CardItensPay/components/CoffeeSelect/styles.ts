import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${theme.colors.base.button};
    margin-bottom: 1.5rem;
  `}
`
const Img = styled.img`
  width: 64px;
  height: 64px;
`

const Wrapper = styled.div``

const WrapperButton = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-top: 0.5rem;
`

export { Container, Img, Wrapper, WrapperButton }
