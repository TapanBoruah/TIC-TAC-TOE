import React ,{useState} from 'react';
import Square from './Square';

const Game=()=>{
    const [state, setState]=useState(Array(9).fill(null));
    const[isXTurn,setIsXTurn]=useState(true);

    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
    ];
    for(let logic of winnerLogic){
        const[a,b,c]=logic;
        if(state[a]!==null &&  state[a]===state[b]&&state[a]===state[c]){
            return state[a];
        }
    }
    return false;
}

    const Winner=checkWinner();

    const Click=(index)=>{
        if(state[index]!==null){
            return;
        }
        const copyState=[...state];
        copyState[index]=isXTurn?'X':'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const Reset=()=>{
        setState(Array(9).fill(null));
    }
    return(
    <div className='main'>
        <h1 className='game-name'>TIC TAC TOE</h1>
        <div className="container">
            {Winner?<h2 className='winner result'>{Winner} ,Won the Game<button onClick={Reset} className='play-again'>PLay Again</button></h2>:
            <>
            <h4 className="turn">{isXTurn?'X':'O'} Turn</h4>  
            <div className="board-container">
            
                <div className="board-row">
                    <Square onClick={()=>Click(0)} value={state[0]}/>
                    <Square onClick={()=>Click(1)} value={state[1]}/>
                    <Square onClick={()=>Click(2)} value={state[2]}/>
                </div>
                <div className="board-row">
                    <Square onClick={()=>Click(3)} value={state[3]}/>
                    <Square onClick={()=>Click(4)} value={state[4]}/>
                    <Square onClick={()=>Click(5)} value={state[5]}/>
                </div>
                <div className="board-row">
                    <Square onClick={()=>Click(6)} value={state[6]}/>
                    <Square onClick={()=>Click(7)} value={state[7]}/>
                    <Square onClick={()=>Click(8)} value={state[8]}/>
                </div>          
            </div>
            <button onClick={Reset} className='reset'>Reset</button>
            </>}
        </div>
    </div>
    )
}
export default Game;