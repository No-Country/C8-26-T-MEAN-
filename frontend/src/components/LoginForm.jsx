import React from "react";

const LoginForm = ({isShowLogin}) => {

    return (
        <div className={'${!isShowLogin ? "active" : ""} show'}>
            <div className="login-form">
                <div className="form-box solid">
                <form>
                    <h1 className="login-text">Sing in</h1>
                    <label>Usuario/E-mail</label><br/>
                    <input type="text" name="username" className="login-box"/><br/>

                    <label>Contraseña</label><br/>
                    <input type="password" name="password" className="login-box"/>
                <input type="submit" value="LOGIN" className="login-btn" />
                </form>
                </div>
             </div>
        </div>
    );
}

export default LoginForm;