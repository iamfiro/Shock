import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../../components/sidebar/sidebar'

const Category: NextPage = () => {
    return (
        <>
        <Head>
            <link
                rel="preload"
                href="/path/to/image.ext"
                as="image"
            />
        </Head>
        <SideBar route='category' />
        </>
    )
}

export default Category
