import nick from '../images/nick2.png';
import MusicIcon from '../icons/MusicIcon';
import DrawingIcon from '../icons/DrawingIcon';
import PhotoIcon from '../icons/PhotoIcon';
import Button from '../atomic/atoms/Button';
import Subtitle from '../atomic/atoms/Subtitle';
import Text from '../atomic/atoms/Text';

const Interests = [
	{
		icon: (
			<MusicIcon
				className={
					'fill-lavender mobile:w-[17.6px] tablet:w-[24px] tablet:h-[24px]'
				}
			/>
		),
		title: 'Music',
		subtitle: 'Indie rock | Reggae',
	},
	{
		icon: (
			<DrawingIcon
				className={'fill-lavender mobile:w-[17.6px] tablet:w-[24px]'}
			/>
		),
		title: 'Art',
		subtitle: 'Edvard Munch | Frida Kahlo',
	},
	{
		icon: (
			<PhotoIcon
				className={'fill-lavender mobile:w-[17.6px] tablet:w-[24px]'}
			/>
		),
		title: 'Photography',
		subtitle: 'Portraits',
	},
];

const Experience = [
	{
		date: '2008 - Present',
		position: 'Middle Frontend developer',
		comp: 'Ozon',
	},
	{
		date: '2006 - 2007',
		position: 'Frontend development courses',
		comp: 'Stepik',
	},
	{
		date: '2000 - 2005',
		position: 'Frontend developer',
		comp: 'Saint Petersburg State University',
	},
];

const About = () => {
	return (
		<section
			className="bg-white overflow-hidden font-main"
			id="#about"
		>
			<div className="mobile:mx-mobile tablet:mx-tablet web:mx-web tablet:grid tablet:grid-cols-2 web:gap-x-[1.9rem] tablet:gap-x-0 mobile:mt-12 tablet:mt-20 web:mt-24">
				<Subtitle
					content={'About me'}
					h2={true}
					className={
						' mobile:mb-[36px] mobile:pt-1 tablet:pt-0 tablet:mb-20'
					}
				/>
				<div className={`
					relative
					after:inline-block
					after:absolute
					after:w-[290px]
					after:h-[290px]
					after:left-0
					after:bg-gradient-to-t 
					after:rounded-full 
					after:from-[#3AB0FA]
					after:to-[#FED094]
					after:via-[#FE68A5]

					tablet:after:-left-[9%]
					mobile:w-[290px]
					mobile:m-auto
					mobile:h-[290px]

					web:w-[412px]
					web:h-[412px]
					web:after:w-[412px]
					web:after:h-[412px]
					web:after:left-0
					web:after:top-0
					tablet:col-start-1
					web:m-0
				`
				}>
					<img
						className={`
							mobile:max-h-[255px]
							mobile:min-w-[255px]
							mobile:absolute 
							mobile:top-[6%]
							mobile:right-[6%]
							tablet:right-[15%]
							object-contain 
							absolute
							web:top-[6%]
							web:left-[6%]
							z-10 
							rounded-[50%] 
							bg-gray-light 
							web:min-w-[365px]
							web:min-h-[365px]
							`
						}
						src={nick}
						alt="nick"
					/>
				</div>
				<section className="flex flex-col justify-center col-end-3 mobile:mt-[58px] tablet:mt-[26px] tablet:mt web:mt-[1.3rem]">
					<Text
						content={
							<>
								<span className='font-semibold text-black'>Nick Richardson</span> - specialist in
								Frontend development. Clear code is my passion.
								Solving issues through negotiations
							</>
						}
						after={true}
						className={'mobile:mb-12 mobile:pt-1 tablet:min-w-[380px] web:max-w-[450px] web:max-h-[90px]'}
					/>
					<Button
						children={'Get in touch'}
						className={
							'mobile:hidden tablet:flex tablet:col-start-2 web:mt-[1.3rem]'
						}
					/>
				</section>
				<section className="tablet:mt-16 web:mt-20">
					<Subtitle
						content={'Interests'}
						h3={true}
						className={'mobile:mb-[28px] tablet:mb-[2.95rem]'}
					/>
					{Interests.map(({ icon, subtitle, title }) => (
						<div
							key={title}
							className=" flex mobile:h-[46px] mobile:gap-2 mobile:mb-[24px] mobile:last:mb-0  tablet:col-start-1 tablet:gap-4 tablet:mb-11 tablet:h-[68px] tablet:w-[353px]"
						>
							<div
								className={
									'relative after:absolute after:top-0 after:left-0 after:inline-block mobile:after:w-[44px] after:h-[44px] after:border-2 after:border-lavender after:rounded-full flex justify-center items-center mobile:w-[44px] tablet:after:w-[60px] tablet:after:h-[60px] mobile:h-[44px] tablet:h-[60px] tablet:w-[60px]'
								}
							>
								{icon}
							</div>
							<div className="flex-1 tablet:leading-[30px]">
								<Text content={title} className={'mobile:mb-1 tablet:mb-1 font-semibold text-black'}/>
								<p className="text-black mobile:text-subtitle/body-mobile-sm leading-5 tablet:text-xl w-full">
									{subtitle}
								</p>
							</div>
						</div>
					))}
				</section>
				<section className="tablet:col-start-1  tablet:col-end-3 web:col-start-auto mobile:mt-11 tablet:mt-20 tablet:mb-[132px] web:mt-20">
					<Subtitle
						content={'Education & Experience'}
						h3={true}
						className={'mobile:mb-7 tablet:mb-11'}
					/>
					{Experience.map(({ comp, date, position }, index) => (
						<div
							key={index}
							className="flex mobile:gap-1 border-b border-r-gray-light mobile:mb-3 mobile:last:mb-5 tablet:last-of-type:mb-0 tablet:last-of-type:border-none text-black tablet:col-end-3 tablet:gap-4 mobile:text-sm tablet:text-xl tablet:mb-[1.9rem]"
						>
							<time className="mobile:w-[120px]  mobile:leading-[21px] tablet:w-[152px] tablet:text-xl tablet:leading-[30px]">
								{date}
							</time>
							<div className="mobile:max-w-[160px] tablet:max-w-full">
								<Text content={position} className={'mobile:font-semibold mobile:text-black mobile:mb-[0.7rem] mobile:leading-body-mobile'}/>
								<p className=" leading-[21px] mobile:mb-3 tablet:mb-8">
									{comp}
								</p>
							</div>
						</div>
					))}
					<Button
						children={'Get in touch'}
						className={
							'mobile:flex mobile:mt-9 mobile:mb-[100px] tablet:hidden'
						}
					/>
				</section>
			</div>
		</section>
	);
};

export default About;
