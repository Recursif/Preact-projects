
import { h, Component } from 'preact'


class Clock extends Component {
  constructor() {
    super();
    // set initial time;
    this.state= {time: Date.now()};
  }

  componentWillMount() {
    // update time every second
    this.timer = setInterval(() => {
      thisnsetState({time: Date.now()});
    },1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString();
    return <span>{ time }</span>;
  }
}
