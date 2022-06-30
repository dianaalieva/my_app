import { injectGlobal } from '@emotion/css';

injectGlobal`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
	
	body {
		font-family: 'Roboto', sans-serif;

		width: 100%;
		background: #201A47;		
	}

	* {
		box-sizing: border-box;
	}	
`;
