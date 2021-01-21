let resultx2 = document.getElementById("resultx2");
let resultx2PlusOne = document.getElementById("resultx2PlusOne");
let resultx2MinusOne = document.getElementById("resultx2MinusOne")

let result = document.getElementById("result");
let resultPlusOne = document.getElementById("resultPlusOne");
let resultMinusOne = document.getElementById("resultMinusOne")


function resultNormal(a){
  if(a.length==0){
    return "00";
  }else if (a < 10 && a.length == 1){
      retorno = "0" + a.toString();
      return retorno;
  } else {
      return a;
  }
}



function multiByTwo(a){
    let retorno;
    if (a == 00 | a == 01 | a == 02 | a == 03 | a == 04){
        retorno = "0" + a*2;
        return retorno;
    } else if( a >= 50 && a < 55){
        retorno = a*2;
        retorno -= 100;
        retorno = "0" + retorno;
        return retorno;

    } else if(a >= 55) {
        retorno = a*2;
        retorno -= 100;
        return retorno.toString();
    } else {
        return (a*2).toString();
    }
    
}



function addOne(a){
    let addOneArray = [];
    let element = 0;
      
    for(let i=0; i < a.length; i++){
      if (a[i][0] != 9){
          element = (parseInt(a[i][0])+1).toString();
      }else {
        element = "0";
      }if (a[i][1] != 9){
        element += (parseInt(a[i][1])+1).toString();
      }else{
        element += "0";
      }
      addOneArray.push(element);
    }
    return addOneArray;
  }

  function substractOne(a){
    let substractOneArray = [];
    let element = 0;
      
    for(let i=0; i < a.length; i++){
      if (a[i][0] != 0){
          element = (parseInt(a[i][0])-1).toString();
      }else {
        element = "9";
      }if (a[i][1] != 0){
        element += (parseInt(a[i][1])-1).toString();
      }else{
        element += "9";
      }
      substractOneArray.push(element);
    }
    return substractOneArray;
  }

  function arrayDisplay(a){
    let retorno = "";
    for(let i=0; i < a.length; i++){
      if(i==4|i==9|i==14){
        retorno += a[i]+" |" + " ";
      }else{
        retorno += a[i]+" ";
      }
     }
   return retorno;
  }

  function arrayDisplaySumados(a){
    let retorno = "";
    for(let i=0; i < a.length; i++){
      if(i==1|i==2|i==0){
        retorno += a[i]+" |" + " ";
      }else{
        retorno += a[i]+" ";
      }
     }
   return retorno;
  }


  function sumados(a){
    let sumaProvisoria = 0;
    let retorno = [];
    
    for(let i=0; i<20; i++){
      sumaProvisoria += parseInt(a[i]);
      if (i==4){
            retorno.push(sumaProvisoria);
            sumaProvisoria=0;
      }else if(i==9){
            retorno.push(sumaProvisoria);
            sumaProvisoria=0;
      }else if(i==14){
            retorno.push(sumaProvisoria);
            sumaProvisoria=0;
      }else if(i==19){
            retorno.push(sumaProvisoria);
            sumaProvisoria=0;
      }
    }
    return retorno;
  }


  function sumarEntreCifras(a){
    let tempA=0;
    let tempB=0;
    let tempC=0;
    let retorno=0;
    if(a>99 && a<1000){
      tempA = a.toString().slice(0,2);
      tempB = a.toString().slice(2,3);
      retorno = parseInt(tempA) + parseInt(tempB); 
    }else if(a>1000 && a<10000){
      tempA = a.toString().slice(0,2);
      tempB = a.toString().slice(2,4);
      retorno = parseInt(tempA) + parseInt(tempB); 
    }else if(a>=10000){
      tempA = a.toString().slice(0,2);
      tempB = a.toString().slice(2,3);
      tempC = a.toString().slice(3,5);
      retorno = parseInt(tempA) + parseInt(tempB) + parseInt(tempC); 
    }
    
    return retorno;
  }

  //RETORNA ARRAYS DE ARRAYS
  function multiByResult(numeroNormal,numeroSumado){
    let retorno = [];
    let tempMulti;
    retorno.push(numeroSumado);
    for(let i=0; i < numeroNormal.length; i++){
      tempMulti = numeroNormal[i]*numeroSumado;
        while(tempMulti > 99 ){
        tempMulti = sumarEntreCifras(tempMulti);    
        }
      retorno.push(tempMulti);
    }
    return retorno;
  }
  
  function displaySquare(a){
    let retorno;
    if (a[0]<10){
      retorno ="0" +a[0]+ "<br>";
    }else{
      retorno ="    " +a[0]+ "<br>";
    }
    
    for(let i=1; i<a.length; i++){
      if(a[i]<10){
        retorno += " "+"0"+a[i];  
      }else {
        retorno += " "+a[i];
      }
      
    }
    return retorno;
  }



