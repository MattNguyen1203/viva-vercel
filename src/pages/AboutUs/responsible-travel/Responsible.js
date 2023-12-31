import React from 'react'
import Image from 'next/image'
import responsibleBg from '@/assets/images/about/responsibleBg.png'

export default function Responsible({ data = {} }) {
  return (
    <section className='relative pb-[7.5vw] rounded-2xl md:rounded-none mt-[-7.2vw] bg-white z-10 md:mt-0'>
      <Image
        src={responsibleBg}
        alt='Responsible Travel'
        className='absolute top-0 left-0 w-full h-full'
      />

      <div className='content'>
        {/* title */}
        <div className='text-textColor md:w-[65vw] m-auto md:mb-[5.25vw] mb-[21.87vw] md:pt-[6.125vw] pt-[13.6vw] text-center'>
          <h2 className='md:text-[4vw] text-[4.8vw] font-optima font-semibold md:leading-[110%] leading-[120%] capitalize mb-[1vw]'>
            {data?.title}
          </h2>
          <div className='md:w-[80%] md:font-manrope leading-[150%] md:text-[1.125vw] text-[3.733vw] opacity-80 text-center m-auto'>
            {data?.desc}
          </div>
        </div>

        {/* main content */}

        <div className='flex flex-col md:gap-[6.5vw] gap-[9.07vw]'>
          {data?.posts?.map((post, index) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 !== 0 && 'md:flex-row-reverse'
                } md:flex justify-between gap-[4.6875vw] items-end`}
              >
                <main className='capitalize mb-[6.4vw] md:mb-0'>
                  <div className='text-primaryColor md:text-[6vw] text-[17.07vw] leading-[110%] font-optima font-semibold opacity-60'>
                    {index < 10 ? `0${index + 1}` : index}
                  </div>
                  <h3 className='text-textColor md:text-[2.5vw] text-[4.27vw] font-optima font-semibold md:leading-[110%] leading-[120%] md:mb-[2vw] mb-[4.27vw]'>
                    {post.title}
                  </h3>
                  <p className='text-textColor md:text-[1.125vw] text-[3.733vw] md:font-medium leading-[150%] md:font-manrope opacity-80'>
                    {post.content}
                  </p>
                </main>

                <Image
                  src={post?.image?.sourceUrl}
                  alt={post?.image?.altText}
                  width={1000}
                  height={1000}
                  className='md:w-[35.93vw] w-full md:h-[35.93vw] h-[91.47vw]'
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
