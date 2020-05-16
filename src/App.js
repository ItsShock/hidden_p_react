import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      showP: false
    }
  }

  showHideP = () => {
    let { showP } = this.state;
    showP = !showP;
    this.setState({showP})
  }

  render() {
    let p;

    if (this.state.showP) {
      p = <p>A kuku!</p>
    }

    return (
      <>
        {p}
        <button onClick={this.showHideP}>click</button>
      </>
    );
  }
}

export default App;
