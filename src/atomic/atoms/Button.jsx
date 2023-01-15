import SendIcon from '../../icons/SendIcon';
const Button = ({ children, isDesabled }) => {
	return (
		<button
			disabled={isDesabled}
			className="flex py-3 px-6 bg-lavender rounded-full gap-3 font-main text-xs font-semibold justify-center items-center text-white leading-6 hover:bg-[#6C2BD9] transition-all duration-150 active:border-[3px] active:border-solid border-[#CABFFD] disabled:bg-gray-light disabled:text-gray-dark disabled:active:border-none "
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
