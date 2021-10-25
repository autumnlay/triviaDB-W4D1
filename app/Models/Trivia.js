export class Trivia {
    constructor(data) {
        this.question = data.question
    }
    get Teplate() {
        return `<div> ${this.question}`
    }
}
