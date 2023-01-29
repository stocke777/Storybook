import React from 'react'
import { useParams } from 'react-router-dom'

function UpTheHill() {
const {page} = useParams()
  return (
    <div>Up The Hill - {page}</div>
  )
}

export default UpTheHill