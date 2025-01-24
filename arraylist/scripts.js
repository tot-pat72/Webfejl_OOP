class ArrayList{
    /**
     * Ez tárolja el az Array List hosszát.
     * @type{Number}
     */
    #lenght
    #state

    get Count(){
        return this.#lenght
    }

    constructor(){
        this.#lenght = 0;
        this.#state = {};
    }

    Contains(item){
        for(const values in this.#state){
            if(this.#state[values] === item){
                return true
            }
        }
        return false
    }

    Add(item){
        //Hossz megnövelése.
        //Objektum beletétele.
        //1. A példány aktuális hosszának eltárolása egy változóba.
        const index = this.#lenght
        //2. A belső objektum tulajdonságának megadjuk a bemeneti paraméter értékét. 
        this.#state[index] = item
        // Aktuális indexxel el akarjuk érni a hozzáadott elemet a példányon keresztül.
        Object.defineProperty(this, index, {
            get: () => {
                return this.#state[index]
            },
            set: (value) => {
                this.#state[index] = value
            },
            // writable: true
            enumerable: true
        })
        //3. Inkrementáljuk a lenght tulajdonságát.
        this.#lenght++
    }

    Clear(){
        this.#lenght = 0;
        this.#state = {};
        for(const kulcs in this){
            delete this[kulcs]
        }        
    }
}

const list = new ArrayList();
const ertek_1 = {ertek: 72};
const ertek_2 = {ertek: 47};
const ertek_3 = {ertek: 81};
const ertek_4 = {ertek: 88};
const ertek_5 = {ertek: 101};

list.Add(ertek_1);
list.Add(ertek_2);
list.Add(ertek_3);

console.log(list.Contains(ertek_1));
console.log(list.Contains(ertek_2));
console.log(list.Contains(ertek_3));

console.log(list.Contains(ertek_4));
console.log(list.Contains(ertek_5));

/**
 * const kakas = {}
Object.defineProperty(kakas, 'nev', {
    value: 'Géza',
    writable: true
})
kakas.nev = 'asd'
console.log(kakas)
    
const person = {}
person.a = 'Ferenc';
person['a'] = 'Józsi';
person[0] = 'tojás';
console.log(person)
 */
