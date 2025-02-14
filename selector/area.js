class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div;

    get div(){
        return this.#div;
    }

    /**
     * @param {Manager} manager
     * @param {string} cssclass
     */
    constructor(cssclass, manager){
        const container = this.#getContainer()
        this.#div = document.createElement('div')
        this.#div.className = cssclass
        container.appendChild(this.#div)
        manager.setFinishCallback((eredmeny) =>{
            container.innerHTML = ''
            const div = document.createElement('div')
            div.className = 'result'
            div.textContent = eredmeny
            container.appendChild(div)
        })
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
    /**
     * 
     * @param {string} cssclass 
     * @param {Manager} manager 
     */
    constructor(cssclass, manager){
        super(cssclass, manager)
        manager.setNextCardCallback((kartyasszoveg) => { //Ez fog legutni amikor új kártyát húzunk.
            this.div.innerHTML = '';
            const skipButton = document.createElement('button')
            skipButton.textContent = 'skip'
            skipButton.addEventListener('click', ()=>{
                manager.nextCard()
            })
            this.div.appendChild(skipButton)
            const cardElement = document.createElement('div')
            cardElement.textContent = kartyasszoveg
            cardElement.className = 'largecard'
            cardElement.addEventListener('click', ()=>{
                manager.nextCard(kartyasszoveg)
            })
            this.div.appendChild(cardElement)
        })
    }
}

/**
 * Ez fogja tartalmazni az igaznak vélt kiválogatott kártyáinkat.
 */
class SolutionArea extends Area{
    /**
     * 
     * @param {string} cssclass 
     * @param {Manager} manager 
     */
    constructor(cssclass, manager){
        super(cssclass, manager)
        manager.setAppendCardToSolutionCallback((kartyaszoveg) =>{
            const card = document.createElement('div')
            card.className = 'card'
            card.textContent = kartyaszoveg
            this.div.appendChild(card)
        })
    }
}