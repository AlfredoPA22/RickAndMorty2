const validation=(userData)=>{
    let errors={}
    if(userData.email===''){
        errors.email='debe ingresar un email'
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(userData.email)===false){
        errors.email='El email ingresado no tiene un formato valido.'
    }
    if(userData.email.length>35){
        errors.email='El email no debe tener mas de 35 caracteres.'
    }
    if(/\d/.test(userData.password)===false){
        errors.password='La contraseña debe tener al menos un numero.'
    }
    if(userData.password.length<6 || userData.password.length>10){
        errors.password='La contraseña debe tener entre 6 y 10 caracteres.'
    }

    return errors;
}

export default validation;