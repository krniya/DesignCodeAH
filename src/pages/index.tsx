import * as React from "react"
import styled from "styled-components"

const IndexPage = () => (
  <Wrapper>
    <Logo src="/images/logos/react-logo.svg" alt="icon" />
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
  height: 1247px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`

const Logo = styled.img`
width: 60px;
height: 60px:
`
