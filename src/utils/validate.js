export const checkValidateData = (email, password,name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isName = /^[A-Za-zÀ-ÿ]+([ -][A-Za-zÀ-ÿ]+)*$/.test(name);

    if(!isEmailValid && !isPasswordValid) return "Email and Password not valid";
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isName) return "Name is not valid";
    
    return null;
}