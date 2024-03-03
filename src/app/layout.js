import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'
// import Link
// import Main from './components/main'
import Link from 'next/link'
// import { Inter } from 'next/font/google'
import { Ysabeau_Infant } from 'next/font/google'

// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const ysbeau = Ysabeau_Infant({ subsets: ['latin'], display: 'swap' })
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Skywater',
  description: 'Salt Spring Island Real Estate',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={ysbeau.className}>
        <Header />
        <Nav />

        {/* <main> */}
        {children}
        <SpeedInsights />
        <Analytics />

        {/* </main> */}

        <h2 className='justify-center flex py-4'>
          <Link href="/">Back to home</Link>
        </h2>

        <Footer />

      </body>
    </html>
  )
}
