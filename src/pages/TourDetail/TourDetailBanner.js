'use client'
import { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
// import required modules
import { FreeMode, Thumbs, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import locationIcon from '@/assets/images/location.svg'
import star from '@/assets/images/tourDetail/star.svg'
import btnDown2 from '@/assets/images/tourDetail/btnDown2.svg'
import { Slider } from '@mui/material'
import videoBG from '@/assets/images/about/videoBG.png'
import smallPlayBtn from '@/assets/images/smallPlayBtn.svg'
import TourDetailVideo from './TourDetailVideo'

export default function TourDetailBanner({ data = {}, headerData }) {
  const { gallery, price, location, rate, video, title } = data
  const icons = new Array(Math.ceil(data?.rate || 5)).fill(0)
  const outsideRef = useRef()
  const swiperRef = useRef()
  const [thumbsSwiper, setThumbsSwiper] = useState(null) // config swiper
  const [isPlay, setIsPlay] = useState(false)
  // scroll to next section
  const handleScrollDown = () => {
    outsideRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    isPlay ? swiperRef.current.autoplay.stop() : swiperRef.current.autoplay.start()
  }, [isPlay])
  return (
    <section className='tour-banner-wrapper relative overflow-hidden md:block hidden'>
      <Swiper
        spaceBetween={0}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Thumbs, Autoplay]}
        loop={true}
        className='mySwiper2'
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        <>
          {video?.uploadVideo?.mediaItemUrl && (
            <SwiperSlide className='relative w-full'>
              <TourDetailVideo
                className={{
                  video: 'md:h-[53.125vw] z-0',
                  button: 'md:w-[7.2vw] md:h-[8.4375vw] bottom-[40vh] left-[47vw]'
                }}
                vidLink={video?.uploadVideo?.mediaItemUrl}
                overlayImg={video?.overlayImage || videoBG}
                isPlay={isPlay}
                setIsPlay={setIsPlay}
              />
            </SwiperSlide>
          )}
        </>
        {gallery?.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='w-full h-[100vh] relative'>
                <Image
                  src={img?.sourceUrl}
                  alt={img?.altText}
                  width={1000}
                  height={1000}
                  priority
                  className='w-full h-full object-cover'
                />
                <div className='bg-[#00000033] w-full h-full absolute top-0 left-0'></div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className='absolute bottom-[3.19vw] left-[8.12vw] z-10'>
        <div className='flex gap-[8px] items-center'>
          <Image
            src={locationIcon}
            alt=''
            width={100}
            height={100}
            className='w-[1.5vw] h-[1.5vw]'
          />
          <span className='text-[1.5vw] leading-normal text-primaryColor'>{location}</span>
        </div>

        <div className='w-[37.0625vw] text-[2.5vw] font-optima font-semibold leading-[1.2] text-white'>
          {title || ''}
        </div>
      </div>

      <div className='tour-banner'>
        <div>
          <div className='w-[32vw] flex items-center justify-between pr-[2.87vw] text-white'>
            <div>
              <div className='flex gap-[10px] items-center font-bold leading-normal'>
                <span className='text-[1.25vw]'>{headerData?.priceHeader}:</span>
                <span className=' max-w-[20vw] text-[1.875vw] capitalize line-clamp-1'>{`$${
                  price?.lowestPrice || ''
                } - $${price?.highestPrice || ''}`}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[1.25vw] font-medium leading-normal'>{rate || 5}</span>
                <span className='flex gap-x-1'>
                  {icons?.map((icon, index) => {
                    return (
                      <Image
                        src={star}
                        alt=''
                        width={20}
                        height={20}
                        className='w-[1.375vw] h-[1.375vw]'
                        key={index}
                      />
                    )
                  })}
                </span>
              </div>
            </div>
            <div
              className='tour-detail-scroll flex flex-col justify-center items-center gap-1 cursor-pointer'
              onClick={handleScrollDown}
            >
              <div className='rounded-full w-[2.8125vw] h-[2.8125vw] bg-primaryColor flex items-center justify-center'>
                <Image
                  src={btnDown2}
                  alt=''
                  width={15}
                  height={15}
                  className='w-[0.86188vw] h-[0.75844vw]'
                />
              </div>
              <span className='text-[0.75vw] font-medium leading-normal tracking-[0.6px] uppercase text-center'>
                {headerData?.buttonContent}
              </span>
            </div>
          </div>

          <Slider
            aria-label='picture'
            defaultValue={0}
            valueLabelDisplay='off'
            max={0}
            style={{ color: '#8E999F' }}
            className='tour-banner-slider'
          />
        </div>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={14}
          slidesPerView={4}
          freeMode={true}
          loop={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className='mySwiper sub-banner-slide'
        >
          {video?.uploadVideo?.mediaItemUrl && (
            <SwiperSlide className='relative'>
              <Image
                src={video?.overlayImage.sourceUrl || videoBG}
                alt={video?.overlayImage.altText || ''}
                width={200}
                height={200}
                className='w-[7.1875vw] h-[4.9375vw] object-cover rounded-lg'
              />
              <Image
                src={smallPlayBtn}
                alt=''
                width={30}
                height={30}
                className='w-[0.75vw] h-[0.9375vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              />
            </SwiperSlide>
          )}
          {gallery?.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={img?.sourceUrl}
                  alt={img?.altText}
                  priority
                  width={1000}
                  height={1000}
                  className='w-[7.1875vw] h-[4.9375vw] object-cover rounded-lg'
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div ref={outsideRef}></div>
    </section>
  )
}
