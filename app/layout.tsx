import TabSwitcher from "@/components/TabSwitcher";
import Footer from "@/components/Footer";
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
