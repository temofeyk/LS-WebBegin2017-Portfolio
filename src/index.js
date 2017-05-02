require('./common.js');

require('../src/css/Index/mainAbout.css');
require('../src/css/Index/mainAboutCV.scss');
require('../src/css/Index/mainAboutText.css');
require('../src/css/Index/mainAboutAvatar.css');

require('../src/css/Index/media.scss');

require('../src/templates/Index/docs/ArtemyKudriavovCV.odt');

let navSelected = document.querySelector('.nav__item [href="index.html"]');

navSelected = navSelected.closest('.nav__item');
navSelected.classList.toggle('nav__item_active');
