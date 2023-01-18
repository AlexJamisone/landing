const Subtitle = ({ content, className, h1, h2, h3 }) => {
	const check = (h1, h2, h3) => {
		switch (h1 || h2 || h3) {
			case h1:
				return (
					<h1
						className={`${className} 
                    mobile:text-h3-web
                    mobile:leading-6

                    tablet:text-h1-web
                    tablet:leading-h1-web
                    text-black
                    font-bold
                `}
					>
						{content}
					</h1>
				);

			case h2:
				return (
					<h2
						className={`${className} 
                    mobile:text-subtitle-mobile
                    mobile:leading-subtitle/body
                    mobile:font-semibold

                    tablet:text-h2-web
                    tablet:leading-h2-web
                    tablet:font-bold

                    text-black
                `}
					>
						{content}
					</h2>
				);

			case h3:
                return (
				<h3
					className={`${className}
                    mobile:text-subtitle-mobile
                    mobile:leading-subtitle/body
                    mobile:font-semibold
                
                    tablet:text-h3-web
                    tablet:leading-h3-web
                    tablet:font-bold
                    text-black
                `}
				>
					{content}
				</h3>
                )
			default:
				return (
                    <p>{content}</p>
                )
		}
	};
	return <>{check(h1, h2, h3)}</>;
};

export default Subtitle;
