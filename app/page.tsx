'use client'

import Swiper from '@/components/Swiper'
import Testimonial from '@/components/Testimonial'
import { testimonialsData } from '@/data'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [index, setIndex] = useState(0)

	const previous = () => {
		const isFirstSlide = index === 0
		const newIndex = isFirstSlide ? testimonialsData.length - 1 : index - 1
		setIndex(newIndex)
	}

	const next = () => {
		const isLastSlide = index === testimonialsData.length - 1
		const newIndex = isLastSlide ? 0 : index + 1
		setIndex(newIndex)
	}

	return (
		<main className='grid min-h-screen place-content-center overflow-x-hidden '>
			<div className='fixed inset-0 -z-50 bg-patternCurve bg-contain bg-left-bottom bg-no-repeat md:bg-auto' />
			<section className='md:px-40 md:py-12'>
				<div className='flex flex-col items-center justify-center gap-20 md:flex-row md:gap-0'>
					<div className='relative md:order-1 md:translate-x-1/2'>
						<div className='absolute inset-0 bg-patternBg bg-contain bg-no-repeat' />
						<div className='relative m-8 md:h-[540px] md:w-[540px]'>
							<Image
								src={`/images/${testimonialsData[index].image}`}
								alt={testimonialsData[index].author}
								width={540}
								height={540}
								priority
								className='z-10 h-full w-full rounded-lg object-contain'
							/>
							<div className='absolute bottom-0 z-30 translate-x-20 translate-y-1/2 md:translate-x-1/2 '>
								<Swiper handlePreviousClick={previous} handleNextClick={next} />
							</div>
						</div>
					</div>

					<div className='relative z-50 md:absolute md:left-0 md:px-40'>
						<div className='absolute inset-0 -z-50 -translate-y-1/3 translate-x-1/3 bg-patternQuotes bg-no-repeat md:-translate-y-1/4 md:translate-x-1/4' />
						<Testimonial {...testimonialsData[index]} />
					</div>
				</div>
			</section>
		</main>
	)
}
