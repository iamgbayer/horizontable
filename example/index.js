import React from 'react'
import { render } from 'react-dom'
import Horizontable from '../src/index'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h2`
  color: #fff;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Description = styled.h4`
  color: #fff;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Card = styled.div`
  background-color: #f3a183;
  min-width: 400px;
  height: 220px;
  text-align: center;
  line-height: 220px;
  margin: 10px;
  border-radius: 5px;
  color: #fff;
`

const Global = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #ec6f66;
  text-align: center;
`

const FullParent = styled.div`
  width: 100%;

  .children {
    display: flex;
  }
`

const SpecificParent = styled.div`
  width: 600px;

  .children {
    display: flex;
  }
`

function Example() {
  return (
    <>
      <Global />
      <Container>
        <Title>Horizontable, </Title>
        <iframe
          className="github"
          src="https://ghbtns.com/github-btn.html?user=iamgbayer&repo=horizontable&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="170px"
          height="20px"
        />

        <Description>Parent with full width</Description>

        <FullParent>
          <Horizontable>
            <div className="children">
              <Card>Scroll me 😍</Card>
              <Card>Drag me 😎</Card>
              <Card>Scroll me ❤️</Card>
              <Card>Drag me ✨</Card>
              <Card>Scroll me 🌀</Card>
              <Card>Drag me 🌿</Card>
              <Card>Scroll me 🎉</Card>
            </div>
          </Horizontable>
        </FullParent>

        <Description>Parent with specific width</Description>

        <SpecificParent>
          <Horizontable>
            <div className="children">
              <Card>Scroll me 😍</Card>
              <Card>Drag me 😎</Card>
              <Card>Scroll me ❤️</Card>
              <Card>Drag me ✨</Card>
              <Card>Scroll me 🌀</Card>
              <Card>Drag me 🌿</Card>
              <Card>Scroll me 🎉</Card>
            </div>
          </Horizontable>
        </SpecificParent>
      </Container>
    </>
  )
}

render(<Example />, document.getElementById('app'))
