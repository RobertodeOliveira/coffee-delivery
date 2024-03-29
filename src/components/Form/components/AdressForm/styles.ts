import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;

  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  margin-top: 2rem;
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .rua {
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }
`

export { Container }
