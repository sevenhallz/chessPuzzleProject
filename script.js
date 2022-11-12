//------Variables
let chessPieces = ["♟︎", "♘", "♟︎", "♘", "♟︎", "♝", "♟︎", "♝", "♜", "♟︎", "♟︎", "♜", "♕", "♔", "♟︎", "♟︎"]
let pawnShelf = document.getElementById("pawn-shelf");
let minorPiecesShelf = document.getElementById("minorpieces-shelf");
let rookShelf = document.getElementById("rook-shelf");
let royalShelf = document.getElementById("royal-shelf");
let pawns = "";
let knights = "";
let rooks = "";
let royal = "";

//------Logic
function sortPieces() {
  for (i=0; i < chessPieces.length; i++){
	if(chessPieces[i] === "♟︎"){
	  pawns = pawns + chessPieces[i];
	} else if(chessPieces[i] === "♘" || chessPieces[i] == "♝"){
	  knights = knights + chessPieces[i];
	} else if(chessPieces[i] === "♜"){
	  rooks = rooks + chessPieces[i];
	} else {
	  royal = royal + chessPieces[i];
	}
  }
	//output
	pawnShelf.innerHTML = pawns;
  minorPiecesShelf.textContent = knights;
	rookShelf.textContent = rooks;
	royalShelf.textContent = royal;    
}
  
sortPieces();

