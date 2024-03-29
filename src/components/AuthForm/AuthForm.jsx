import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import css from "./AuthForm.module.css"


export const AuthForm = ({ type, description, act }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name?.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        act({ name, email, password })
        e.target.reset()
    }

  return (
      <form onSubmit={handlerOnSubmit} className={css.form}>
          <div className={css.container}>
              <div className={css.items}>
                  {type === "register" &&
                    <div className={css.item}>
                        <input className={css.input} id="name" type="text" name="name" required autoComplete="true"/>
                        <label className={css.label} htmlFor="name">Name</label>
                    </div>}
                    <div className={css.item}>
                        <input className={css.input} id="email" type="email" name="email" required autoComplete="true"/>
                        <label className={css.label} htmlFor="email">Email</label>
                  </div>
                  <div className={css.item}>
                        <button type="button" onClick={handleClick} className={css.icon}> {show ? <FaEye /> :<FaEyeSlash />}</button>
                        <input className={css.input} id="pass" type={show ? 'text' : 'password'} name="password" required autoComplete="true" />    
                        <label className={css.label} htmlFor="pass">Password (8 characters minimum)</label>
                    </div>
              </div>
              <button className={css.button} type='submit'>{description}</button>
                </div>
            </form>  
        );
}