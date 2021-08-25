//Ejercicio 1

const makeFigure = function(size){

    var num //número introducido
     
    if (num < 5) //comprobando que no sea menor a 5
     break

    var NumArray = new Array(num)//primer array
    var VarArray = new Array(num)
    
    for(let i = num; i < num; i++)//recorrido por todo el array
        if (i == 0 || i == num-1)//comprobando si esel principio o el final, si lo es, pongo todo en 1
            VarArray[i]="1"
        else
            for(i = num; i < num-1; i++)
                VarArray[i]="1"
        
        NumArray[i] = VarArray //arrays que van adentro


    return figure
}