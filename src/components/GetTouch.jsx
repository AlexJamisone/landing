import Input from '../atomic/atoms/Input';
import Button from '../atomic/atoms/Button';
import Subtitle from '../atomic/atoms/Subtitle';

const GetTouch = () => {
	return (
		<section className="mobile:min-h-[753px] overflow-hidden bg-gradient-to-t from-[#32ABFD] to-[#FEB77F] flex justify-center font-main">
			<div className="bg-[#fff] mobile:my-16 mobile:mx-[10px] mobile:max-w-[300px] rounded-2xl">
				<form className='mobile:my-[48px] mobile:mx-[21px] flex flex-col items-start'>
					<Subtitle
						content={'Let’s discuss your project'}
						className={'text-center mobile:mb-9 mobile:min-w-max'}
						h2={true}
					/>
					<Input
						required={true}
						labelFild={'Your full name'}
						placeholderField={'Name Surname'}
						className={'mobile:mb-[25px]'}
					/>
					<Input
						required={true}
						mailIcon={true}
						labelFild={'Your email'}
						placeholderField={'name@example.com'}
						className={''}
					/>
					<Input

						textarea={true}
						labelFild={'Tell me about your project'}
						placeholderField={
							'Add here a general description of your idea and target aim'
						}
						className={'mobile:mb-9 mobile:mt-[37px]'}
						classNameTextAr={'mobile:h-[122px] mobile:w-[258px]'}
					/>
					<Button children={'Get in touch'} />
				</form>
			</div>
		</section>
	);
};

export default GetTouch;
