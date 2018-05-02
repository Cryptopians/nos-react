import React from 'react'

const style = {
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  border: '1px solid #63bc46',
  backgroundColor: '#63bc46',
  color: '#ffffff'
}

export default ({ children, onClick }) => (
  <button style={style} onClick={onClick}>
    {children}
  </button>
)
