import {inputCommon} from'./common.js'
import {checkBox} from'./checkbox.js'
import {buttonAD} from'./button.js'
import {loginSignup} from'./login-signup.js'





class login {
    container = document.createElement("div")
    title = document.createElement("span")

   
    inputEmail = new inputCommon( "email", "Enter your email")
    inputPassword = new inputCommon("password: ", "Enter your password")

    
    checkBox = new checkBox("checkbox" , "Remember me" , "logCheck " )
    ForgotPass = document.createComment('a')
    
    Button =  new buttonAD( "button" , "Login Now")
    loginSignup = new loginSignup("Not a member" , "Sign up" )


  constructor(){
      this.title.innerHTML="Login"
      this.container.appendChild(this.title)
      this.container.appendChild(this.inputEmail.container)
      this.container.appendChild(this.inputPassword.container)
      this.container.appendChild(this.checkBox.container)
      
      this.container.appendChild(ForgotPass)
      this.container.ForgotPass.innerHTML="Forgot password?"
      this.container.appendChild(this.Button.container)
      this.container.appendChild(this.loginSignup.container)
      
      
      
      
      
      
      
      this.container.classList.add('form login')
      this.inputEmail.inputField.classList.add('input-field')  
      this.inputPassword.inputField.classList.add('input-field')  
      this.checkBox.container.classList.add('checkbox-text')
      this.checkBox.content.classList.add('checkbox-content')
      this.checkBox.input.classList.add('logCheck')
      this.checkBox.label.classList.add('text')

      this.container.ForgotPass.classList.add('text')
      this.Button.container.classList.add('input-field' , 'button')
      this.loginSignup.container.classList.add('login-signup')
      this.loginSignup.text.classList.add('text')
      this.loginSignup.loginLink.classList.add('text' , 'signup-link')
      this.container.Button.value.addEventListener("click", (e) => {
        e.preventDefault()
        const EmailInput = this.inputEmail.getValue();

        if (!emailValue) {
            this.inputEmail.setErrorMessage("Email cannot be empty")
        } else {
            this.inputEmail.setErrorMessage("")
        }
        const passwordValue = this.inputPassword.getValue();
         if (!passwordValue) {
            this.inputPassword.setErrorMessage("Password cannot be empty")
        }else{
            this.inputPassword.setErrorMessage("")
    
    
      
 }





export{login}
