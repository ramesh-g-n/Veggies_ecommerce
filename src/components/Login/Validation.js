
const Validation = (values) => {

    let errors = {};
    if(!values.firstname){
        errors.firstname="FirstName is required"
    }
    if(!values.lastname){
        errors.lastname= " LastName is required"
    }
    if(!values.username){
        errors.username= " username is required"
    }
    if(!values.email){
        errors.email= " email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email= " email is invalid"
    }
    if(!values.password){
        errors.password = "password is required"
    }
    if(!values.phone){
        errors.phone = "Phone number is required"
    }else if(values.password.length < 3){
        errors.password = "Password must be more than 3 Charecters"
    }
  return errors;
}

export default Validation
