
class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.mano_lista = []
        this.area_lista = []
    }
    addmano(mano){
        this.mano_lista.push(mano);
        createRow(mano);
        Appendchild(mano.id, mano.Name())
    }

    manoId(){
        return this.mano_lista.length;
    }

    companion(id){
        return this.mano_lista(id);
    }

    Area(area){
        this.area_lista.push(area);
        const selector = document.getElementById('area');
        const option = document.createElement('option');
        selector.appendChild(option);
        option.value = area;
        option.innerHTML = area;
    }
   }
   
   class Companion{
    // TODO 5
    constructor(id, keresztnev, vezeteknev, area){
        this.id = id;
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.area = area;
        this.termek = [];
    }
    Name(){
        return this.keresztnev + ' ' + this.vezeteknev;
    }
    Product(product){
        this.termek.push(product);
    }
   }