import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

function App(props) {
  // event handler
  const handleIncrease = () => {
    //dispatch action
    props.increaseCounter()
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with {props.name} and PHAM TRUNG HIEU</h1>
        <div>Count: {props.count}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    name: state.counter.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

