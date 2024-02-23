import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const Content = styled.div``

interface WrapperIconProps {
  $background?: string
}

const WrapperIcon = styled.div<WrapperIconProps>`
  ${({ $background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    padding: 0.5rem;
    border-radius: 1000px;
    background: ${$background};
  `}
`

const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
  `}
`

const SubTitle = styled(Title)``

export { Container, WrapperIcon, Content, Title, SubTitle }
