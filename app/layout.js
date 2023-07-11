import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
export const metadata = {
  title: 'I&W',
  description: 'Your rental clothing company',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}