class loginSignup {
    container = document.createElement('div')
    text = document.createElement('span')
    loginLink = document.createElement('a')

    constructor( value ,text ){
        this.text.innerHTML= value
        this.loginLink.innerHTML=text
       
        this.text.appendChild(this.loginLink)
        this.container.appendChild(this.text)

    }
}export{loginSignup}