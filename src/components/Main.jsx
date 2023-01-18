import Button from '../atomic/atoms/Button';
import nick from '../images/nick1.png';
import Subtitle from '../atomic/atoms/Subtitle';

const Main = () => {
	return (
		<main className="bg-white relative web:flex web:flex-row tablet:flex tablet:flex-row mobile:flex mobile:flex-col justify-center overflow-hidden mobile:h-[500px] web:h-[768px] tablet:h-[455px]  font-main">
			<div className="web:mx-web mobile:mx-mobile tablet:mx-tablet mobile:mt-[27px] tablet:mt-11 web:mt-[162px] flex flex-col">
			
				<Subtitle content={`Hey, I’m Nick`} h1={true}/>
				<p className="mobile:text-sm mobile:leading-body-mobile tablet:text-subtitle-mobile text-gray-dark font-normal leading-subtitle/body">
					Frontend developer
				</p>
				<p className="mobile:w-[290px] after:inline-block after:w-[25px] after:h-[3px] after:absolute after:-top-[24px] after:left-0 after:bg-lavender relative mt-16 text-gray-dark text-sm leading-[21px] font-norma mb-7 web:mt-[116px] web:text-xl web:w-[445px] web:mb-[60px] tablet:mb-11">
					Help you to create high-quality digital products that your
					clients will love and let your business thrive
				</p>
				<Button children={`Get in touch`} />
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
					tablet:before:w-[500px]
					tablet:before:h-[550px]
					tablet:before:top-1/3
					tablet:before:-left-[5%]
					tablet:before:rounded-[100px]
					tablet:before:rotate-45
					tablet:flex-1

					web:before:absolute
					web:before:w-[950px]
					web:before:h-[1000px]
					web:before:top-1/3
					web:before:left-[10%]
					web:before:rounded-[100px]
					web:before:rotate-45

					mobile:before:inline-block
					mobile:before:w-[200px]
					mobile:before:h-[400px]
					mobile:before:bg-gradient-to-tl
					mobile:before:via-[#F792C3]
					mobile:before:to-[#FFEFBE]
					mobile:before:from-[#73D3EB]
					mobile:before:absolute
					mobile:before:-top-1/3
					mobile:before:-right-[5%]
					mobile:before:rounded-[50px]
					mobile:before:rotate-45`
				}
			>
				<img
					className={`absolute
						2xl:left-1/2
						2xl:-bottom-[10%]
						2xl:w-[500px]
						web:left-[15%]
						web:-bottom-[10%]
						web:w-[500px]
						tablet:left-0
						tablet:-bottom-[10%]
						tablet:w-[300px]
						mobile:w-[250px]
						mobile:left-[45%]
						mobile:gradient1
						mobile:-bottom-[30%]`
					}
					src={nick}
					alt="nick"
				/>
			</div>
		</main>
	);
};

export default Main;
