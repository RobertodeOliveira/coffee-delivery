import styled, { css } from 'styled-components'

const Container = styled.div`
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

const InfoForm = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ContentForm = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  gap: 1rem;
`

export { Container, Title, ContentForm, InfoForm }
