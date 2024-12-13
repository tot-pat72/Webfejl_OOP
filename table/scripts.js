const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person {
    constructor(obj){
        this.firstname1 = obj.firstname1;
        this.firstname2 = obj.firstname2;
        this.lastname = obj.lastname;
    }

    render(parentElement){
        const row = document.createElement('tr');
        parentElement.appendChild(row);

        const cell_3 = document.createElement('td');
        cell_3.innerHTML = this.lastname;
        row.appendChild(cell_3);
        
        const cell_1 = document.createElement('td');
        cell_1.innerHTML = this.firstname1;
        row.appendChild(cell_1);

        if(this.firstname2 !== undefined){
            const cell_2 = document.createElement('td');
            cell_2.innerHTML = this.firstname2;
            row.appendChild(cell_2);
        }
        else{
            cell_1.colSpan = "2";
        }
    }

}


function init(){
    for(const pers of array){
        const person = new Person(pers);
        person.render(document.getElementById("tbodyId"));
    }
}

init();