
const Checkvalidation = (email, password) => {
    

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const passwordValid = passwordPattern.test(password);
    const emailValid = emailPattern.test(email);


    if (!emailValid) {
        return 'Email is not valid';
    }
    if (!passwordValid) {
        return 'Password is not valid';
    }

    return null
};

export default Checkvalidation;
