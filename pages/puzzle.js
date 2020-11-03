import Head from  'next/head'
function Puzzle(){
    const onClickHandler = (e)=>{
        var id = document.getElementById(e.currentTarget.id);
        var styleId = window.getComputedStyle(id);
        var blank = document.getElementById('blank');
        var blankStyle =window.getComputedStyle(blank);
        let tempT, tempL ;
        if(blankStyle.getPropertyValue('top') == "180px" && blankStyle.getPropertyValue('left') == "180px"){
			if((styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "180px") ||
				(styleId.getPropertyValue('top') == "180px" && styleId.getPropertyValue('left') == "90px")){
                tempT = styleId.getPropertyValue('top');
                tempL = styleId.getPropertyValue('left')
                id.style.top = blankStyle.getPropertyValue('top');
                id.style.left = blankStyle.getPropertyValue('left')
                
                blank.style.top= tempT;
                blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

        else if(blankStyle.getPropertyValue('top') == "180px" && blankStyle.getPropertyValue('left') == "90px"){
			if((styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "90px") ||
                (styleId.getPropertyValue('top') == "180px" && styleId.getPropertyValue('left') == "0px")||
                (styleId.getPropertyValue('top') == "180px" && styleId.getPropertyValue('left') == "180px")
                ){
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

  

      else if(blankStyle.getPropertyValue('top') == "180px" && blankStyle.getPropertyValue('left') == "0px"){
			if((styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "0px") ||
                (styleId.getPropertyValue('top') == "180px" && styleId.getPropertyValue('left') == "90px")
                ){
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
               
                
                
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

        else if(blankStyle.getPropertyValue('top') == "90px" && blankStyle.getPropertyValue('left') == "180px"){
			if((styleId.getPropertyValue('top') == "0px" && styleId.getPropertyValue('left') == "180px") ||
                (styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "90px") ||
                (styleId.getPropertyValue('top') == "180px" && styleId.getPropertyValue('left') == "180px")
                ){
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

        else if(blankStyle.getPropertyValue('top') == "90px" && blankStyle.getPropertyValue('left') == "90px"){
			if((styleId.getPropertyValue('top') == "0px" && styleId.getPropertyValue('left') == "90px") ||
                (styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "0px") ||
                (styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "180px") ||
                (styleId.getPropertyValue('top') == "180px" && styleId.getPropertyValue('left') == "90px")
                ){
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

        else if(blankStyle.getPropertyValue('top') == "90px" && blankStyle.getPropertyValue('left') == "0px"){
			if((styleId.getPropertyValue('top') == "0px" && styleId.getPropertyValue('left') == "0px") ||
                (styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "90px") ||
                (styleId.getPropertyValue('top') == "180px" && styleId.getPropertyValue('left') == "0px")
                ){
                    
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

       

        else if(blankStyle.getPropertyValue('top') == "0px" && blankStyle.getPropertyValue('left') == "180px"){
			if((styleId.getPropertyValue('top') == "0px" && styleId.getPropertyValue('left') == "90px") ||
                (styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "180px")
                ){
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

        

        else  if(blankStyle.getPropertyValue('top') == "0px" && blankStyle.getPropertyValue('left') == "90px"){
			if((styleId.getPropertyValue('top') == "0px" && styleId.getPropertyValue('left') == "0px") ||
                (styleId.getPropertyValue('top') == "0px" && styleId.getPropertyValue('left') == "180px") ||
                (styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "90px")
                ){
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }

        

        else  if(blankStyle.getPropertyValue('top') == "0px" && blankStyle.getPropertyValue('left') == "0px"){
			if((styleId.getPropertyValue('top') == "0px" && styleId.getPropertyValue('left') == "90px") ||
                (styleId.getPropertyValue('top') == "90px" && styleId.getPropertyValue('left') == "0px")
                ){
                    tempT = styleId.getPropertyValue('top');
                    tempL = styleId.getPropertyValue('left')
                    id.style.top = blankStyle.getPropertyValue('top');
                    id.style.left = blankStyle.getPropertyValue('left')
                    
                    blank.style.top= tempT;
                    blank.style.left = tempL;
			}
			else{
				console.log("working")
				alert("Not MOVEABLE");
            }
        }






    } 
    return(
    <div>
        <Head>
            <link rel="stylesheet" type="text/css" href="/css/puzzlestyle.css"/>
        </Head>
        <div className="container">
            <div className="title-container">
                <h2 className="title">Puzzle Game</h2>
                <h2 className="moves"></h2>
            </div>
            <div className="game-container">
            <div id="one" className="numbers one" onClick={onClickHandler}>1</div>
            <div id="two" className="numbers two" onClick={onClickHandler}>2</div>
            <div id="three" className="numbers three" onClick={onClickHandler}>3</div>
            <div id="four" className="numbers four" onClick={onClickHandler}>4</div>
            <div id="five" className="numbers five" onClick={onClickHandler}>5</div>
            <div id="six" className="numbers six" onClick={onClickHandler}>6</div>
            <div id="seven" className="numbers seven" onClick={onClickHandler}>7</div>
            <div id="eight" className="numbers eight" onClick={onClickHandler}>8</div>
            <div id="blank" className="numbers blank blankBgColor" onClick={onClickHandler}></div>
            </div>
        </div>
    </div>
    
    )

}
export default  Puzzle;