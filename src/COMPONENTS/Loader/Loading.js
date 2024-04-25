import React from 'react'
import { LineWave } from 'react-loader-spinner'
function Loading() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center '>
        <LineWave
            visible={true}
            height="200"
            width="200"
            color="#066AB2"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />
    </div>
  )
}

export default Loading