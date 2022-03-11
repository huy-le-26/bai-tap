import { login } from "./login";
import { Registration } from "./Resister";

const app = document.querySelector("#app")
const setScreen = (container) => {
    app.innerHTML = ""
    app.appendChild(login.container)
    app.appendChild(Register.container)

}

const signUp = document.querySelector(".signup-link")
     
      signUp.addEventListener("click", ( )=>{
        this.container.classList.add("active");
      });

 const login = document.querySelector(".login-link")
      login.addEventListener("click", ( )=>{
        container.classList.remove("active");
      });
      
export { setScreen }
