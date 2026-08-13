import "./globals.css";
import Navbar from "@/app/components/Navbar";


export const metadata = {
   title: "CourseHub", 
   description: "A practical Next.js learning website",
  };
   
   export default function RootLayout({
     children,
    }: Readonly<{ children: React.ReactNode }>) { 
      return (
         <html lang="en"> 
         <body> <Navbar />
          {children}
            </body> 
              </html> );
}