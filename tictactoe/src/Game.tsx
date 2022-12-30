import {Board} from "./Compoents/Board";
import {useState} from "react";
import React from "react";

export enum GameResult{
    X_WIN,
    O_WIN,
    DRAW
}
export const Game = ()=>{
    const [gameState,setGameState]=useState({
        grid: Array.from({length:3}).map(()=>Array.from({length:3}).map(()=>'')),
        xTurn:true,
        completed:null
    });
    const isCompleted = ()=>{
        let ctXV=0;
        let ctOV=0;
        let ctXH=0;
        let ctOH=0;
        let ctXD=0;
        let ctOD=0;
        let ctXAD=0;
        let ctOAD=0;
        for(let i =0;i<3;i++){
            for(let j=0;j<3;j++){
                if(gameState.grid[i][j]==='X')
                    ctXV++;
                if(gameState.grid[i][j]==='O')
                    ctOV++;

                if(gameState.grid[j][i]==='X')
                    ctXH++;

                if(gameState.grid[j][i]==='O')
                    ctOH++;

                if(gameState.grid[j][j]==='O')
                    ctOD++;

                if(gameState.grid[j][j]==='X')
                    ctXD++;

                if(gameState.grid[j][2-j]==='X')
                    ctXAD++;

                if(gameState.grid[j][2-j]==='O')
                    ctOAD++;
            }
            if(ctXV===3)return GameResult.X_WIN;
            if(ctOV===3)return GameResult.O_WIN;
            if(ctXH===3)return GameResult.X_WIN;
            if(ctOH===3)return GameResult.O_WIN;
            if(ctXD===3)return GameResult.X_WIN;
            if(ctOD===3)return GameResult.O_WIN;
            if(ctXAD===3)return GameResult.X_WIN;
            if(ctOAD===3)return GameResult.O_WIN;

            ctXV=0;
            ctOV=0;
            ctXH=0;
            ctOH=0;
            ctXD=0;
            ctOD=0;
            ctXAD=0;
            ctOAD=0;
        }
        return null
    }
    const onClickHandler = (i: number,j:number)=>{
        const newGrid = [...gameState.grid];
        if(newGrid[i][j]===''){
            newGrid[i][j]=gameState.xTurn?'X':'O';
            const x= isCompleted();
            console.log(x);
            setGameState({
                grid: newGrid,
                xTurn: !gameState.xTurn,
                completed: null
            });
        }

    }


    const resetHandler = ()=>{
        setGameState({
            grid: Array.from({length:3}).map(()=>Array.from({length:3}).map(()=>'')),
            xTurn: true,
            completed: null
        })
    }
    return (<React.Fragment>
        <Board onClick={onClickHandler} gird={gameState.grid}/>
        <button onClick={resetHandler}>Reset</button>
    </React.Fragment>)
}