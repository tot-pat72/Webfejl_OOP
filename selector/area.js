class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div;

    get div(){
        return this.#div;
    }

    /**
     * @param {string} cssclass
     */
    constructor(cssclass){
        const container = this.#getContainer()
        this.#div = document.createElement('div')
        this.#div.className = cssclass
        container.appendChild(this.#div)
    }

    /**
     * @return {HTMLDivElement}
     */
    #getContainer(){
        let container = document.querySelector('.container')
        if(!container){
            container = document.createElement('div')
            container.className = 'container';
            document.body.appendChild(container)
        }
        return container
    }
}

/**
 * Ez fogja tartalmazni a kis paklinkat.
 */
class DeckArea extends Area{
    constructor(cssclass){
        super(cssclass)
    }
}

/**
 * Ez fogja tartalmazni az igaznak vélt kiválogatott kártyáinkat.
 */
class SolutionArea extends Area{
    constructor(cssclass){
        super(cssclass)
    }
}