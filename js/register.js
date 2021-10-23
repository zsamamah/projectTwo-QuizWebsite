//Navbar 

function register(){
    let fname = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    
    
    localStorage.setItem("fname",fname);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    
    }
    
    
    //Registration form
    
    
        function Register(fname,email,password){
            this.email=email;
            this.fname=fname;
            this.password=password;
            }
            
    //         Register.holder= [];
            
    //         localStorage.setItem('data', JSON.stringify(Register.holder));
            
            
    //         console.log(Register.holder);
    