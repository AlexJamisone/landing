import { HiMail } from 'react-icons/hi';
import { MdOutlineError } from 'react-icons/md';
import { useState } from 'react';
const Input = ({
	labelFild,
	typeInput,
	placeholderField,
	value,
	isDesabled,
	textarea,
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
		<div className="flex flex-col">
			<label htmlFor="input" className="mb-2">
				<span className="after:content-['*'] after:ml-0.5 after:text-red font-main font-semibold text-black">
					{labelFild}
				</span>
			</label>
			{textarea ? (
				<textarea
					disabled={true}
					className="w-[677px] h-[122px] rounded-2xl bg-white border-gray-light border-solid border px-5 py-3 resize-none hover:border-lavender transition-all duration-100 placeholder-shown:outline-none outline-lavender placeholder:text-gray-dark placeholder:font-normal font-main disabled:bg-gray-light disabled:hover:border-gray-light"
					placeholder={placeholderField}
					value={value}
				></textarea>
			) : (
				<div className="relative">
					{error ? (
						<>
							<MdOutlineError
								className={`absolute top-1/4 ml-5 fill-red w-6 h-6`}
							/>
							<span className="absolute -bottom-5 text-sm font-main font-semibold text-red leading-5">
								Please fill this mandatory field
							</span>
						</>
					) : (
						<HiMail
							className={`absolute top-1/4 ml-5 ${
								focused ? 'fill-lavender' : 'fill-gray-dark'
							} w-6 h-6`}
						/>
					)}

					<input
						disabled={isDesabled}
						id="input"
						type={typeInput}
						className={`px-14 py-3 bg-white rounded-2xl border border-solid  text-black  placeholder:text-gray-dark placeholder:font-normal font-main  transition-all duration-150 placeholder-shown:outline-none outline-lavender disabled:border-gray-light disabled:bg-gray-light ${
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
