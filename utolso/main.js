class Person{
    #name
    #birth
    #mood

    constructor(name, birth, mood){
        this.#name = name
        this.#birth = birth
        this.#mood = mood
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value
    }

    get birth() {
        return this.#birth
    }

    set mood(value) {
        this.#mood = value
    }
}

const person = new Person("Ferenc", "1999", "angry")

class PersonView{
    #person
    #span

    constructor(person){
        this.#person = person
        const div = document.createElement("div")
        document.body.appendChild(div)
        div.innerText = `${this.#person.name} - ${this.#person.birth}`
        const span = document.createElement("span")
        this.#span = span
        document.body.appendChild(span)
    }
    
    set footer(value) {
        this.#span.textContent = value
    }
}

const personView = new PersonView(person)

person.mood = 'happy'
console.log(person)

const personView_2 = new PersonView(person)
personView_2.footer = "lábléc"