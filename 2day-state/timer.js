import React from "react";

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log('컴포넌트 업데이트');
    function updateTime(){
        setTime(time+1)
    }
    return(
        <div>
            <h3>{time}초</h3>
            {/*클릭시 setTime 으로 state 를 업데이트 한다.*/}
            <button onClick={updateTime}>1씩 올려라</button>
        </div>
    )
}

export default TimerComponent