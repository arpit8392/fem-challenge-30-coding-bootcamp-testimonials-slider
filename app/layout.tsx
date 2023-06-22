import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Coding Bootcamp Testimonials Slider',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS & Tailwind CSS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className=''>
				{children}
			</body>
		</html>
	)
}
