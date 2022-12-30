import {Square} from "./Square";
import BoardStyles from './Board.module.css'
export const Board = (props:{gird:string[][],onClick:(i:number,j:number)=>void})=>{

    return <div className={BoardStyles.board}>
        {props.gird.map((row,rowIndex)=>row.map((cell,colIndex)=>(<Square onClick={()=>props.onClick(rowIndex,colIndex)} value={cell}/>)))}
    </div>
}