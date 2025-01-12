import React from 'react'

import {RotatingLines} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="loader-container">
      <RotatingLines strokeColor="#156ddc" height={40} width={40} />
    </div>
  )
}

export default Loader