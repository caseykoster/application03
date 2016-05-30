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
        <button onClick={this.subtractScoreEen.bind(this)}>-</button>100
        <button onClick={this.addScoreEen.bind(this)}>+</button><br />
        <button  onClick={this.subtractScoreTwee.bind(this)}>-</button>200
        <button onClick={this.addScoreTwee.bind(this)}>+</button><br />
        <button onClick={this.subtractScoreDrie.bind(this)}>-</button>300
        <button onClick={this.addScoreDrie.bind(this)}>+</button><br />
        <button onClick={this.subtractScoreVier.bind(this)}>-</button>400
        <button onClick={this.addScoreVier.bind(this)}>+</button><br />
        <button onClick={this.subtractScoreVijf.bind(this)}>-</button>500
        <button onClick={this.addScoreVijf.bind(this)}>+</button><br />
        <button onClick={this.subtractScoreZes.bind(this)}>-</button>600
        <button onClick={this.addScoreZes.bind(this)}>+</button><br />
        <button onClick={this.subtractScoreAcht.bind(this)}>-</button>800
        <button onClick={this.addScoreAcht.bind(this)}>+</button><br />
        <button onClick={this.subtractScoreDuizend.bind(this)}>-</button>1000
        <button onClick={this.addScoreDuizend.bind(this)}>+</button>
      </div>
    );
}
zoomPicIn() {
  this.setState({height: this.state.height + 20});
}
zoomPicOut() {
  this.setState({height: this.state.height - 20});
}

addScoreEen() {
    this.setState({score: this.state.score += 100});
  }
  subtractScoreEen() {
    this.setState({topnums: this.state.score -= 100});
  }
addScoreTwee() {
  this.setState({score: this.state.score += 200});
  }
  subtractScoreTwee() {
    this.setState({score: this.state.score -= 200});
  }
  addScoreDrie() {
    this.setState({score: this.state.score += 300});
  }
  subtractScoreDrie() {
    this.setState({score: this.state.score -= 300});
  }
  addScoreVier() {
    this.setState({score: this.state.score += 400});
  }
  subtractScoreVier() {
    this.setState({score: this.state.score -= 400});
  }
  addScoreVijf() {
    this.setState({score: this.state.score += 500});
  }
  subtractScoreVijf() {
    this.setState({score: this.state.score -= 500});
  }
  addScoreZes() {
    this.setState({score: this.state.score += 600});
  }
  subtractScoreZes() {
    this.setState({score: this.state.score -= 100});
  }
  addScoreAcht() {
    this.setState({score: this.state.score += 800});
  }
  subtractScoreAcht() {
    this.setState({score: this.state.score -= 800});
  }
  addScoreDuizend() {
    this.setState({score: this.state.score += 1000});
  }
  subtractScoreDuizend() {
    this.setState({score: this.state.score -= 1000});
  }

}
ReactDOM.render(<Game score={0} pic="http://a.abcnews.go.com/images/Entertainment/ht_alex_trebek_mustache_jeopardy_1_jc_140911_16x9_992.jpg"/>, document.getElementById('example'))
