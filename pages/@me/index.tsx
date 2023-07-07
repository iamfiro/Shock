import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../../components/sidebar/sidebar'

const Me: NextPage = () => {
    return (
        <>
        <Head>
            <link
                rel="preload"
                href="/path/to/image.ext"
                as="image"
            />
        </Head>
        <SideBar route='index'/>
        </>
    )
}

export default Me
