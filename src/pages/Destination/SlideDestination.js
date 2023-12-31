'use client'

import TourItem from '@/components/Common/TourItem'
import React from 'react'
import Button from '@/components/Common/Button'
import Image from 'next/image'
import '@/scss/pages/_slideDestination.scss'
import { createTheme, useMediaQuery } from '@mui/material'
import TourItemMobile from '@/components/Common/TourItemMobile'
import OtherTypeOfTrip from '@/components/Common/OtherTypeOfTrip'
import SlideTour from '@/components/Common/SlideTour'
function SlideDestination({ data, dataOtherType }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 768
      }
    }
  })
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className='relative'>
      <div className='absolute inset-0 z-[-1] slideDestination md:block hidden'></div>
      <div className={`flex flex-col md:mt-[6.94vw] ${onlySmallScreen ? 'w-full' : 'content'}`}>
        <span className='heading-1 md:mb-[3vw] md:pl-0 pl-[4.27vw]'>Other Types of Trip</span>
        <div className='max-md:mt-[6.4vw]'>
          <SlideTour hotTourData={dataOtherType} />
        </div>
        <div className='flex justify-center md:mt-[3.5vw] mt-[10.1vw]'>
          <Button className='btn-secondary'>See More</Button>
        </div>

        <div className='flex flex-col md:mt-[7.5vw] mt-[11.2vw] '>
          <span className='heading-1 md:mb-[3vw] md:pl-0 pl-[4.27vw]'>Best Seller Tours</span>
          <div className='grid md:grid-cols-4 gap-x-[2.5vw] gap-y-[3vw] md:bg-transparent bg-[#F3F6FB]'>
            {data?.map((tour, index) => (
              <div key={index}>{onlySmallScreen ? <TourItemMobile /> : <TourItem data={tour} />}</div>
            ))}
            {data?.length > 9 ? (
              <div className='h-[24.5vw] rounded-[1vw] relative hidden md:flex  justify-center items-center lastItem'>
                {/* <Image src={imgTour} alt='img tour' fill className='object-cover h-full' /> */}
                <div className='absolute flex flex-col items-center justify-center'>
                  <div className='inline-flex gap-[0.3125vw] justify-center items-center'>
                    <span className='text-justify font-optima text-[2vw] font-normal leading-[130%] text-white'>+</span>
                    <span className='text-white heading-1'>90</span>
                  </div>
                  <span className='text-white text-justify font-optima text-[1.5vw] block font-medium leading-[150%]'>
                    Other tours
                  </span>
                  <div className='flex justify-center mt-[1.25vw]'>
                    <Button className='btn-secondary'>See More</Button>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='flex justify-center md:mt-[3.5vw] mt-[10.1vw]'>
          <Button className='btn-secondary'>See More</Button>
        </div>
      </div>
    </div>
  )
}

export default SlideDestination
