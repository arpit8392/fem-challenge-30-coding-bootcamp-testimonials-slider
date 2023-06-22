type Props = {
	handlePreviousClick: () => void
	handleNextClick: () => void
}

const Swiper = ({ handlePreviousClick, handleNextClick }: Props) => {
	return (
		<div className='flex w-20 items-center justify-between rounded-full bg-white px-3 py-4 shadow-lg md:w-32 md:px-6 md:py-5'>
			<button onClick={handlePreviousClick}>
				<svg
					focusable={false}
					aria-hidden={true}
					xmlns='http://www.w3.org/2000/svg'
					width='12'
					height='18'>
					<path
						fill='none'
						stroke='#8585AC'
						strokeWidth='3'
						d='M11 1L3 9l8 8'
					/>
				</svg>
				<span className='sr-only'>Previous</span>
			</button>
			<button onClick={handleNextClick}>
				<svg
					aria-hidden={true}
					focusable={false}
					xmlns='http://www.w3.org/2000/svg'
					width='13'
					height='18'>
					<path fill='none' stroke='#8585AC' strokeWidth='3' d='M2 1l8 8-8 8' />
				</svg>
				<span className='sr-only'>Next</span>
			</button>
		</div>
	)
}
export default Swiper
