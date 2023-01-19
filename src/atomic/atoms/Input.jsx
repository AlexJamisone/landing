import React, { useState } from 'react';
import MailIcon from '../../icons/MailIcon';
import ErrorIcon from '../../icons/ErrorIcon';
import PersonIcon from '../../icons/PersonIcon';
const Input = ({
	labelFild,
	typeInput,
	placeholderField,
	value,
	isDesabled,
	textarea,
	classNameTextAr,
	className,
	mailIcon,
	required,
}) => {
	const [focused, setFocused] = useState(false);
	const [error, setError] = useState(false);
	const onFocus = () => setFocused(true);
	const onBlur = () => setFocused(false);

	const handlChange = (e) => {
		const string = e.target.value;
		string.length <= 0 ? setError(true) : setError(false);
	};
	return (
		<div className={`flex flex-col mb-4 ${className}`}>
			<label
				htmlFor="input"
				className={`${
					required
						? `after:content-['*'] after:ml-1 after:text-red`
						: `after:content-none`
				} font-main font-semibold text-black mobile:text-subtitle/body-mobile-sm mobile:leading-body-mobile mb-2`}
			>
				{labelFild}
			</label>
			{textarea ? (
				<textarea
					disabled={isDesabled}
					className={`w-full h-full rounded-2xl mobile:text-sm mobile:leading-body-mobile bg-white border-gray-light border-solid border px-5 py-3 resize-none hover:border-lavender transition-all duration-100 placeholder-shown:outline-none outline-lavender placeholder:text-gray-dark placeholder:font-normal font-main disabled:bg-gray-light disabled:hover:border-gray-light z-10 ${classNameTextAr}`}
					placeholder={placeholderField}
					value={value}
				></textarea>
			) : (
				<div className="relative">
					{error ? (
						<>
							<ErrorIcon
								className={`absolute top-1/4 ml-5 fill-red w-6 h-6`}
							/>
							<span className="absolute -bottom-5 text-sm mobile:text-xs font-main font-semibold text-red leading-5">
								Please fill this mandatory field
							</span>
						</>
					) : //Think how can I do this better
					mailIcon ? (
						<MailIcon
							className={`absolute top-1/4 ml-5 ${
								focused ? 'fill-lavender' : 'fill-gray-dark'
							} w-6 h-6`}
						/>
					) : (
						<PersonIcon
							className={`absolute top-1/4 ml-5 ${
								focused
									? 'fill-lavender stroke-lavender'
									: 'fill-gray-dark stroke-gray-dark'
							} w-6 h-6`}
						/>
					)}

					<input
						disabled={isDesabled}
						id="input"
						type={typeInput}
						className={`w-full px-14 py-3 bg-white rounded-2xl mobile:h-[50px] mobile:text-subtitle/body-mobile-sm mobile:leading-body-mobile border border-solid  text-black  placeholder:text-gray-dark placeholder:font-normal font-main  transition-all duration-150 placeholder-shown:outline-none outline-lavender disabled:border-gray-light disabled:bg-gray-light ${
							error
								? 'border-red hover:border-red'
								: 'border-gray-light hover:border-lavender'
						}`}
						placeholder={placeholderField}
						onFocus={onFocus}
						onBlur={onBlur}
						value={value}
						onChange={handlChange}
					/>
				</div>
			)}
		</div>
	);
};

export default Input;
