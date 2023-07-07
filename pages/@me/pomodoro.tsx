import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../../components/sidebar/sidebar'

const Pomodoro: NextPage = () => {
    return (
        <>
        <Head>
            <link
                rel="preload"
                href="/path/to/image.ext"
                as="image"
            />
        </Head>
        <SideBar route='pomodoro' />
        </>
    )
}

export default Pomodoro
