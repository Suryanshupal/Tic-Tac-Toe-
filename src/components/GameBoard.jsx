
export default function GameBoard({ onSelectSquare , board }){

  return <ol id="game-board">
        {/* # tricky */}
        {board.map((row ,rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol ,colIndex)=> (
                        <li key={colIndex}>
                            <button onClick={()=> onSelectSquare (rowIndex,colIndex)} disabled = {playerSymbol!==null}>
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>)) }
    </ol>
}
//(col) is the playerSymbol which we want from user