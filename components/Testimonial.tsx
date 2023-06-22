const Testimonial = ({ testimony, author, position }: Testimony) => {
	return (
		<div className='flex max-w-sm flex-col gap-5 text-center md:max-w-2xl md:text-left	'>
			<blockquote className='text-lg font-extralight text-darkBlue md:text-[32px]/[44px]'>
				{`“ ${testimony} ”`}
			</blockquote>
			<div className='flex flex-col items-center md:flex-row md:gap-2'>
				<h1 className='font-bold text-darkBlue md:text-xl'>{author}</h1>
				<h2 className='font-medium text-grayishBlue md:text-xl'>{position}</h2>
			</div>
		</div>
	)
}
export default Testimonial
