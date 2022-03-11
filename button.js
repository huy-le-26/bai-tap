class buttonAD {
    container = document.createComment('div')
    input = document.createElement('input')

    constructor(inputType , value ){
        this.input.type = inputType;
        this.input.value = value
        this.container.appendChild(this.input)
    }
   
}
export {button}
