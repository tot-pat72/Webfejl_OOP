class ArrayList{
    /**
     * Ez tárolja el az Array List hosszát.
     * @type{Number}
     */
    #lenght
    #state
    #ArrayTable

    get Count(){
        return this.#lenght
    }

    constructor(array = undefined){
        this.#lenght = 0;
        this.#state = {};
        this.#ArrayTable = array;
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
        if(this.#ArrayTable) {
            this.#ArrayTable.addPersonRow(item)
        }
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

class ArrayHtmlElement extends HTMLElement{
    #tbody
    constructor(){
        super();
    }
    connectedCallback(){
        const table = document.createElement('table')
        this.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)
    }
    /**
     * 
     * @param {{nev: string, eletkor: Number}} 
     */
    addPersonRow(item){
        const tr = document.createElement('tr')
        this.#tbody.appendChild(tr)

        const td_1 = document.createElement('td')
        td_1.innerHTML = item.nev
        tr.appendChild(td_1)

        const td_2 = document.createElement('td')
        td_2.innerHTML = item.eletkor
        tr.appendChild(td_2)
    }
}
customElements.define('array-table', ArrayHtmlElement)
const ArrayTable = new ArrayHtmlElement()
document.body.appendChild(ArrayTable)
ArrayTable.addPersonRow({nev: 'Gábor', eletkor: 45})

const arraylist = new ArrayList(ArrayTable);
arraylist.Add({nev:"János", eletkor: 88})

const button = document.createElement("button");
button.innerHTML = "Hozzáadás"
document.body.appendChild(button)

button.addEventListener("click", () => {
    const newPerson = {nev: "József", eletkor:101}
    arraylist.Add(newPerson);
})