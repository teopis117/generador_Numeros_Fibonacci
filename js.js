// primero vamos a probar si estamos imprimiendo bien la serie de fibbo

const sumando=document.querySelector("#sumador");
const restando=document.querySelector("#resta");
const resultado=document.querySelector("#contador");
const cajita=document.querySelector('#caja_resultado');
const arregloFibo=[0,1];
let contador=1;




// hacerlos con eventos!!!
sumando.addEventListener('click',contadormas);

restando.addEventListener('click',contadormenos);


function calcularFibo(numero)
{
    let i;
    for(i=2;i<numero;i++)
    {
        arregloFibo[i]=arregloFibo[i-1]+arregloFibo[i-2];
        
    }
    console.log(arregloFibo);
     impirmirFinal();
}


// function limparHTML()
// {
//     while(listaTweets.firstChild)
//     {
//         listaTweets.removeChild(listaTweets.firstChild);
//     }
// }

function impirmirFinal()
{
   while(cajita.firstChild)
   {
       cajita.removeChild(cajita.firstChild);
   }
   
    const final=arregloFibo.length;
    // resultado.textContent=arregloFibo[final-1];

    const p=document.createElement('p');
    p.classList.add('agregando');
    p.textContent=arregloFibo[final-1];
    p.fontSize="100%";
    cajita.appendChild(p);
    


}







function contadormas(e)
{   

    resultado.textContent="";


//    si le damos click al mas debemos de agregarle 1 al valor del contador
contador++;

const p=document.createElement('p');
p.textContent=contador;
resultado.appendChild(p);
calcularFibo(contador);


}

function contadormenos()
{
    if(contador==1)
    {
        return;
    }
    resultado.textContent="";
    //    si le damos click al mas debemos de agregarle 1 al valor del contador
    contador--;
    if(arregloFibo[0]==='0')
    {

        return;
    }
    arregloFibo.pop();
    const p=document.createElement('p');
    p.textContent=contador;
    resultado.appendChild(p);
    calcularFibo(contador);
}



