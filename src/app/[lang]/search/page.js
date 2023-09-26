import Navbar from '@/pages/Search/Navbar'
import NewRelease from '@/pages/Search/NewRelease'
import SearchResult from '@/pages/Search/SearchResult'
import Image from 'next/image'
import warningIcon from '@/assets/images/search/warning.svg'
import PagingCustom from '@/components/Common/PagingCustom'
import getDataPost from '@/data/getDataPost'
import { GET_TOUR_FILTER } from '@/graphql/search/queries'
import { GET_ALL_POST } from '@/graphql/post/queries'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'
import { GET_LIST_TRAVEL_STYLE_NAME } from '@/graphql/travelStyle/queries'
import { DATA_MENU_COUNTRY } from '@/graphql/country/queries'

const  Search = async ({ params: { lang } }) => {
  const resListTour = await getDataPost(lang, GET_TOUR_FILTER)
  const resListBlog = await getDataPost(lang, GET_ALL_POST)
  const travelStylesList = await getDataWithTaxonomy({ lang: lang || 'EN' }, GET_LIST_TRAVEL_STYLE_NAME)
  const dataMenuCountry = await getDataPost(lang, DATA_MENU_COUNTRY)
  return (
    <div className='content mt-[6vw]'>
      <h1 className='text-[4vw] font-optima leading-[4.4vw] capitalize font-semibold mb-[3.44vw]'>our packages</h1>
      <div className='search flex gap-[3.56vw]'>
        <Navbar lang={lang} travelStylesList={travelStylesList} dataMenuCountry={dataMenuCountry}/>
        {true ? (
          <div>
            <SearchResult
              data={resListTour?.data?.allTours?.nodes}
              quantity={9}
            />
            <PagingCustom />
          </div>
        ) : (
          <div>
            <div className='w-[100%] rounded-[0.5vw] h-[4.4375vw] bg-gradient-to-b from-[#FFF9DF] to-[#FFF1BC] pl-[2.44vw] flex items-center mb-[2.63vw]'>
              <Image
                src={warningIcon}
                alt='warningIcon'
                className='mr-[1.8vw]'
              />
              <p className='text-[1.5vw] font-medium leading-[1.65vw]'>No results for this search</p>
            </div>
            <SearchResult
              data={resListTour?.data?.allTours?.nodes}
              quantity={6}
              text={'You may also like:'}
            />
          </div>
        )}
      </div>
      {true && <NewRelease listBlog={resListBlog?.data?.posts?.nodes} />}
    </div>
  )
}

export default Search
