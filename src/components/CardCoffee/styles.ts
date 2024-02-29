import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
`

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 256px;

    background: ${theme.colors.base.card};
    border-radius: 6px 36px;
    padding: 0 1.25rem;
    padding-bottom: 1.25rem;
    margin-bottom: 40px;
  `}
`

const Image = styled.img`
  max-width: 120px;
  margin-top: -25px;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    font-family: ${theme.fontFamily.title};
    margin-top: 1rem;
  `}
`

const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.base.label};
    text-align: center;
    margin-top: 0.5rem;
  `}
`

const Value = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSizes.md};

    display: flex;
    align-items: center;
  `}
`

const WrapperChip = styled.div`
  display: flex;
  gap: 0.25rem;
`

const WrapperBuy = styled.div`
  display: flex;

  gap: 0.5rem;
  margin-top: 2rem;
`

const WrapperPrice = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
  margin-right: 1.4rem;
`

const ButtonCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.brand.purpleDark};
    border-radius: ${theme.radius.md};
    padding: 0.5rem;
    position: relative;

    &:hover {
      cursor: pointer;
      background: ${theme.colors.brand.purple};
    }
  `}
`

export {
  Container,
  Wrapper,
  Image,
  Title,
  Text,
  WrapperChip,
  Value,
  WrapperBuy,
  WrapperPrice,
  ButtonCart,
}
