'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { createTheme, useMediaQuery } from '@mui/material'
import { useQuery } from '@apollo/client'
import TourItem from '@/components/Common/TourItem'
import TourItemMobile from '@/components/Common/TourItemMobile'
import Button from '@/components/Common/Button'
import FilterTour from '@/components/Common/FilterTour'
import imgTour from '@/assets/images/img-more.png'
import { DATA_BEST_TOUR } from '@/graphql/filter/queries'

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 768
    }
  }
})
function TourSlide({
  lang,
  slug,
  tourStyleName,
  dataTaxonomiesCountry,
  dataTaxonomiesStyleTour,
  dataTaxonomiesBudget,
  dataTaxonomiesDuration
}) {
  let totalPage = useRef(0)
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [activePage, setActivePage] = useState(1)
  const arrDataTaxonomiesBudget = dataTaxonomiesBudget?.data?.allBudget?.nodes
  const arrDataTaxonomiesDuration = dataTaxonomiesDuration?.data?.allDuration?.nodes
  const arrDataTaxonomiesCountry = dataTaxonomiesCountry?.data?.allCountries?.nodes
  const arrDataTaxonomiesStyleTour = dataTaxonomiesStyleTour?.data?.allTourStyle?.nodes
  const arrSlugTaxonomiesCountry = handleTaxonomiesSlug(arrDataTaxonomiesCountry)
  const arrSlugTaxonomiesStyleTravel = handleTaxonomiesSlug(arrDataTaxonomiesStyleTour)
  const [destination, setDestination] = useState(arrSlugTaxonomiesCountry)
  const [travelStyle, setTravelStyle] = useState(slug || '')
  const [budget, setBudget] = useState(null)
  const [duration, setDuration] = useState(null)
  const lng = lang?.toUpperCase()

  const dataBestTours = useQuery(DATA_BEST_TOUR, {
    variables: {
      language: lng,
      countrySlug: destination === '' ? arrSlugTaxonomiesCountry : destination,
      styleTourSlug: travelStyle === '' ? arrSlugTaxonomiesStyleTravel : travelStyle
    }
  })
  var allTours = dataBestTours?.data?.allTours?.nodes
  if (budget) {
    allTours = allTours?.filter((tour) => {
      let priceTour = tour?.translation?.tourDetail?.priceTour
      if (!priceTour) priceTour = 1000
      const arrBudget = budget.split('-')
      const minBudget = arrBudget[0]
      const maxBudget = arrBudget[1]
      return priceTour >= +minBudget && priceTour <= +maxBudget
    })
  }
  if (duration) {
    allTours = allTours?.filter((tour) => {
      let numTour = tour?.translation?.tourDetail?.numberDay
      if (!numTour) numTour = 3
      const arrDuration = duration.split('-')
      const minDay = arrDuration[0]
      const maxDay = arrDuration[1]
      return numTour >= +minDay && numTour <= +maxDay
    })
  }

  function handleTaxonomies(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item)
    })
    return newArrDataTaxonomies
  }
  function handleTaxonomiesSlug(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item?.slug)
    })
    return newArrDataTaxonomies
  }
  const newArrDataTaxonomiesCountry = handleTaxonomies(arrDataTaxonomiesCountry)
  const newArrDataTaxonomiesStyleTravel = handleTaxonomies(arrDataTaxonomiesStyleTour)
  const newArrDataTaxonomiesBudget = handleTaxonomies(arrDataTaxonomiesBudget)
  const newArrDataTaxonomiesDuration = handleTaxonomies(arrDataTaxonomiesDuration)
  // =================================================================

  const dataFilter = {
    countries: newArrDataTaxonomiesCountry,
    style: newArrDataTaxonomiesStyleTravel,
    budget: newArrDataTaxonomiesBudget,
    duration: newArrDataTaxonomiesDuration
  }

  const size = onlySmallScreen ? 12 : 8
  // (allTours)
  totalPage.current = onlySmallScreen ? Math.ceil(allTours?.length / size) : Math.ceil(allTours?.length / size)
  const pagis = new Array(totalPage.current || 0).fill(0)
  return (
    <div className='best-tours pt-[8.13vw]'>
      <div className='max-md:pl-[4.27vw] pl-[8.125vw] '>
        <h2 className='heading-1'>{tourStyleName}</h2>
        <div className='bg-white mt-[1vw] w-max rounded-[1.125vw] px-[2.38vw] py-[1.19vw] max-md:mt-[4.27vw] max-md:p-0 max-md:bg-transparent max-md:w-full'>
          <FilterTour
            dataFilter={dataFilter}
            onSelectDes={(data) => setDestination(data)}
            onSelectStyle={(data) => setTravelStyle(data)}
            onSelectBudget={(data) => setBudget(data)}
            onSelectDuration={(data) => setDuration(data)}
            travelStyleSlug={slug}
          />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-[2.5vw] mt-[1.88vw] max-md:grid-cols-1 w-[83.75%] ml-auto mr-auto max-md:w-full'>
        {allTours?.slice(size * (activePage - 1), size * activePage).map((tour, index) => (
          <div key={index}>
            <div className='max-md:hidden'>
              <TourItem data={tour} />
            </div>
            <div className='hidden max-md:block'>
              <TourItemMobile data={tour} />
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className='flex md:gap-[0.75vw] gap-[3.2vw] justify-center items-center relative md:mt-[4.5vw] mt-[8.53vw]'>
        {totalPage.current > 1 &&
          pagis?.map((page, index) => (
            <div
              key={index}
              onClick={() => setActivePage(index + 1)}
              className={`cursor-pointer md:w-[2.125vw] md:h-[2.125vw] w-[9.07vw] h-[9.07vw] rounded-[50%] flex justify-center items-center bg-primaryColor ${
                activePage === index + 1 ? 'bg-textColor  opacity-[1]' : 'opacity-[0.5]'
              }`}
            >
              <span className={`${activePage === index + 1 ? 'text-white' : 'text-textColor'}`}>{index + 1}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TourSlide
