import styled, { css } from 'styled-components'

const ContainerForm = styled.form`
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;
`
const Wrapper = styled.div`
  /* background: red; */
  /* width: 50%; */
`

const BaseContainer = styled.div`
  ${({ theme }) => css`
    padding: 40px;
    margin-top: 1rem;
    background: ${theme.colors.base.card};
    border-radius: ${theme.radius.md};

    max-width: 640px;
  `}
`

const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xmd};
    font-weight: 600;
  `}
`

export { BaseContainer, Title, ContainerForm, Wrapper }
