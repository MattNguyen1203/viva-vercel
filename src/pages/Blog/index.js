'use client'
import BlogItem from '@/components/Common/BlogItem'
import Button from '@/components/Common/Button'
import SlideTour from '@/components/Common/SlideTour'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import FilterBlog from './FilterBlog'
import background from '@/assets/images/ourBlog_background.png'
import Link from 'next/link'
import { GET_ALL_POST_FILTER } from '@/graphql/post/queries'
import { useQuery } from '@apollo/client'

function Index({ data1, lang, initTopic, initDestination, initCategories, allCountries, slug }) {
  const metaTopic = initTopic?.nodes
  const metaDestination = initDestination?.nodes
  const metaCategories = initCategories?.nodes

  const arrayTopicInit = []
  const arrayDesInit = []
  const arrayCateInit = []

  metaTopic?.map((topic, index) => {
    arrayTopicInit.push(topic?.slug)
  })
  metaDestination?.map((des, index) => {
    arrayDesInit.push(des?.slug)
  })

  metaCategories?.map((cate, index) => {
    arrayCateInit.push(cate?.slug)
  })

  const [activePage, setActivePage] = useState(0)
  const [destination, setDestination] = useState(arrayDesInit)
  const [topic, setTopic] = useState(arrayTopicInit)
  const [category, setCategory] = useState(slug)
  const language = lang?.toUpperCase() || 'EN'

  const { data, refetch } = useQuery(GET_ALL_POST_FILTER, {
    variables: {
      language,
      offset: 0,
      size: 2,
      topicSlug: topic,
      categorySlug: category === undefined ? arrayCateInit : category,
      destinationSlug: destination
    }
  })

  const eleRef = useRef()

  useEffect(() => {
    eleRef?.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [activePage])
  const handleChangePage = (index) => {
    setActivePage(index)
    refetch({
      offset: index * 2,
      size: 2
    })
  }
  const allBlogData = data?.posts?.nodes
  // (data)
  const pageInfo = data?.posts?.pageInfo?.offsetPagination?.total
  const totalPage = Math.ceil(pageInfo / 2)

  return (
    <div>
      <div className='content'>
        <h2 className='heading-1 md:pt-[9.755vw] pt-[23.53vw] md:mb-0 mb-[4.27vw]'>
          {data1?.data?.page?.ourblog?.heading1}
        </h2>
        <FilterBlog
          handleDes={(data) => setDestination(data)}
          handleTopic={(data) => setTopic(data)}
          handleCate={(data) => setCategory(data)}
          metaTopic={metaTopic}
          metaDestination={metaDestination}
          metaCategories={metaCategories}
        />
      </div>

      <div className='relative'>
        <Image
          alt='banner'
          src={background}
          fill
          quality={100}
        />
        <div className='grid md:grid-cols-4 md:px-[8.06vw] px-[4.27vw] grid-cols-2 md:gap-x-[2.5vw] md:gap-y-[3vw] gap-x-[4.27vw] gap-y-[6.4vw] md:mt-[4vw] mt-[7.73vw]'>
          {allBlogData?.map((item, index) => (
            <Link
              key={index}
              href={`/${item?.translation?.slug}`}
            >
              <BlogItem data={item?.translation} />
            </Link>
          ))}
        </div>

        <div className='flex md:gap-[0.75vw] gap-[3.2vw] justify-center items-center relative md:mt-[4.5vw] mt-[8.53vw]'>
          {Array.from({ length: totalPage }, (_, index) => (
            <div
              key={index}
              onClick={() => handleChangePage(index)}
              className={`cursor-pointer md:w-[2.125vw] md:h-[2.125vw] w-[9.07vw] h-[9.07vw] rounded-[50%] flex justify-center items-center bg-primaryColor ${
                activePage === index ? 'bg-textColor  opacity-[1]' : ' opacity-[0.1]'
              }`}
            >
              <span className={`${activePage === index ? 'text-white' : 'text-textColor'}`}>{index + 1}</span>
            </div>
          ))}
        </div>

        <h2 className='heading-1 md:mt-[5.25vw] mt-[12.8vw] md:pl-[8.06vw] pl-[4.27vw] mb-[3.5vw]'>
          {data1?.data?.page?.ourblog?.heading2}
        </h2>
        <div className='md:px-[8.06vw]'>
          <SlideTour data={data1?.data?.page?.ourblog?.bestseller} />
        </div>
        <Button className='btn-secondary  m-auto md:mt-[3.5vw] mt-[10.01vw]'>See more</Button>
      </div>
    </div>
  )
}

export default Index
