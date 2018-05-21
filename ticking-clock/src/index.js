
import { h, Component } from 'preact'

let root;
function init() {
	let Clock = require('./components/ticking-clock').default;
	root = render(<Clock />, document.body, root);
}

// register ServiceWorker via OfflinePLugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
		//require('preact/devtools');  // turn this on if you want
		module.hot.accept('./components/ticking-clock', () => requestAnimationFrame(init));
}

init();
