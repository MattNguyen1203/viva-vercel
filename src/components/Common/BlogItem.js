import calendar from '@/assets/images/calendar_blogItem.svg'
import Image from 'next/image'

function BlogItem({ className, data }) {
  return (
    <div className={className}>
      <div className='relative image'>
        <Image
          src={data?.featuredImage?.node?.sourceUrl || data?.translation?.featuredImage?.node?.sourceUrl}
          width={1000}
          height={1000}
          alt='img'
          className='md:h-[16.3125vw] h-[43.73333vw]  md:w-[19.0625vw] w-[43.73333vw] object-cover md:rounded-[0.5vw] rounded-[2.13333vw]'
        />
        <span className='absolute md:top-[1.62vw] top-[3.69vw] md:left-[-0.375vw] left-[-1.67vw] md:px-[1vw] md:py-[0.25vw] px-[4.27vw] py-[1.07vw] bg-primaryColor md:text-[0.75vw] text-[2.66667vw] font-[500] rounded-r-[0.25vw] tip-review'>
          {data?.blogdetail?.subtitle1}
        </span>
      </div>
      <div className='flex items-center md:gap-x-[0.64vw] gap-x-[1.07vw] mt-[2.67vw] md:mt-[1vw] info'>
        <Image
          src={calendar}
          width={100}
          height={100}
          alt='calendar'
          className='md:w-[0.84375vw] opacity-60 w-[2.4vw] h-[2.66667vw] md:h-[0.9375vw] object-cover'
        />
        <span className='md:text-[0.875vw] opacity-60 text-[2.66667vw] leading-none'>{data?.blogdetail?.time}</span>
      </div>
      <h4 className='md:text-[1.25vw] text-[3.73333vw] line-clamp-2 font-[700] leading-[1.4] md:mt-[0.78vw] mt-[1.07vw] title'>
        {data?.title}
      </h4>
      <p
        className='md:text-[0.875vw] text-ellipsis line-clamp-2 opacity-60 text-[2.66667vw] font-[500] desc leading-normal md:mt-[0.5vw] mt-[1.07vw]'
        dangerouslySetInnerHTML={{ __html: `${data?.excerpt}` }}
      ></p>
    </div>
  )
}

export default BlogItem