function btnCalcular(){    
    let vAddOne;
    let vAddOneXTwo;
    let vMinusOne;
    let vMinusOneXTwo;
    let vSumados;
    let vSumadosXTwo;
    let retorno= [];
    let retornoX2 = [];

    let numero01 = document.getElementById("numero01").value;
    let numero02 = document.getElementById("numero02").value;
    let numero03 = document.getElementById("numero03").value;
    let numero04 = document.getElementById("numero04").value;
    let numero05 = document.getElementById("numero05").value;
    let numero06 = document.getElementById("numero06").value;
    let numero07 = document.getElementById("numero07").value;
    let numero08 = document.getElementById("numero08").value;
    let numero09 = document.getElementById("numero09").value;
    let numero10 = document.getElementById("numero10").value;
    let numero11 = document.getElementById("numero11").value;
    let numero12 = document.getElementById("numero12").value;
    let numero13 = document.getElementById("numero13").value;
    let numero14 = document.getElementById("numero14").value;
    let numero15 = document.getElementById("numero15").value;
    let numero16 = document.getElementById("numero16").value;
    let numero17 = document.getElementById("numero17").value;
    let numero18 = document.getElementById("numero18").value;
    let numero19 = document.getElementById("numero19").value;
    let numero20 = document.getElementById("numero20").value;
    
    retorno.push(resultNormal(numero01));
    retorno.push(resultNormal(numero02));
    retorno.push(resultNormal(numero03));
    retorno.push(resultNormal(numero04));
    retorno.push(resultNormal(numero05));
    retorno.push(resultNormal(numero06));
    retorno.push(resultNormal(numero07));
    retorno.push(resultNormal(numero08));
    retorno.push(resultNormal(numero09));
    retorno.push(resultNormal(numero10));
    retorno.push(resultNormal(numero11));
    retorno.push(resultNormal(numero12));
    retorno.push(resultNormal(numero13));
    retorno.push(resultNormal(numero14));
    retorno.push(resultNormal(numero15));
    retorno.push(resultNormal(numero16));
    retorno.push(resultNormal(numero17));
    retorno.push(resultNormal(numero18));
    retorno.push(resultNormal(numero19));
    retorno.push(resultNormal(numero20));

    retornoX2.push(multiByTwo(numero01));
    retornoX2.push(multiByTwo(numero02));
    retornoX2.push(multiByTwo(numero03));
    retornoX2.push(multiByTwo(numero04));
    retornoX2.push(multiByTwo(numero05));
    retornoX2.push(multiByTwo(numero06));
    retornoX2.push(multiByTwo(numero07));
    retornoX2.push(multiByTwo(numero08));
    retornoX2.push(multiByTwo(numero09));
    retornoX2.push(multiByTwo(numero10));
    retornoX2.push(multiByTwo(numero11));
    retornoX2.push(multiByTwo(numero12));
    retornoX2.push(multiByTwo(numero13));
    retornoX2.push(multiByTwo(numero14));
    retornoX2.push(multiByTwo(numero15));
    retornoX2.push(multiByTwo(numero16));
    retornoX2.push(multiByTwo(numero17));
    retornoX2.push(multiByTwo(numero18));
    retornoX2.push(multiByTwo(numero19));
    retornoX2.push(multiByTwo(numero20));
    
    vMinusOne = substractOne(retorno);
    vSumados = sumados(retorno);
    vAddOne = addOne(retorno);
    

    vMinusOneXTwo = substractOne(retornoX2);
    vSumadosXTwo = sumados(retornoX2);
    vAddOneXTwo = addOne(retornoX2);

    
    

    //RESULTADOS X2
    resultx2PlusOne.innerHTML = arrayDisplay(vAddOneXTwo);
    resultx2.innerHTML = arrayDisplay(retornoX2);
    resultx2MinusOne.innerHTML= arrayDisplay(vMinusOneXTwo);
    //RESULTADOS NORMALES
    resultPlusOne.innerHTML = arrayDisplay(vAddOne);
    result.innerHTML = arrayDisplay(retorno);
    resultMinusOne.innerHTML= arrayDisplay(vMinusOne);
    //RESULTADOS NORMALES SUMADOS Y MULTIPLICADOS
    resultsAddedOne.innerHTML = displaySquare(multiByResult(retorno.slice(0,5),vSumados.slice(0,1)));
    resultsAddedTwo.innerHTML = displaySquare(multiByResult(retorno.slice(5,10),vSumados.slice(1,2)));
    resultsAddedThree.innerHTML = displaySquare(multiByResult(retorno.slice(10,15),vSumados.slice(2,3)));
    resultsAddedFour.innerHTML = displaySquare(multiByResult(retorno.slice(15,20),vSumados.slice(3,4)));
    //RESULTADOS X2 SUMADOS Y MULTIPLICADOS 
    resultsx2AddedOne.innerHTML = displaySquare(multiByResult(retornoX2.slice(0,5),vSumadosXTwo.slice(0,1)));
    resultsx2AddedTwo.innerHTML = displaySquare(multiByResult(retornoX2.slice(5,10),vSumadosXTwo.slice(1,2)));
    resultsx2AddedThree.innerHTML = displaySquare(multiByResult(retornoX2.slice(10,15),vSumadosXTwo.slice(2,3)));
    resultsx2AddedFour.innerHTML = displaySquare(multiByResult(retornoX2.slice(15,20),vSumadosXTwo.slice(3,4)));
    
    console.log(displaySquare(multiByResult(retornoX2.slice(0,5),vSumadosXTwo.slice(0,1))));
    console.log(document.getElementById("resultsx2AddedOneSub"));
    document.getElementById("resultadosPorDos").innerHTML = "Resultados x2"
    document.getElementById("resultadosNormales").innerHTML = "Resultados sin Multiplicar"
}