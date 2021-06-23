
import '../scss/style.scss';
import 'foundation-sites/dist/js/foundation.min.js';
import initCustomScripts from './customjs/default';
import { jsLearn } from './customjs/jslearning';
import menu from '../assets/uploads/menu.csv';

$(document).foundation();
console.log(typeof(menu))
const menuq = menu;
console.log("menuq", menuq)
initCustomScripts();
jsLearn();




if (module.hot) {
    module.hot.accept()
}
