import React from 'react'
import { useParams } from 'react-router-dom'

function WhiteLie() {
const {page} = useParams()
  return (
    <div>White Lie - {page}</div>
  )
}

export default WhiteLie