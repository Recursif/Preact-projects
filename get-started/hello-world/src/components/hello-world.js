
import { h, render } from 'preact'


render ((
  <div id="foo">
    <span>Hello, world!</span>
    <button onClick={ e => alert("hi!") }>Click me</button>
  </div>
), document.body)
