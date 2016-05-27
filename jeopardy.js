class Game extends React.Component {
  render() {
    return (
      <div className="play-box">
        <h1>Jeopardy!</h1>
        <h4>Push the + symbol next to the selected amount of points if you answered
        correctly and first.</h4>
        <h4>Push the - symbol next to the selected amount of points if you answered
        incorrectly.</h4>
        <h4>Do nothing if you did not answer.</h4>
        <h4>The "wager" button is only appropraite during Daily Doubles and
        Final Jeopardy.</h4>
        <br />
        <button>-</button>100<button>+</button><br />
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
}

ReactDOM.render(<Game />, document.getElementById('example'))
