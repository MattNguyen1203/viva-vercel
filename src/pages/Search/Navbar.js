
import React from 'react'
import locationIcon from '@/assets/images/search/location.svg'
import moneyIcon from '@/assets/images/search/money.svg'
import { Checkbox } from '@mui/material'
import RangeCustom from '@/components/tag/RangeCustom'
import OptionCustomer from '@/components/tag/OptionCustomer'

const Navbar = ({ travelStylesList, dataMenuCountry }) => {
  return (
            <div className='w-[20vw] flex flex-col'>
                <h2 className='text-[1.375vw] leading-[1.5125vw] font-medium mb-[1vw]'>Select your destination:</h2>
                <div className='search-option mb-[1.88vw] pt-[1.5vw] pb-[2vw] w-full px-[1.8vw] border' style={{boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.08)'}}>
                    <h3 className='flex mb-[0.69vw] font-bold text-[1.25vw] leading-[1.64288vw]'>Duration</h3>
                    <div className='flex justify-between mb-[0.94vw]'>
                        <p className='text-[0.875vw] '><span className='font-bold'>Min. </span><span className='font-normal'>1 day</span></p>
                        <p className='text-[0.875vw] leading-[1.4375vw]'><span className='font-bold'>Max. </span><span className='font-normal'>50 days</span></p>
                    </div>
                    <RangeCustom />
                </div>
                <div className='search-option px-[1.8vw] mb-[1.88vw] w-full border pb-[2vw] pt-[1.5vw]' style={{boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.08)'}}>
                    <h3 className='mb-[1.32vw] text-[1.25vw] font-bold'>Travel styles</h3>
                    <div className='flex flex-col justify-center gap-[0.75vw]'>{
                        travelStylesList?.data?.allTourStyle?.nodes?.map(item => (
                            <div className='flex justify-between items-center' key={item?.id}>
                                <div className='flex gap-[0.4375vw] items-center cursor-pointer'>
                                    <Checkbox color='info' id={item?.slug} sx={{color: "#C7D0D9", "& .MuiSvgIcon-root": {fontSize: '1.25vw'}}} className='w-[1.25vw] h-[1.25vw]'/>
                                    <label className='text-[0.875vw] cursor-pointer' for={item?.slug}>{item?.name}</label>
                                </div>
                                <p className='text-[0.875vw] '>{item?.quantity}</p>
                            </div>
                        ))
                    }</div>
                </div>
                <div className='search-option pt-[1.88vw] pb-[1.72vw] px-[1.25vw]' style={{boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.08)'}}>
                    <h3 className='font-medium leading-[1.375vw] mb-[1.05vw] text-[1.25vw]'>Select your information</h3>
                    <div className='mb-[0.94vw]'>
                        <OptionCustomer icon={locationIcon} list={dataMenuCountry?.data?.allCountries?.nodes} defaultValue={'Countries'}/>
                    </div>
                    <div className='mb-[0.94vw]'>
                        <OptionCustomer icon={moneyIcon} defaultValue={'Budget'}/>
                    </div>
                </div>
            </div>
  )
}

export default Navbar