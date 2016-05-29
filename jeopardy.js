class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topnums: 0
    }
  }
  render() {
    return (
      <div className="play-box">
        <h1>Jeopardy!</h1>
        <h2>{this.props.topnums}</h2>
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
        <button>-</button>200<button>+</button><br />
        <button>-</button>300<button>+</button><br />
        <button>-</button>400<button>+</button><br />
        <button>-</button>500<button>+</button><br />
        <button>-</button>600<button>+</button><br />
        <button>-</button>800<button>+</button><br />
        <button>-</button>1000<button>+</button>
      </div>
    );
}
  addScoreEen() {
    this.setState({topnums: this.state.topnums += 100});
  }
  subtractScoreEen() {
    this.setState({topnums: this.state.topnums -= 100});
  }
  /*addScoreTwee() {

  }
  subtractScoreTwee() {

  }
  addScoreDrie() {

  }
  subtractScoreDrie() {

  }
  addScoreVier() {

  }
  subtractScoreVier() {

  }
  addScoreVijf() {

  }
  subtractScoreVijf() {

  }
  addScoreZes() {

  }
  subtractScoreZes() {

  }
  addScoreZeven() {

  }
  subtractScoreZeven() {

  }
  addScoreAcht() {

  }
  subtractScoreAcht() {

  }
  addScoreNegen() {

  }
  subtractScoreNegen() {

  }
  addScoreDuizend() {

  }
  subtractScoreDuizend() {

  }

var yourWinnings = {
  totalScore: 0
}

console.log('Your score is'+yourWinnings.totalScore);
*/
}


ReactDOM.render(<Game topnums={0}/>, document.getElementById('example'))
