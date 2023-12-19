import './globals.css'

export const metadata = {
  title: 'Motivation Pulse',
  description: 'Get Random Quotes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
