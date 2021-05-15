
 function calcular(){
    
    let total = window.document.querySelector('input#tnum')
    let aditivo = window.document.getElementById('anum') 
    let quantidade = window.document.getElementById('qnum') 
    let res =window.document.getElementById('res')
    let v1 = Number(total.value)
    let v2 = Number(aditivo.value)
    let v3 = Number(quantidade.value)
     var resultado = v3 * v2 / v1
     
     
     if ( v1>= v3) {
        
         
         res.innerHTML = ''
         res.innerHTML += ` <p>você tem que colocar <strong>${resultado}ml</strong> de estabilizador para combustível</p> `
         
     }else{
        res.innerHTML = ''
        res.innerHTML += ` <p> ERRO quantidade de litros informada  é maior  que a capacidade do tanque</p> `
     }
     

    }
  
     
       
    
       
        
    
    
    
    