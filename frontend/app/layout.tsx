"use client";


import './globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   
      <html lang="en">
        <title>TravelerConnect</title>
        <body>{children}</body>
      </html>
 
  );
}
