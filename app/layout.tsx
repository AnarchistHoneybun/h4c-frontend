import TabSwitcher from '@/components/TabSwitcher'
import Footer from '@/components/Footer'
import { ThemeProvider } from "@/components/theme-provider"
import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className="flex flex-col min-h-screen">
          <TabSwitcher />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}