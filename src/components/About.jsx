import nick from '../images/nick2.png';
import MusicIcon from '../icons/MusicIcon';
import DrawingIcon from '../icons/DrawingIcon';
import PhotoIcon from '../icons/PhotoIcon';
import Button from '../atomic/atoms/Button';
import Subtitle from '../atomic/atoms/Subtitle';

const Interests = [
	{
		icon: (
			<MusicIcon
				className={
					'fill-lavender mobile:w-[17.6px] tablet:w-[17.29px] tablet:h-[21px]'
				}
			/>
		),
		title: 'Music',
		subtitle: 'Indie rock | Reggae',
	},
	{
		icon: (
			<DrawingIcon
				className={'fill-lavender mobile:w-[17.6px] tablet:w-[21.9px]'}
			/>
		),
		title: 'Art',
		subtitle: 'Edvard Munch | Frida Kahlo',
	},
	{
		icon: (
			<PhotoIcon
				className={'fill-lavender mobile:w-[17.6px] tablet:w-[21px]'}
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
		position: 'Junior Frontend developer',
		comp: 'Facebook',
	},
	{
		date: '2000 - 2005',
		position: 'Frontend developer',
		comp: 'Stanford University',
	},
];

const About = () => {
	return (
		<section
			className="bg-white flex flex-col overflow-hidden font-main"
			id="#about"
		>
			<div className="mobile:mx-mobile tablet:mx-tablet web:mx-web grid mobile:grid-rows-1 tablet:grid-cols-2 gap-x-10">
				<Subtitle
					content={'About me'}
					h2={true}
					className={'mobile:mt-12 mobile:mb-[53px] tablet:my-20'}
				/>
				<div className="mobile:w-[290px] mobile:m-auto mobile:h-[290px] relative after:inline-block after:absolute after:w-[290px] after:h-[290px] web:w-[412px] web:h-[412px] web:after:w-[412px] web:after:h-[412px] after:-top-[7%] web:after:-top-[6%] after:left-0 after:bg-gradient-to-t after:rounded-full after:from-[#3AB0FA] after:to-[#FED094] after:via-[#FE68A5] after:m-auto tablet:col-start-1 web:m-0">
					<img
						className={`mobile:max-h-[250px] mobile:min-w-[250px] object-contain m-auto relative z-10 rounded-[50%] bg-gray-light web:min-w-[364px] web:min-h-[364px]`}
						src={nick}
						alt="nick"
					/>
				</div>
				<section className="flex flex-col justify-center">
					<p className="mobile:text-subtitle/body-mobile-sm mobile:leading-body-mobile mobile:mt-[60px] mobile:mb-12  text-gray-dark after:inline-block after:w-[25px] after:h-[3px] after:absolute after:-top-[24px] after:left-0 after:bg-lavender relative tablet:col-start-2 tablet:m-0 tablet:max-h-[190px] tablet:text-subtitle/body-web tablet:leading-subtitle/body font-normal">
						<span className="text-black font-semibold">
							Nick Richardson
						</span>
						- specialist in Frontend development. Clear code is my
						passion. Solving issues through negotiations
					</p>
					<Button
						children={'Get in touch'}
						className={
							'mobile:hidden tablet:flex tablet:col-start-2 tablet:m-0 tablet:mt-11'
						}
					/>
				</section>
				<section className="tablet:mt-16 tablet:mb-20  web:my-11">
					<Subtitle
						content={'Interests'}
						h3={true}
						className={'mobile:mb-[29px] tablet:mb-11'}
					/>
					{Interests.map(({ icon, subtitle, title }) => (
						<div
							key={title}
							className=" flex mobile:h-[46px] mobile:gap-2 mobile:mb-[25px] mobile:last:mb-0  tablet:col-start-1 tablet:gap-4 tablet:mb-11 tablet:h-[68px] tablet:w-[353px]"
						>
							<div
								className={
									'relative after:absolute after:top-0 after:left-0 after:inline-block mobile:after:w-[44px] after:h-[44px] after:border-2 after:border-lavender after:rounded-full flex justify-center items-center mobile:w-[44px] tablet:after:w-[60px] tablet:after:h-[60px] mobile:h-[44px] tablet:h-[60px] tablet:w-[60px]'
								}
							>
								{icon}
							</div>
							<div className="flex-1 tablet:leading-[30px]">
								<p className="font-semibold mobile:text-subtitle/body-mobile-sm mobile:mb-1 mobile:leading-[21px] tablet:text-subtitle/body-web tablet:mb-2">
									{title}
								</p>
								<p className="text-black mobile:text-subtitle/body-mobile-sm leading-5 tablet:text-xl w-full">
									{subtitle}
								</p>
							</div>
						</div>
					))}
				</section>
				<section className="tablet:col-start-1  tablet:col-end-3 web:col-start-auto mobile:mt-11 tablet:mb-[132px]">
					<Subtitle
						content={'Education & Experience'}
						h3={true}
						className={'mobile:mb-7 tablet:mb-11'}
					/>
					{Experience.map(({ comp, date, position }, index) => (
						<div
							key={index}
							className="flex mobile:gap-1 border-b border-r-gray-light mobile:mb-3 mobile:last:mb-5 tablet:last-of-type:mb-0 tablet:last-of-type:border-none text-black tablet:col-end-3 tablet:gap-4 mobile:text-sm tablet:text-xl tablet:mb-6"
						>
							<time className="mobile:w-[120px]  mobile:leading-[21px] tablet:w-[152px] tablet:text-xl tablet:leading-[30px]">
								{date}
							</time>
							<div className="mobile:max-w-[160px] tablet:max-w-full">
								<p className=" leading-[21px] font-semibold mobile:mb-2 tablet:mb-2">
									{position}
								</p>
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
