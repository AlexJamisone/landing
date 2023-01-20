import Button from '../atomic/atoms/Button';
import nick from '../images/nick1.png';
import Subtitle from '../atomic/atoms/Subtitle';
import Text from '../atomic/atoms/Text';

const Main = () => {
	return (
		<main className="bg-white relative web:flex web:flex-row tablet:flex tablet:flex-row mobile:flex mobile:flex-col justify-center overflow-hidden mobile:h-[500px] web:h-[768px] tablet:h-[455px]  font-main" id='main'>
			<div className="web:mx-web mobile:mx-mobile tablet:mx-tablet mobile:mt-[2.15rem] tablet:mt-11 web:mt-[162px] flex flex-col">
				<Subtitle content={`Hey, I’m Nick`} h1={true} className={`mobile:mb-[0.55rem] tablet:mb-1 web:mb-1`}/>
				<Text content={'Frontend developer'} className={'mobile:mb-[59px] tablet:mb-[52px] web:mb-[116px]'}/>
				<Text
					content={
						'Help you to create high-quality digital products that your clients will love and let your business thrive'
					}
					after={true}
					className={'mobile:w-[270px] tablet:w-[445px] tablet:after:-top-[16px]  mobile:pt-1 tablet:pt-0'}
				/>
				<Button children={`Get in touch`}  className={'mobile:mt-[27px] tablet:mt-11 web:mt-[60px]'}/>
			</div>
			<div
				className={`relative w-full h-full 
					2xl:before:absolute
					2xl:before:w-[950px]
					2xl:before:h-[1000px]
					2xl:before:top-1/3
					2xl:before:left-[44%]
					2xl:before:rounded-[100px]

					tablet:before:absolute
					tablet:before:w-[585px]
					tablet:before:h-[580px]
					tablet:before:top-1/3
					tablet:before:-left-[24%]
					tablet:before:rounded-[100px]
					tablet:before:rotate-45
					tablet:flex-1

					web:before:absolute
					web:before:w-[1020px]
					web:before:h-[725px]
					web:before:top-[37%]
					web:before:-left-[11%]
					web:before:rounded-[100px]
					web:before:-rotate-[46deg]
					web:before:scale-[1, -1]
					
					mobile:before:inline-block
					mobile:before:w-[190px]
					mobile:before:h-[420px]
					mobile:before:bg-gradient
					mobile:before:bg-cover
					
					mobile:before:absolute
					mobile:before:-top-1/3
					mobile:before:left-[49%]
					mobile:before:rounded-[150px]
					mobile:before:scale-[1, -1]
					mobile:before:rotate-[43deg]
					`
				}
			>
				<img
					className={`absolute
						2xl:left-1/2
						2xl:-bottom-[10%]
						2xl:w-[500px]

						web:left-[15%]
						web:-bottom-[2%]
						web:w-[500px]
						web:h-[710px]

						tablet:-left-[17%]
						tablet:-bottom-[10%]
						tablet:min-w-[300px]
						tablet:h-[439px]
						

						mobile:w-[250px]
						mobile:left-[39%]
						mobile:-bottom-[35%]`
					}
					src={nick}
					alt="nick"
				/>
			</div>
		</main>
	);
};

export default Main;
