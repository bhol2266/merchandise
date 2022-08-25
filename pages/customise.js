import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'

//Three components of customise page
import Preview_Edit from '../components/customise/Preview_Edit'
import Publish from '../components/customise/Publish'
import PublishedProducts from '../components/customise/publishedProducts'






const Customise = () => {




    return (
        <div className='mx-[14px] lg:mx-[50px] my-[15px]'>


            <Preview_Edit />





        </div>
    )
}


export default Customise