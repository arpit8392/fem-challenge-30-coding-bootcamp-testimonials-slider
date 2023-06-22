const Testimonial = ({ testimony, author, position }: Testimony) => {
	return (
		<div className='flex max-w-sm flex-col gap-5 text-center md:text-left lg:max-w-2xl	'>
			<blockquote className='text-lg font-extralight text-indigo-950 md:text-[32px]/[44px]'>
				{`“ ${testimony} ”`}
			</blockquote>
			<div className='flex flex-col items-center md:flex-row md:gap-2'>
				<h1 className='font-bold text-indigo-950 md:text-xl'>{author}</h1>
				<h2 className='font-medium text-slate-300 md:text-xl'>{position}</h2>
			</div>
		</div>
	)
}
export default Testimonial
