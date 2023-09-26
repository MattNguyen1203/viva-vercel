import React from 'react'
import Destination from '@/pages/Destination'
function page({ params: { lang, slug } }) {
  return (
    <div>
      <Destination
        lang={lang}
        slug={slug}
      />
    </div>
  )
}

export default page
