import React from 'react'
import { Rings } from 'react-loader-spinner'
function Loading() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-center items-center '>
        <Rings
            visible={true}
            height="200"
            width="200"
            color="#066AB2"
            ariaLabel="rings-loading"
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