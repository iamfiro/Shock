import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../../components/sidebar/sidebar'

const Pomodoro: NextPage = () => {
    return (
        <>
        <SideBar route='pomodoro' />
        </>
    )
}

export default Pomodoro
