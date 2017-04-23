require('./common.js');

require('../src/css/Index/main.css');
require('../src/css/Index/mainAbout.css');
require('../src/css/Index/mainAboutCV.css');
require('../src/css/Index/mainAboutText.css');
require('../src/css/Index/mainAboutAvatar.css');

require('../src/templates/Index/docs/ArtemyKudriavovCV.odt');

var navSelected = document.querySelector('.nav__item [href="index.html"]');
var navSelected = navSelected.closest('.nav__item');
navSelected.classList.toggle('nav__item_active');
