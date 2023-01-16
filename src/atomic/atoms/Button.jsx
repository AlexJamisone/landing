import SendIcon from '../../icons/SendIcon';
const Button = ({ children, isDesabled, small }) => {
	return (
		<button
			disabled={isDesabled}
			className={`flex py-[9px]  bg-lavender rounded-full mobile:h-[39px] mobile:w-[139px] mobile:text-sm mobile:leading-[21px] web:text-base web:h-[50px] web:w-[188px] tablet:h-[50px] tablet:w-[188px]
			 gap-[9px] font-main text-xs font-semibold justify-center items-center text-white hover:bg-[#6C2BD9] transition-all duration-150 active:border-[3px] active:border-solid border-[#CABFFD] disabled:bg-gray-light disabled:text-gray-dark disabled:active:border-none`
		}
		>
			{children}
			<SendIcon
				className={` ${
					isDesabled
						? 'fill-gray-dark stroke-gray-light'
						: 'fill-white stroke-lavender'
				}`}
			/>
		</button>
	);
};

export default Button;
