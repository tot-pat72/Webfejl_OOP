/**
 * @callback AddCallback
 * @param {Question} question
 */
class Manager{
    #array;

    #currentQuestionNumber;

    #selectedAnswer;

    #nextQuestionCallback;

    #nextAnswersCallback;

    #finishCallback;

    /**
     * @type {AddCallback}
     */
    #addCallback;

    constructor(array = []){
        this.#array = array;
        this.#currentQuestionNumber = 0;
        this.#selectedAnswer={};
        this.#addCallback = () => {}
    }

    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback;
    }

    setNextAnswersCallback(callback){
        this.#nextAnswersCallback = callback;
    }

    setFinishCallback(callback){
        this.#finishCallback = callback;
    }
    
    /**
     * 
     * @param {AddCallback} callback 
     */
    setAddCallback(callback){
        this.#addCallback = callback
    }

    add(question){
        this.#array.push(question);
        this.#addCallback(question)
    }

    /**
     * @returns {string}
     */
    generateTextForExport(){
        const result = []
        for(const question of this.#array){
            const line = `${question.questionText};${question.answers.join(';')};${question.rightAnswer}`
            result.push(line)
        }
        return result.join('\n')
    }

    nextQuestion(answer){
        this.#selectedAnswer[this.#currentQuestionNumber] = answer;
        this.#currentQuestionNumber++;
        if(this.#currentQuestionNumber < this.#array.length){
            this.#nextQuestionCallback(this.#array[this.#currentQuestionNumber].questionText);
            this.#nextAnswersCallback(this.#array[this.#currentQuestionNumber].answers);
        }else{
            let counter = 0;
            for(const index in this.#array){
                if(this.#array[index].rightAnswer === this.#selectedAnswer[index]){
                    counter++;
                }
            }
            this.#finishCallback(`A kérdéssor véget ért: ${this.#array.length}/${counter} válasz volt helyes.`);
        }
    }

    start(){
        this.#nextQuestionCallback(this.#array[this.#currentQuestionNumber].questionText);
        this.#nextAnswersCallback(this.#array[this.#currentQuestionNumber].answers);
    }
}