class Animal {
    constructor()
    {
        this.patas = 4;
        this.cabeza = 1;
    }

    caminar()
    {
        console.log(`camino con mis ${this.patas} patas`);
    }

    jugar()
    {
        console.log("Jugando!!!");
    }
}


class Perrito extends Animal {
    ladrar()
    {
        console.log("guau!");
    }
}

class Gatito extends Animal {
    maullar()
    {
        console.log("miau!!");
    }
}

console.log("bobby");
let boby = new Perrito();
boby.ladrar();
boby.jugar();
boby.caminar();

console.log("\n mittens")
let mittens = new Gatito();

mittens.patas = 3;
mittens.caminar();
mittens.jugar();
mittens.maullar();
