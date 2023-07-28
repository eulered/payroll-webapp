import '@/styles/globals.css'
import { Ubuntu } from 'next/font/google'

import PageContent from '@/components/PageContent'
import { ThemeProvider } from '@/components/theme-provider'
import NavBar from '@/components/app-drawer'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${ubuntu.variable} font-sans`}>
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
