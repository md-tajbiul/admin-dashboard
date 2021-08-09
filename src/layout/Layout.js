import Head from 'next/head'
import Main from '../components/Main'
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap" rel="stylesheet" />
            </Head>
            <Main>
                {children}
            </Main>
        </>
    )
}

export default Layout
