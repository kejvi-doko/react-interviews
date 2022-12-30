import SquareStyles from './Square.module.css'
export const Square = (props:{value:string,onClick:()=>void})=>{
    return (<div onClick={props.onClick} className={SquareStyles.square}>{props.value}</div>)
}