// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';


let root;
function init() {
	let Clock = require('./components/simple-clock').default;
	root = render(<Clock />, document.body, root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/simple-clock', () => requestAnimationFrame(init) );
}

init();
