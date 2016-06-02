class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 100,
      score: 0
    }
  }
  render() {
    var { pic } = this.props
    var { height, score } = this.state
    return (
      <div className="play-box">
        <h1>Jeopardy!</h1>
        <img src={pic} height={height} />
        <br />
        <button onClick={this.zoomPicOut.bind(this)}>-</button>
        <button onClick={this.zoomPicIn.bind(this)}>+</button>
        <h2>{score}</h2>
        <h4>Push the + symbol next to the selected amount of points if you answered
        correctly and first.</h4>
        <h4>Push the - symbol next to the selected amount of points if you answered
        incorrectly.</h4>
        <h4>Do nothing if you did not answer.</h4>
        <h4>The "wager" button is only appropraite during Daily Doubles and
        Final Jeopardy.</h4>
        <br />
        <button onClick={() => this.updateScore(-100)}>-</button>100
        <button onClick={() => this.updateScore(100)}>+</button><br />
        <button onClick={() => this.updateScore(-200)}>-</button>200
        <button onClick={() => this.updateScore(200)}>+</button><br />
        <button onClick={() => this.updateScore(-300)}>-</button>300
        <button onClick={() => this.updateScore(300)}>+</button><br />
        <button onClick={() => this.updateScore(-400)}>-</button>400
        <button onClick={() => this.updateScore(400)}>+</button><br />
        <button onClick={() => this.updateScore(-500)}>-</button>500
        <button onClick={() => this.updateScore(500)}>+</button><br />
        <button onClick={() => this.updateScore(-600)}>-</button>600
        <button onClick={() => this.updateScore(600)}>+</button><br />
        <button onClick={() => this.updateScore(-800)}>-</button>800
        <button onClick={() => this.updateScore(800)}>+</button><br />
        <button onClick={() => this.updateScore(-1000)}>-</button>1000
        <button onClick={() => this.updateScore(1000)}>+</button><br />
      </div>
    );
}
zoomPicIn() {
  this.setState({height: this.state.height + 20});
}
zoomPicOut() {
  this.setState({height: this.state.height - 20});
}
updateScore(n) {
  this.setState({score: this.state.score += n});
}

}
ReactDOM.render(<Game pic="http://a.abcnews.go.com/images/Entertainment/ht_alex_trebek_mustache_jeopardy_1_jc_140911_16x9_992.jpg"/>, document.getElementById('example'))
