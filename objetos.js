
class Animal 
{
    constructor()
    {
        this.cabeza = 1;
        this.patas = 4;
    }

    caminar()
    {
        console.log("camino con mis " + this.patas + " patas");
    }

    jugar()
    {
        console.log("estoy jugando!!");
    }
}

class Perrito extends Animal{
    ladrar()
    {
        console.log("guau!!");
    }
}

class Gatito extends Animal {
    maullar()
    {
        console.log("miau!!");
    }
}


let un_gatito_normal = new Gatito();

console.log("un_gatito_normal");
un_gatito_normal.jugar();
un_gatito_normal.caminar();
un_gatito_normal.maullar();

console.log("\na boby le falta una patita");
let boby = new Perrito();

boby.patas = 3;  // a boby le falta una patita
boby.jugar();
boby.caminar();
boby.ladrar();
