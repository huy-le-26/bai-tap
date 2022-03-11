class inputCommon{
    container = document.createElement("form")
    inputField = document.createElement("div")
      input = document.createElement("input")
     errorMessega = document.createElement("div")

     constructor(inputType, placeholder){
        this.input.type = inputType
        this.input.placeholder = placeholder
        
        
        this.container.appendChild(this.input)
        this.container.appendChild(this.errorMessega)
     }

getValue = () => {
    return this.input.value;
}

setErrorMessage = (errMessage) => {
    this.errMessage.innerHTML = errMessage
}

}
export { inputCommon }
