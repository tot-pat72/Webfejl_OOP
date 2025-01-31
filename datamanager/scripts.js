/**
 * @typedef {{nev: String, eletkor: Number}} Person
 * @callback Updatecallback
 * @param {Person[]} Person
 * @returns {void}
 */
class Datamanager{
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {Updatecallback updatecallback}
     */
    #updatecallback
    /**
     * @param {Person[]} array
     */
    constructor(array = []){
        this.#array = array
        this.#updatecallback = () => {}
    }
    /**
     * 
     * @param {Updatecallback} callback 
     */
    setUpdateCallback(callback){
        this.#updatecallback = callback
        this.#updatecallback(this.#array)
    }
    /**
     * 
     * @param {Person} item 
     */
    add(item){
        this.#array.push(item)
        this.#array
    }
    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){
        const result = []
        for(const elem of this.#array){
            if(elem.eletkor === age){
                result.push(elem)
            }
        }
        this.#updatecallback(result)
    }
    /**
     * 
     * @param {String} name 
     */
    filterName(name){
        const result = []
        for(const elem of this.#array){
            if(elem.nev.includes(name)){
                result.push(elem)
            }
        }
        this.#updatecallback(result)
    }
}

class DataTable{
    /**
     * 
     * @param {Datamanager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        datamanager.setUpdateCallback(
            (persons) => {
                tbody.innerHTML = ''
                for(const pers of persons){
                    const tr = document.createElement('tr')
                    tbody.appendChild(tr)

                    const td_1 = document.createElement('td')
                    td_1.innerHTML = pers.nev
                    tr.appendChild(td_1)

                    const td_2 = document.createElement('td')
                    td_2.innerHTML = pers.eletkor
                    tr.appendChild(td_2)
                }
            }
        )
    }
}
const datamanager = new Datamanager([{nev: 'Feri', eletkor: 17}])
const table = new DataTable(datamanager)

const input = document.createElement('input')
input.addEventListener('input', function(e){
    
})