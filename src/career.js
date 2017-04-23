require('./common.js');
require('../src/css/Career/main.css');
require('../src/css/Career/careerList.css');
require('../src/css/Career/careerPicture.css');

var navSelected = document.querySelector('.nav__item [href="career.html"]');
var navSelected = navSelected.closest('.nav__item');
navSelected.classList.toggle('nav__item_active');