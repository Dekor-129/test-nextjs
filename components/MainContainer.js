import Head from 'next/head'
import A from './A'
export default function MainContainer({ children, keywords }) {
  return (
    <>
        <Head>
            <meta keywords={"Dekor129, NextJS, " + keywords}></meta>
            <title>Home Page</title>
        </Head>
        <div className='navbar'>
            <A href={'/'} text={'Home page'} />
            <A href={'/users'} text={'Users page'} />
        </div>
        <div>
            {children}
        </div>
        <style jsx>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;

                }
            `}
        </style>
    </>
  )
}
