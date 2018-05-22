
import { h, render } from 'preact'


// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

render ((
	  <div id="foo">
	    <span>Hello, world!</span>
	    <button onClick={ e => alert("hi!") }>Click me</button>
	  </div>
), document.body)
