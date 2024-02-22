import styled from 'styled-components'

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

export { Container, Content, ButtonLogo }
