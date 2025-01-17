import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <div className="relative w-full flex item-center justify-center">
        </div>
        {children}
      </body>
    </html>
  );
}
