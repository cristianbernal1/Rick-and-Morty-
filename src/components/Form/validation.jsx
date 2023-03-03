const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/ 
export function validation(userData){
    let errors = {}
    
    if(!regexUser.test(userData.username)) errors.username = 'It must be an Email. :(' 
    else if (!userData.username) errors.username = 'The username cant be empty. :('
    else if (userData.username.length > 35 ) errors.username = "The username cant be more 35 characthers. :)"
    
    
    else if (!regexPassword.test(userData.password)) errors.password = 'The password must have at least one number. :3'
    else if(userData.password.length < 6 && userData.password.length > 10) errors.password = 'The password must have between 6 to 10 characters. .-.'

    return errors;
}