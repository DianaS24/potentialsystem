
//Declaración de objetos y variables
var turno=1;
var numturno;
var arraygato= new Array(9);

var celdas=document.getElementsByClassName("gato");

//Declaración de funciones
function ganador(letra)
{   //hacerlo con ciclo for

	if(
		(arraygato[0]==letra && arraygato[1]==letra && arraygato[2]==letra) ||
		(arraygato[3]==letra && arraygato[4]==letra && arraygato[5]==letra) ||
		(arraygato[6]==letra && arraygato[7]==letra && arraygato[8]==letra) ||
		(arraygato[0]==letra && arraygato[4]==letra && arraygato[8]==letra) ||
		(arraygato[2]==letra && arraygato[4]==letra && arraygato[6]==letra) ||
		(arraygato[0]==letra && arraygato[3]==letra && arraygato[6]==letra) ||
		(arraygato[1]==letra && arraygato[4]==letra && arraygato[7]==letra) ||
		(arraygato[2]==letra && arraygato[5]==letra && arraygato[8]==letra)
	   )
	{
		alert("Jugador "+letra+" GANA");
		window.location.reload(); //recarga el juego al principio
	}
//condicionar el empate 
	else 
	{
		var a=0;
		for(var x=0; x<=9; x++)
		{ 
			if(arraygato[x] == "X" || arraygato[x] == "0")
			{
				a++;
			}

			if(a == 9)
			{
				alert("Empate");
				window.location.reload();
				break;
			}

		}
	}

}



function gato(evento)
{

	var celda=evento.target; //target el elemento que disparo el evento

	if(celda.innerHTML == "") //innerHTML coloca un elemento o en este caso lo busca
	{

		 var idcelda=celda.id; 
		//var idcelda=evento.target.id;
		
		var posicionamarcar=idcelda[1]-1;
			
		numturno=turno%2;

		if(numturno!=0)
		{
			if(celda.innerHTML == "")
			{
				celda.innerHTML ="X";
				celda.style.background='#FFFB33'; //cambio color celda al hacer click
				arraygato[posicionamarcar] ="X"; //vaya guardando la posición ocupada con x o 0
				ganador("X"); //ejecuta la función que cree
			}
		}

		else if(numturno==0)
		{
			if(celda.innerHTML == "")
			{
				celda.innerHTML="0";
				celda.style.background='#DD296F';
				arraygato[posicionamarcar]="0";
				ganador("0");
			}
		}
				console.log(turno,numturno,arraygato);


		turno++;
	
	}

		else
				{
					alert('Celda ocupada');
					
				}
} //function key

function cargarDocumento()
{
	
	var n=0;

	while(n<celdas.length)
	{
	    celdas[n].addEventListener("click",gato);
	    console.log(n,celdas[n]);
	    n++;
	}

}


//Asignación de Eventos 
window.addEventListener("load",cargarDocumento);
