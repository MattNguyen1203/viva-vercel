import React from 'react'
import BlogDetail from '@/pages/BlogDetail'
function page({ params: { lang, slug } }) {
  return <BlogDetail lang={lang} slug={slug} />
}

export default page
