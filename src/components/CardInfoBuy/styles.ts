import styled from 'styled-components'

const Container = styled.div`
  /* padding: 40px;
  border: 1px solid transparent;
  background-clip: padding-box;

  border-image: linear-gradient(to right, #dbac2c, #8047f8);
  border-image-slice: 1;
  border-radius: 6px 36px 6px 36px; */

  position: relative;
  width: 200px;
  height: 200px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    border: 1px solid transparent;
    background-clip: padding-box;
    border-radius: 6px 36px 6px 36px;
  }

  &:before {
    border-image: linear-gradient(to right, #dbac2c, #8047f8);
    border-image-slice: 1;
  }
`

export { Container }
