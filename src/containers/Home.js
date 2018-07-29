import React, { Component } from 'react'
import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <main>
        <Landing>
          <h1
            style={{ fontWeight: 300, fontSize: '4em', marginBottom: '32px' }}>
            Insurance made simple.
          </h1>
          <b
            style={{
              padding: '12px',
              backgroundColor: '#e84855',
              color: 'white'
            }}>
            Get Started
          </b>
        </Landing>

        <All style={{ backgroundColor: '#f7f7f7' }}>
          <h1
            style={{ fontWeight: 300, fontSize: '4em', marginBottom: '32px' }}>
            Choose one to learn more.
          </h1>
          <h2>Find out more about the most common types of insurance</h2>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '24px'
            }}>
            {['life', 'critical illness', 'personal accident'].map(i => (
              <div
                key={i}
                style={{
                  width: '25vw',
                  height: '25vw',
                  backgroundColor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                <h2>{i.toUpperCase()}</h2>
              </div>
            ))}
          </div>
        </All>

        <All>
          <h1
            style={{ fontWeight: 300, fontSize: '4em', marginBottom: '32px' }}>
            Life
          </h1>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '32px'
            }}>
            <div
              style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline'
              }}>
              {[5, 4, 3, 5, 1, 1, 2, 3, 4, 5].map((i, index) => (
                <div key={i}>
                  <div
                    style={{
                      width: '48px',
                      height: `calc(24px * ${i}`,
                      backgroundColor: '#5c80bc',
                      marginRight: '24px'
                    }}
                  />
                  {index * 6 + 12}
                </div>
              ))}
            </div>

            <div style={{ width: '80%', textAlign: 'center' }}>
              <br />
              <h2>All the information about life</h2>
              <br />
              <p>
                <b
                  style={{
                    padding: '12px',
                    backgroundColor: '#e84855',
                    color: 'white'
                  }}>
                  Learn more
                </b>
              </p>
            </div>
          </div>
        </All>

        <All>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[
              '1st awesome thing',
              '2nd awesome thing',
              '3rd awesome thing',
              '4th awesome thing',
              '5th awesome thing',
              '6th awesome thing',
              '7th awesome thing',
              '8th awesome thing',
              '9th awesome thing'
            ].map((t, index) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '33.3333vw',
                  height: '33vh',
                  border: `1px solid lightGrey`
                }}>
                {t}
              </div>
            ))}
          </div>
        </All>

        <All style={{ backgroundColor: '#f7f7f7' }}>
          <h1
            style={{ fontWeight: 300, fontSize: '4em', marginBottom: '32px' }}>
            Critical Illness
          </h1>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '32px'
            }}>
            <div
              style={{
                // width: '80%',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
              }}>
              {[5, 4, 3, 5, 1, 1, 2, 3, 4, 5].map((i, index) => (
                <div key={i} style={{ display: 'flex' }}>
                  {index * 6 + 12}&nbsp;
                  <div
                    style={{
                      width: `calc(24px * ${i} * 4`,
                      height: '24px',
                      backgroundColor: 'green',
                      marginBottom: '16px'
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ width: '80%', textAlign: 'center' }}>
              <br />
              <h2>All the information about critical illness</h2>
              <br />
              <p>
                <b
                  style={{
                    padding: '12px',
                    backgroundColor: '#e84855',
                    color: 'white'
                  }}>
                  Learn more
                </b>
              </p>
            </div>
          </div>
        </All>

        <All style={{ backgroundColor: '#f7f7f7' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[
              '1st awesome thing',
              '2nd awesome thing',
              '3rd awesome thing',
              '4th awesome thing',
              '5th awesome thing',
              '6th awesome thing',
              '7th awesome thing',
              '8th awesome thing',
              '9th awesome thing'
            ].map((t, index) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '33.3333vw',
                  height: '33vh',
                  border: `1px solid lightGrey`
                }}>
                {t}
              </div>
            ))}
          </div>
        </All>

        <All>
          <h1
            style={{ fontWeight: 300, fontSize: '4em', marginBottom: '32px' }}>
            Personal Accident
          </h1>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '32px'
            }}>
            <div
              style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline'
              }}>
              {[5, 4, 3, 5, 1, 1, 2, 3, 4, 5].map((i, index) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    marginRight: '16px'
                  }}>
                  <div
                    style={{
                      width: `calc(24px * ${i}`,
                      height: `calc(24px * ${i}`,
                      borderRadius: '50%',
                      backgroundColor: 'red'
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>{index * 6 + 12}</div>
                </div>
              ))}
            </div>

            <div style={{ width: '80%', textAlign: 'center' }}>
              <br />
              <h2>All the information about personal accident</h2>
              <br />
              <p>
                <b
                  style={{
                    padding: '12px',
                    backgroundColor: '#e84855',
                    color: 'white'
                  }}>
                  Learn more
                </b>
              </p>
            </div>
          </div>
        </All>

        <All>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[
              '1st awesome thing',
              '2nd awesome thing',
              '3rd awesome thing',
              '4th awesome thing',
              '5th awesome thing',
              '6th awesome thing',
              '7th awesome thing',
              '8th awesome thing',
              '9th awesome thing'
            ].map((t, index) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '33.3333vw',
                  height: '33vh',
                  border: `1px solid lightGrey`
                }}>
                {t}
              </div>
            ))}
          </div>
        </All>

        <All style={{ backgroundColor: '#f7f7f7' }}>
          <h1>
            <i>"Amazing life story experience"</i>
          </h1>
          <h2>Someone who said this</h2>
          <br />
          <b
            style={{
              padding: '12px',
              backgroundColor: '#e84855',
              color: 'white'
            }}>
            Get Started
          </b>
        </All>

        <Footer>
          <div>
            <b>Fun footer stuff goes here</b>
            <br />
            <br />
            <i
              className="fab fa-twitter"
              style={{ width: '10vw', fontSize: '2em' }}
            />
            <i
              className="fab fa-instagram"
              style={{ width: '10vw', fontSize: '2em' }}
            />
            <i
              className="fab fa-facebook"
              style={{ width: '10vw', fontSize: '2em' }}
            />
          </div>
          <br />
          2018 Future Inc.
        </Footer>
      </main>
    )
  }
}

export default Home

const Landing = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const All = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
`
