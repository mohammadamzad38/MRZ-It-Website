"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import useMoveMentAnimation from '@/hooks/useMoveMentAnimation';
import { partnersData } from '@/lib/fackData/partnersData'
import PartnersSlider from '@/components/sections/partnersSlider'

const HeroSliderThree = () => {
    const [mousPositionX, mousPositionY] = useMoveMentAnimation()

    return (
        <div className='pb-2'>
            <div className='lg:max-h-[calc(40rem+2vw)] bg-[rgba(226,231,255,0.4)] dark:bg-[#1c232a] rounded-[30px] lg:pl-[52px] lg:pr-0 pl-4 pr-4 border-2 border-[rgba(0,31,63,0.05)] overflow-y-hidden overflow-x-hidden relative'>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                    {/* ----- left side start */}
                    <div className='lg:pt-[3rem] lg:pb-[3rem] pt-15 pb-15.5'>
                        <Title size={'7.5xl'} className={"max-w-[754px]"}>Redefining Excellence in Digital Marketing</Title>
                        <p className='font-semibold max-w-[689px] pt-7.5'>Choose NextPro as your digital marketing agency and propel ur business to new heights with our award-winning digital marketing services.</p>
                        <div className='flex sm:flex-row flex-col sm:items-center pt-[34px] lg:pt-[55px]'>
                            <Button asChild>
                                <Link href="/pricing"> Start Free Trial </Link>
                            </Button>
                        </div>
                    </div>
                    {/* ----- left side end */}
    
                    <div className='relative hidden lg:flex lg:justify-end'>
                        <Image className='object-cover' src={'/images/banner/hero-img8-1.png'} width={668} height={678} alt='hero image' />
                    </div>
                </div>
            </div>
            <PartnersSlider data={partnersData.slice(0, 5)} className={"max-w-[1005px] mx-auto lg:-mt-14 -mt-6 z-[3] relative dark:bg-white"} />
        </div>
    )
}

export default HeroSliderThree