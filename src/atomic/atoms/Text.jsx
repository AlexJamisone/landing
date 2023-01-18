const Text = ({ content, after, className }) => (
	<p
		className={`${className} 
        mobile:text-subtitle/body-mobile-sm
        mobile:leading-body-mobile

        tablet:text-subtitle/body-web
        tablet:leading-subtitle/body

        text-gray-dark
        font-normal

        ${
			after
				? 'after:inline-block after:w-[25px] after:h-[3px] after:absolute after:-top-[24px] after:left-0 after:bg-lavender relative'
				: ''
		}
    `}
	>
		{content}
	</p>
);

export default Text;
