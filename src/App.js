import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LifeCycleSample from "./LifeCycleSample";
//import IterationSample from "./IterationSample";
//import ScrollBox from "./ScrollBox";
//import ValidationSample from "./ValidationSample";
//import EventPractice from "./EventPractice";
//import FuncEventPractice from "./FuncEventPractice";
//import Counter from "./Counter";
//import Say from "./Say";
//import MyComponent from "./MyComponent";


function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  state={
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
        <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}



// class App extends Component {
//   //20.10.10
//   render() {
//     return <IterationSample />;
//   }
// }



//9월
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨밑으로
//         </button>
//       </div>
//     );
//   }
// }

//const App = () => {
//return (
// <MyComponent name="React" favoriteNumber={5}>
//   리액트
// </MyComponent>

//<Counter />

//<Say />

//<EventPractice />
//<FuncEventPractice />

//<ValidationSample />

//<ScrollBox />
// );
//};

export default App;
