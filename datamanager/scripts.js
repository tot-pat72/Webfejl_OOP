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
    orderBy(compareName) {
        const result = []
        for(const i of this.#array){
            result.push(i);
        }
        for(let i = 0; i < result.length - 1; i++){
            for(let j = i + 1; j < result.length; j++){
                if(compareName(result[i], result[j]) > 0){
                    const tmp = result[i];
                    result[i] = result[j];
                    result[j] = tmp;
                }
            }
        }
        this.#updatecallback(result);
    }
}

class DataTable{
    #tbody
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
                this.#rendertable(persons);
            }
        )
    }
    #rendertable(persons){
        this.#tbody.innerHTML = "";
        for(const person of persons){
            const tr = document.createElement("tr");
            this.#tbody.appendChild(tr);

            const td_1 = document.createElement("td");
            td_1.innerHTML = person.nev;
            tr.appendChild(td_1);

            const td_2 = document.createElement("td");
            td_2.innerHTML = person.eletkor;
            tr.appendChild(td_2);

        }
    }
}
const datamanager = new Datamanager([{nev: 'Feri', eletkor: 17}])
const table = new DataTable(datamanager)

const input = document.createElement('input')
document.body.appendChild(input);
input.addEventListener('input', function(e){
    const value = Number(input.value);
    datamanager.filter((pers)=>{
        return pers.eletkor === value;
    })
})

const input_2 = document.createElement("input");
document.body.appendChild(input_2);
input_2.type = "file";
input_2.addEventListener('change', function(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) =>{
        const filecontent = reader.result;
        const splitcontent = filecontent.split("\n");
        for(const split of splitcontent){
            const data = split.split(";");
            const pers = {
                nev: data[0],
                eletkor:Number( data[1])
            };
            datamanager.Add(pers);
        };
    };
});