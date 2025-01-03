import './globals.css';

export const metadata = {
  title: 'My E-commerce App',
  description: 'A beginner-friendly e-commerce site built with Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}