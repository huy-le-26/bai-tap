import {inputCommon} from'./common.js'
import {checkBox} from'./checkbox.js'
import {buttonAD} from'./button.js'
import {loginSignup} from'./login-signup.js'
import {login} from'./login.js'






class Registration {
    container = document.createElement("div")
    title = document.createElement("span")

   
    inputName = new inputCommon( "text", "Enter your name")
    inputEmail = new inputCommon("email: ", "Enter your name")
    inputPassword=new inputCommon("password: ", "Enter your")
    inputConfirmpassword = new inputCommon("password: ", "Confirm a password")

    
    checkBox = new checkBox("checkbox" , "Remember me" , "logCheck " )
    ForgotPass = document.createComment('a')
    
    Button =  new buttonAD( "button" , "Confirm")
    loginSignup = new loginSignup("Not a member" , "Back to login" )


  constructor(){
      this.title.innerHTML="Registration"
      this.container.appendChild(this.title)
      this.container.appendChild(this.inputName.container)

      this.container.appendChild(this.inputEmail.container)
      this.container.appendChild(this.inputPassword.container)
      this.container.appendChild(this.inputConfirmpassword.container)

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
      this.loginSignup.loginLink.classList.add('text' , 'login-link')
      this.container.Button.value.addEventListener("click", (e) => {
        e.preventDefault()
        const nameValue = this.inputName.getValue();

        if (!nameValue) {
            this.inputName.setErrorMessage("Name cannot be empty")
        } else {
            this.inputName.setErrorMessage("")
        }
        const emailValue = this.inputEmail.getValue();

        if (!emailValue) {
            this.inputEmail.setErrorMessage("Email cannot be empty")
        } else {
            this.inputEmail.setErrorMessage("")
        }
        const passwordValue = this.inputPassword.getValue();

        if (passwordValue.length < 10) {
            this.inputPassword.setErrorMessage("Password length must be greater or equal than 6!")
        } else if (!passwordValue) {
            this.inputPassword.setErrorMessage("Password cannot be empty")
        }else{
            this.inputPassword.setErrorMessage("")
        }
        const confirmpasswordValue = this.inputConfirmpassword.getValue();

        if (confirmpasswordValue != passwordValue) {
            this.inputConfirmpassword.setErrorMessage("Confirm password not matched!")
        } else {
            this.inputConfirmpassword.setErrorMessage("")
        }
        console.log("Register");
    })
      
 }


  }


export{Registration}
