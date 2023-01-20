import Input from '../atomic/atoms/Input';
import Button from '../atomic/atoms/Button';
import Subtitle from '../atomic/atoms/Subtitle';

const GetTouch = () => {
	return (
		<section className={`
			flex
			justify-center
			font-main
			overflow-hidden
			relative

			web:after:bg-gradient-to-l
			web:after:from-[#FFD69F]
			web:after:via-[#FE8B79]
			web:after:to-[#39B5F9]

			tablet:after:scale-[-1]

			
			mobile:after:absolute
			mobile:after:w-screen
			mobile:after:h-full
			mobile:after:min-h-[753px]
			mobile:after:bg-gradient
			mobile:after:bg-cover
			mobile:after:bg-center
			mobile:z-10
			`
		} id='getTouch'>
			<div className={`
				bg-[#fff] 
				rounded-2xl
				relative
				z-20

				web:min-w-[764px]
				web:min-h-[567px]

				tablet:min-w-[712px]
				tablet:min-h-[567px]
				tablet:my-[70px]
				tablet:mx-0

				mobile:my-16
				mobile:mx-[10px]
				mobile:max-w-[300px]
				mobile:min-h-[625px]
				`
			}>
				<form className='mobile:my-[48px] mobile:mx-[21px] tablet:mx-[32px] web:m-12 flex flex-col tablet:grid tablet:grid-cols-2 tablet:gap-x-6 items-start'>
					<Subtitle
						content={'Let’s discuss your project'}
						className={'text-center mobile:mb-9 tablet:mb-12 mobile:min-w-max tablet:col-span-2 tablet:text-left'}
						h2={true}
					/>
					<Input
						required={true}
						labelFild={'Your full name'}
						placeholderField={'Name Surname'}
						className={'mobile:mb-[25px] tablet:max-w-[312px]'}
					/>
					<Input
						required={true}
						mailIcon={true}
						labelFild={'Your email'}
						placeholderField={'name@example.com'}
						className={'tablet:max-w-[312px]'}
					/>
					<Input
						textarea={true}
						labelFild={'Tell me about your project'}
						placeholderField={
							'Add here a general description of your idea and target aim'
						}
						className={'mobile:mb-9 mobile:mt-[38px] tablet:mb-[48px] tablet:col-start-1 tablet:col-end-3'}
						classNameTextAr={'mobile:h-[122px] mobile:w-[258px] tablet:w-full'}
					/>
					<Button children={'Get in touch'} className={'tablet:col-start-1'}/>
				</form>
			</div>
		</section>
	);
};

export default GetTouch;
