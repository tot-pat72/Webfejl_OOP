/**
 * @callback NextCardCallback
 * @param {string} text
 * 
 * @callback AppendToCardSolutionCallback
 * @param {string} text
 * 
 * @callback FinishCallback
 * @param {string} result
 */

/**
 * A kommunikációért felel a deck és a solution area között.
 */
class Manager {
    /**
     * @type {card[]}
     */
    #array
    /**
     * @type {Object}
     */
    #solution
    /**
     * @type {Number}
     */
    #currentCardNumber
    /**
     * @type {NextCardCallback}
     */
    #nextCardCallback
    /**
     * @type {AppendToCardSolutionCallback}
     */
    #appendCardToSolutionCallback
    /**
     * @type {FinishCallback}
     */
    #finishCallback

    /**
     * @param {Card[]} array
     */
    constructor(array){
        this.#array = array
        this.#solution = {}
        this.#currentCardNumber = 0;
    }

    /**
     * 
     * @param {NextCardCallback} callback 
     */
    setNextCrdCallback(callback){
        this.#nextCardCallback = callback
    }

    /**
     * 
     * @param {AppendToCardSolutionCallback} callback 
     */
    setAppendCardToSolutionCallback(callback){
        this.#appendCardToSolutionCallback = callback
    }

    /**
     * 
     * @param {FinishCallback} callback 
     */
    setFinishCallback(callback){
        this.#finishCallback = callback
    }

    /**
     * Ezt a függvényt akkor hívjuk majd meg hogyha új kártyára van szükség.
     * @param {string?} answer 
     */
    nextCard(answer){
        if(answer){
            this.#solution[this.#currentCardNumber] = answer;
            this.#appendCardToSolutionCallback(answer)
        }
        this.#currentCardNumber++
        if(this.#currentCardNumber < this.#array.length){
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text)
        }
        else{
            let sum = 0
            for(const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#solution[index]){
                        sum++
                    }
                }
                else{
                    if(!this.#solution[index]){
                        sum++
                    }
                }
            }
            const result = `A feladatban elért pontszám az ${this.#array.length}/${sum}`
            this.#finishCallback(result)
        }
    }
    /**
     * Felhuzza az első kártyát
     */
    start(){
        this.#nextCardCallback(this.#array[0].text) //this.#nextCardCallback(this.#array[this.#currentCardNumber].text)
    }
}
