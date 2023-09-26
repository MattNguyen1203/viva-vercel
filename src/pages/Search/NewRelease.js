'use client'

import BestSeller from '@/components/Common/BestSeller'
import Button from '@/components/Common/Button'
import React from 'react'

const NewRelease = ({listBlog}) => {
  return (
    <div>
      <div className='mt-[6.69vw]'>
        <h2 className='mb-[3vw] font-optima font-semibold leading-[4.4vw] capitalize text-[4vw]'>Related News</h2>
        <BestSeller isBlogItem={true} listBlog={listBlog}/>
      </div>
      <div className='flex mt-[4vw] mb-[5.75vw]'>
        <Button className='mx-auto border-[1px] py-[1.32vw] px-[2.88vw] rounded-[0.75vw] w-fit'>See more</Button>
      </div>
    </div>
  )
}

export default NewRelease
