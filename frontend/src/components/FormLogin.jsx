import React from 'react'
const defaultValues={
    email:'',
    password:'',
  }
  //{createNewUser,updateInfo,updateUserById,setUpdateInfo,setFormIsClose}
  
const FormLogin = ({createNewUser,updateInfo,updateUserById,setUpdateInfo,setFormIsClose}) => {

    //useeffect primer renderizado y cuando cambia el arreglo de dependecias
  useEffect (()=>{  //evitar ciclos infonitos
    if(updateInfo){ 
      reset(updateInfo)
    }else{
      reset(defaultValues)
    }
  },[updateInfo])

const {register,reset, handleSubmit}=useForm()

const submit =(data) =>{
  if(updateInfo){
    //update
    updateUserById(updateInfo.id,data)
    setUpdateInfo()
  }else{
    //create
    createNewUser(data)
  }
  reset(defaultValues)
  setFormIsClose(true)
}
 const handleCloseForm = () =>{
  if(updateInfo){
    reset(defaultValues)
  }
  setFormIsClose(true)
 }
  return (
    <form  className='form' onSubmit={handleSubmit(submit)}>
          <i onClick={handleCloseForm} className="form__x fa-solid fa-xmark"></i>
        <h2  className='form__title'> {updateInfo ? 'Edit User':'New User'}</h2>
        <div className='form__div'>
            <label className='form__label' htmlFor='email'>Email</label>
            <input className='form__input' placeholder='Enter your email' type="email" id="email" {...register('email')} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor='password'>Pasword</label>
            <input className='form__input' placeholder='Enter your Password'type="password" id="password" {...register('password')}/>
        </div>
        <button  className='form__btn'> {updateInfo  ?'Update' :'Create' }</button>
    </form>
  )
}

export default FormLogin