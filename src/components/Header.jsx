import Logo from '../icons/navigation/Logo';
import MenuBurger from '../icons/navigation/MenuBurger';
import CloseIcon from '../icons/navigation/CloseIcon';
import { useState } from 'react';

const links = [
	{
		link: '#main',
		title: 'Main',
	},
	{
		link: '#about',
		title: 'About',
	},
	{
		link: '#getTouch',
		title: 'Get in Touch',
	},
];
const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className="bg-white relative h-16 flex justify-center border-b-[1px] border-gray-light flex-none">
			<nav className="container web:mx-web tablet:mx-tablet mobile:mx-mobile flex justify-between items-center">
					<a href="/" className="cursor-pointer">
						<Logo className={`fiil-black`} />
					</a>
					{open ? (
						<CloseIcon
							className={`fill-black tablet:hidden web:hidden mobile:flex`}
							onClick={() => setOpen(!open)}
						/>
					) : (
						<MenuBurger
							className={`fill-black tablet:hidden web:hidden mobile:flex`}
							onClick={() => setOpen(!open)}
						/>
					)}
					<ul
						className={`web:flex tablet:flex mobile:absolute web:static tablet:static gap-6 font-main text-gray-dark font-semibold text-base leading-6 mobile:right-0 mobile:top-16 mobile:bg-white transition-all duration-300 ease-in z-10 ${
							open ? '' : 'mobile:top-[-490px]'
						}`}
					>
						{links.map(({ link, title }, index) => (
							<li
								key={index}
								className={`tablet:m-0 web:m-0 mobile:m-3`}
							>
								<a
									className={`active:text-lavender focus:text-lavender`}
									href={link}
								>
									{title}
								</a>
							</li>
						))}
					</ul>
			</nav>
		</header>
	);
};

export default Header;
