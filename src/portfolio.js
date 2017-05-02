require('./common.js');
require('../src/css/Portfolio/main.css');
require('../src/css/Portfolio/portfolioList.css');

require('../src/css/Portfolio/media.scss');

let navSelected = document.querySelector('.nav__item [href="portfolio.html"]');

navSelected = navSelected.closest('.nav__item');
navSelected.classList.toggle('nav__item_active');