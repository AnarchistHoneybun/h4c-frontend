import TabSwitcher from "@/components/TabSwitcher";
import Footer from "@/components/Footer";
import DrawerTrial from "@/components/DrawerTrial";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <div className="absolute top-0 right-0 m-5"><DrawerTrial /></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TabSwitcher className="mb-4" />
          
           <div className="min-h-[75vh]">
            {children}
           </div>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
