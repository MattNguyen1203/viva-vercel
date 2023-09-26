import Image from 'next/image'
import subBannerBg from '@/assets/images/about/subBannerBg.png'
import subBannerBg2 from '@/assets/images/about/subBannerBg2.png'

export default function SubBanner({ data = {}, className }) {
  return (
    <section className='md:w-[83.81vw] w-full md:m-auto rounded-[10px] relative md:px-[4.375vw] px-0 md:pt-[7.9375vw] pt-0 md:pb-[13.25vw] pb-0 md:shadow-[0_0_2.5vw_0_rgba(0,0,0,0.08)]'>
      <Image
        src={subBannerBg}
        alt='subBannerBg'
        className='w-full h-full absolute top-0 left-0 z-0 md:rounded-[10px]'
      />

      <div className='relative z-20 md:w-[51.3%] md:px-0 px-[4.27vw] md:pt-0 pt-[12.8vw]'>
        <h3
          className={`${
            className || ''
          } max-md:text-[4.8vw] text-[4vw] font-optima font-semibold md:leading-[110%] leading-[120%] capitalize text-textColor`}
        >
          {data?.header}
        </h3>
        <p className='text-justify md:text-[1.125vw] text-[3.733vw] md:mt-[1vw] mt-[2.13vw] md:mb-[2vw] mb-[16.8vw] md:font-manrope font-medium leading-[150%] text-textColor opacity-80'>
          {data?.paragraph}
        </p>
        <button className='md:min-w-[14.3125vw] min-w-[29.6vw] md:h-[3.875vw] h-[10.4vw] md:text-[1vw] text-[3.2vw] md:px-[2.875vw] px-[7.73vw] md:py-[1.25vw] py-[3.2vw] relative z-20 bg-primaryColor md:rounded-xl rounded-lg md:font-semibold font-medium md:font-manrope text-textColor'>
          {data?.button}
        </button>
      </div>

      <Image
        src={subBannerBg2}
        alt='subBannerBg2'
        className='md:w-[64.73%] w-full md:h-[83.28%] h-[64vw] md:absolute relative bottom-0 right-0 z-10 md:rounded-[10px]'
      />
    </section>
  )
}
