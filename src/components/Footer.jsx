import React from 'react'
import { css } from 'glamor'

const footer = css({
  textAlign: 'center',
  marginTop: '200px'
})

const Footer = () => {
  return (
    <div className="u-full-width" {...footer}>
      <a href="http://makeinbelgium.slack.com/" target="_blanc">Structureel meehelpen aan dit initiatief?</a>
    </div>
  )
}

export default Footer