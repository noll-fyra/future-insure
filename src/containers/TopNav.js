import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class TopNav extends Component {
  render() {
    return (
      <Container>
        <div>Menu</div>
        <h1 style={{ fontSize: '2.5em', color: '#5c80bc' }}>
          <i className="far fa-arrow-circle-right" />
          <i>&nbsp;Future</i>
        </h1>
        <b
          style={{
            padding: '12px',
            backgroundColor: '#e84855',
            color: 'white'
          }}>
          Get Started
        </b>
      </Container>
    )
  }
}

export default TopNav

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 64px;
  width: 100%;
  background-color: white;
  ${'' /* border-bottom: 1px solid #5c80bc; */} padding: 12px;
`
