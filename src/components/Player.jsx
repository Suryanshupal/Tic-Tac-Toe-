import { useState } from "react";

export default function Player({initialName,symbol ,isActive, onChangeName }){ 

const[playerName ,changePlayerName]=useState(initialName);

const[value,setNameValue]=useState(false);

// function which handles edit name and save  
function clickHandler (){
  setNameValue((editing)=>!editing)
  
  if(setNameValue){
    onChangeName(symbol, playerName)
  }
} 

function handleChange(event){ 
  changePlayerName(event.target.value)  //learn it ,it is used to get value enter by user (argument.target.value)
}

let editablePlayerName = <span className="player-name">{playerName}</span>
if(value){
  editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
}


//*check Why it is not working
// const editButton = 'Edit';
// if(value){
//     editButton='Save';
// } 

return( 
        <li className={isActive ? 'active' : undefined}>
              <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={clickHandler}>{!value? "Edit":"Save"}</button>
        </li> 
    )
}