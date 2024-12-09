
class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.mano_lista = []
    }
    addmano(mano){
        this.mano_lista.push(mano)
        createRow(mano);
    }
   }
   
   class Companion{
    // TODO 5
    constructor(id, keresztnev, vezeteknev, reszleg){
        this.id = id;
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.reszleg = reszleg;
        this.termek = []
    }
    Name(){
        return this.keresztnev + this.vezeteknev;
    }
    Product(product){
        this.termek.push(product);
    }
   }