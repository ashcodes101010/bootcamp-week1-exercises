import React from 'react'
import { MainButton } from './styles'

const FormButton = ({ button, action }) => 
  <MainButton onClick={action}>{button}</MainButton>

  export default FormButton