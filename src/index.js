import tabs from './tabs.js';
import home from './home.js';
import './styles.css';

content.setAttribute('id', 'content');

document.body.appendChild(tabs());
document.body.appendChild(home());