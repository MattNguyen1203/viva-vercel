import TourItem from '@/components/Common/TourItem'
import React from 'react'

const SearchResult = ({ text, quantity, data }) => {
  return (
    <div>
      <h2 className='text-[2vw] font-medium leading-[2.2vw] mb-[1.5vw]'>{text}</h2>
      <div className='grid grid-cols-3 gap-[1.5vw]'>
        {data?.map((item, index) =>
          index < quantity ? (
            <TourItem
              key={index}
              data={item}
            />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  )
}

export default SearchResult
