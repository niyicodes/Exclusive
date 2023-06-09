import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Topnav from '@/components/Topnav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets:['latin'],
  display:"swap",
  variable:'--font-poppins',
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <header>
          <Topnav />
          <Navbar />
        </header>
        <section className='xs:mx-[3%] md:mx-[5%] my-[2.5%]'>
        {children}
        </section>
        <footer className="mt-auto">
        <Footer />
        </footer>
        </body>
    </html>
  )
}
