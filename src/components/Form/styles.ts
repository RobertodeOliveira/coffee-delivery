import { FormHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Container = styled.div`
  ${({ theme }) => css`
    padding: 40px;
    margin-top: 1rem;
    background: ${theme.colors.base.card};
    border-radius: ${theme.radius.md};

    max-width: 640px;
  `}
`

const InfoForm = styled.div<FormProps>`
  display: flex;
  gap: 0.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  gap: 1rem;
`
const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xmd};
    font-weight: 600;
  `}
`

export { Container, Form, InfoForm, Title }
