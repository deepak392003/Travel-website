console.log("Hey this is my js code");

// First We work on Login and Sign Up form

// last message section

let form = document.querySelector('#form');
let name = document.querySelector('#name');
let Email = document.querySelector('#email');
let textarea = document.querySelector('#area');

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    let errors = [];


    // name section

    let nameValue = name.value.trim();

    if (nameValue.length < 4) {
      errors.push("Please enter a name which have four or more char");
    }

    // email section
     let emailValue = Email.value.trim();
     

     if(
      !emailValue.includes('@') ||
      !emailValue.includes('.') ||
       emailValue.indexOf('@') === 0 ||
        emailValue.lastIndexOf('.') < emailValue.indexOf('@') + 2 ||
        emailValue.endsWith('.')) {

          errors.push("Please Enter a valid email address");
        }

        // for the textarea

        let messageValue = textarea.value.trim();

        if(messageValue.length > 0){

            console.log("Good work dude");
        }

        // errors

        if(errors.length > 0){
          event.preventDefault();
          alert(errors);
        }
        else{

            alert("Your message has been sent to the browser's local storage");
        }

    //  localStorage
    let contactForm = JSON.parse(localStorage.getItem('contactForm')) || [];

    contactForm.push({
        name : nameValue,
        email : emailValue,
        message : messageValue,
        date : new Date().toLocaleString()
    })
     
    localStorage.setItem('contactForm', JSON.stringify(contactForm));

    // reset your form
    form.reset(); 

    
    alert("Your message has been saved");
        
  })