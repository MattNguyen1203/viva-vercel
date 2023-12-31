import banner from '@/assets/images/banner.png'
import searchIcon from '@/assets/images/search-normal.svg'
import FilterTour from '@/components/Common/FilterTour'
import Image from 'next/image'
import Link from 'next/link'

function Banner({ data, dataFilter }) {
  return (
    <div className='h-[100vh] relative banner max-lg:h-[84.8vw]'>
      <div className='relative z-40 wrapper-banner'>
        <h1 className='font-viva text-[9.375vw] heading-banner max-md:text-[12.125vw]'>
          ASIA <span className='block'>VIVA TRAVEL</span>
        </h1>
        <h2 className='text-[#fff] text-center text-[2.25vw] leading-[1.2] capitalize max-md:text-[3.73vw]'>
          {data?.text}
        </h2>
        <div className='filter-tour flex gap-x-[1.75vw] ml-auto mr-auto mt-[3.06vw] bg-white w-max py-[1.5vw] pl-[2.87vw] pr-[2vw] rounded-[1.125vw] max-lg:hidden'>
          <FilterTour dataFilter={dataFilter} />
          <Link
            href={`/search`}
            className='btn-primary'
          >
            <Image
              src={searchIcon}
              width={50}
              height={50}
              alt='search'
              className='w-[1.25vw] h-[1.25vw]'
            />
            Search
          </Link>
        </div>
        <div className='explore flex flex-col gap-[0.54vw] items-center mt-[2.88vw] cursor-pointer w-max ml-auto mr-auto max-md:mt-[4.27vw]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='14'
            viewBox='0 0 13 14'
            fill='none'
            className='w-[1.375vw] h-[1.375vw] arrow-down max-md:w-[3.2vw] max-md:h-[3.2vw]'
          >
            <g opacity='0.8'>
              <path
                d='M0.5 0.530273L6.5 6.53027L12.5 0.530273'
                stroke='#000'
              />
              <path
                d='M0.5 6.53027L6.5 12.5303L12.5 6.53027'
                stroke='#000'
              />
            </g>
          </svg>
          <span className='uppercase text-[0.875vw] max-md:hidden'>Explore now</span>
        </div>
      </div>
      <Image
        src={banner}
        width={1600}
        height={1000}
        alt='banner'
        priority
        className='absolute inset-0 object-cover w-full h-full'
      />
      <div className='overlay-banner max-md:hidden'></div>
      <div
        className='absolute inset-0 hidden max-md:block'
        style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.44%, rgba(0, 0, 0, 0.35) 69.74%)' }}
      ></div>
    </div>
  )
}

export default Banner
