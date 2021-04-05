import React from 'react'
import {Rooms} from './Rooms'
import {Members} from './Members' 
import {Header} from './Header'
export const WelcomePage = () => {
    return (
        <div className='welcomePage'>
            <Header/>
            <Rooms/>
            <Members/>
        </div>
    )
}
