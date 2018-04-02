//globals: $, jQuery and Tether, see config

import 'bootstrap';
// adds all custom Bootstrap jQuery plugins
// see all plugins here: http://getbootstrap.com/javascript/

import { addNavigationEventlisteners } from 'js/navigation';

document.addEventListener('DOMContentLoaded', () => {
  addNavigationEventlisteners();
});
