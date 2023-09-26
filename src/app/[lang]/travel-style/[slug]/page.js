import React from 'react'
import Travel from '@/pages/TravelStyle'
function page({ params: { lang, slug } }) {
  return (
    <div>
      <Travel lang={lang} slug={slug}/>
    </div>
  )
}

export default page
