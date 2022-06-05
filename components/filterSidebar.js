import React from 'react'
import { XIcon } from '@heroicons/react/outline'

export const FilterSidebar = () => {
    return (
        <div className='px-13px pb-[16px] w-[375px]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[14px] font-inter text-[#323232]'>FILTER</h1>
                <XIcon className='w-[20px] h-[20px]' />
            </div>

            <div>
                <details>
                    <summary>Details</summary>
                    Something small enough to escape casual notice.
                </details>
            </div>

        </div>
    )
}
