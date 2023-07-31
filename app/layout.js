import './globals.css';

export const metadata = {
  title: 'graces',
  description: 'coming soon!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
