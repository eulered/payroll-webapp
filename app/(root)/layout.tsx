import '@/styles/globals.css'
import { Ubuntu, Roboto, Poppins } from 'next/font/google'

import PageContent from '@/components/PageContent'
import { ThemeProvider } from '@/components/theme-provider'
import NavBar from '@/components/app-drawer'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${roboto.variable} ${ubuntu.variable} ${poppins.variable} font-roboto`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <div className="flex">
            <PageContent>{children}</PageContent>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
