import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const CopyRight = ({ className }) => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-accent'>
            <div className={cn(`flex xl:flex-row flex-col justify-between items-center text-center lg:text-start py-7.5 ${className}`)}>
                <p>Designed and Developed By <Link href={"https://themeforest.net/user/themeperch"} className='text-primary-foreground font-medium relative hover-underline after:h-[1px]'>Themeperch</Link></p>
                <p>Copyright: © {currentYear}. All Rights Reserved</p>
            </div>
        </div>

    )
}

export default CopyRight