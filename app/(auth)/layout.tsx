import '@/styles/globals.css'
import { Ubuntu, Roboto, Poppins } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${roboto.variable} ${poppins.variable} font-roboto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-center p-0 m-0">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
