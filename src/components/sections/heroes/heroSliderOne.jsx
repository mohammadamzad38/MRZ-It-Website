import React from 'react'
import Image from 'next/image'
import PlayIcon from '@/components/ui/playIcon'
import { partnersData } from '@/lib/fackData/partnersData'
import PartnersSlider from '@/components/sections/partnersSlider'

const HeroSliderOne = () => {
    return (
        <div className='pb-2'>
            <div className='lg:max-h-[calc(40rem+2vw)] rounded-[30px] relative overflow-x-hidden overflow-y-hidden'>
                <Image src={'images/banner/hero2-1.jpg'} width={1650} height={757} alt='background image' className='mx-auto lg:rounded-[40px] min-h-[526px] md:min-h-[427px] rounded-2xl object-cover' />
                <PlayIcon playOne={true} />
            </div>
            
            <PartnersSlider data={partnersData.slice(0, 5)} className={"max-w-[1005px] mx-auto lg:-mt-14 -mt-6 z-[3] relative dark:bg-white"} />
        </div>
    )
}

export default HeroSliderOne