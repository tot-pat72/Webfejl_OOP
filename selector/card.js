/**
 * Entitáns amit a manager osztály kezelni fog.
 */
class Card{
    /**
     * @type {string}
     */
    #text
    /**
     * @type {boolean}
     */
    #correct
    /**
     * @returns {string}
     */
    get text(){
        return this.#text
    }

    /**
     * @returns {boolean} 
     */
    get correct(){
        return this.#correct
    }

    /**
     * @param {string} text
     * @param {boolean} correct
     */
    constructor(text, correct){
        this.#text = text
        this.#correct = correct
    }
}