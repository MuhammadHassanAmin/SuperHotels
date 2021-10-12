import React from 'react'
import styled from 'styled-components'
// import I18n from 'stores/i18n'

const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background: rgba(227, 73, 28, 0.8);
  outline: none;
  border: none;
  cursor: pointer;
  margin: 20px;
  :hover {
    background: #fb6d42;
  }
`

const Border = styled.div`
  background: rgba(255, 255, 255, 0.4);
  height: 80px;
  width: 80px;
  border-radius: 50%;
`
const RecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Instructions = styled.div`
  font-family: Arial;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.75px;
  display: flex;
  margin-bottom: 20px;
`

const InstuctionsHighlight = styled.div`
  font-weight: 700;
  color: #dc6547;
  padding: 0 5px;
`

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}

export default (props) => (
  <RecWrapper>
    <Instructions>
      {/* <div>{I18n.t('apply.stop_button_1')} </div> */}
      <div>{'apply.stop_button_1'} </div>
      {/* <InstuctionsHighlight> {I18n.t('apply.stop_button_2')} </InstuctionsHighlight> */}
      <InstuctionsHighlight> {'apply.stop_button_2'} </InstuctionsHighlight>
      {/* {I18n.t('apply.stop_button_3')} */}
      {'apply.stop_button_3'}
    </Instructions>

    <Border>
      <Button {...props} />
    </Border>
  </RecWrapper>
)