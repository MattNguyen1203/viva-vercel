'use client'
import React, { useState } from 'react'
import Banner from './Banner'
import Surveys from './Surveys'
import InspectionTrip from './InspectionTrip'
import BestTour from './BestTour'
import TravelStyle from './TravelStyle/TravelStyle'
import TouristRepresentative from './Representative/TouristRepresentative'
import Review from './Reviews/Review'
import BookingProcessSteps from '@/components/Common/BookingProcessSteps'
import TravelStyleMb from './TravelStyle/TravelStyleMb'
import AboutVideo from '@/components/Common/Video'
import OurBlogHomePage from '@/components/Common/OurBlogHomePage'
import imgVideo from '@/assets/images/banner-videohome.png'

import { useQuery } from '@apollo/client'
import { DATA_BEST_TOUR } from '@/graphql/filter/queries'
import { RssFeed } from '@mui/icons-material'
export default function Home({
  data,
  lang,
  dataTaxonomiesCountry,
  dataTaxonomiesStyleTour,
  nextStep,
  dataTaxonomiesBudget,
  dataTaxonomiesDuration
}) {
  const arrDataTaxonomiesBudget = dataTaxonomiesBudget?.data?.allBudget?.nodes
  const arrDataTaxonomiesDuration = dataTaxonomiesDuration?.data?.allDuration?.nodes
  const arrDataTaxonomiesCountry = dataTaxonomiesCountry?.data?.allCountries?.nodes
  const arrDataTaxonomiesStyleTour = dataTaxonomiesStyleTour?.data?.allTourStyle?.nodes
  const arrSlugTaxonomiesCountry = handleTaxonomiesSlug(arrDataTaxonomiesCountry)
  const arrSlugTaxonomiesStyleTravel = handleTaxonomiesSlug(arrDataTaxonomiesStyleTour)
  const [destination, setDestination] = useState(arrSlugTaxonomiesCountry)
  const [travelStyle, setTravelStyle] = useState(arrSlugTaxonomiesStyleTravel)
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

  if (!data) {
    return <p>Loading....</p>
  }
  const finalData = data?.data?.page?.home

  const header = finalData?.header
  const banner = finalData?.Banner
  const survey = finalData?.survey
  const inspection = finalData?.inspectionTrip
  const representative = finalData?.representative
  const customerReview = finalData?.customerReview
  const aboutVideo = finalData?.video
  const travelStyleList = finalData?.travelStyle
  const blog = finalData?.blogs
  const nextStepBookTour = nextStep?.data?.page?.translation?.aboutUsReviews?.steps

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

  return (
    <div>
      <Banner
        data={banner}
        dataFilter={dataFilter}
      />
      <div className='body-wrapper'>
        <div className='style-mb'>
          <TravelStyleMb data={travelStyleList} />
        </div>
        <div className='survey-wrapper'>
          <Surveys data={survey} />
        </div>
        <div className='trip-wrapper'>
          <InspectionTrip data={inspection} />
        </div>
        <div className='bg-home34'>
          <BestTour
            dataFilter={dataFilter}
            onDestination={(data) => setDestination(data)}
            onTravelStyle={(data) => setTravelStyle(data)}
            onBudget={(data) => setBudget(data)}
            onDuration={(data) => setDuration(data)}
            allTours={allTours}
          />
          <TravelStyle data={travelStyleList?.travelStyleList} title={travelStyleList?.title} desc={travelStyleList?.desc}/>
        </div>
        <div className='represent-wrapper'>
          <TouristRepresentative data={representative} />
        </div>
        <AboutVideo data={aboutVideo} />
        <div className='review-wrapper'>
          <Review data={customerReview} />
        </div>
        <div className='relative bg-home67'>
          <div className='pt-[8.62vw]'>
            <BookingProcessSteps data={nextStepBookTour} />
          </div>
          <div className='pt-[7.31vw]'>
            <OurBlogHomePage data={blog} />
          </div>
          <div className='absolute bottom-0 left-0 right-0 bg-overlayBanner2 h-[6.62vw] max-md:hidden'></div>
        </div>
      </div>
    </div>
  )
}
