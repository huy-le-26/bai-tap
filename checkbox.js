class checkBox {
    container = document.createElement('div');
    content = document.createElement('div');
    input = document.createElement('input');
    label =  document.createElement('label ');
    
    constructor(inputType,label, name ) {
        
        this.input.type = inputType;
        this.label.innerHTML = label;
        this.label.htmlFor = name;
   
   this.content.appendChild(this.label);
   this.content.appendChild(this.input)
   this.container.appendChild(this.content)
   
    }
}
export {checkBox}
