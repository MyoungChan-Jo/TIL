import logo from './logo.svg';
import './App.css';
import  ChildComponent from './child.js'
import  TimerComponent from './timer'


function App() {
  const text = "난 인프런이다.";
  const sayHello = function(){
    return <h3>인프런 강의 좋냐?</h3>
  }
  const sayHello2 = function(){
    alert('hi');
  }
  return (
    <div>
      <h1>하이</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>클릭해줭</div>
      <div onClick={function(){
        alert("직접해봐썽")
      }}>클릭해줭</div>
      <TimerComponent></TimerComponent>
      <ChildComponent name ="그랩1" age={27}></ChildComponent>
      <ChildComponent name ="그랩2" age={22}></ChildComponent>
      <ChildComponent name ="그랩3" age={25}></ChildComponent>
      <ChildComponent name ="그랩4" age={21}></ChildComponent>


    </div>

  );
}

export default App;
