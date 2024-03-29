import {  useDispatch, useSelector } from "react-redux";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from "./UpdateForm.module.css"

import {selectorContacts} from "store/contacts/selectors";
import { updateContactsThunk } from "store/contacts/thunks";
import { changeProfileName, changeProfileNumber } from "store/contacts/sliceContacts";




export const UpdateForm = () => {
    const items = useSelector(selectorContacts);
    const profile = useSelector((state) => state.contacts.contacts.profile);
    const { name, number } = profile;
    const dispatch = useDispatch();


    const handlerOnChange = ({ target: { name, value } }) => {
        if (name === "name") {
            dispatch(changeProfileName(value))
        }
        if (name === "number") {
            dispatch(changeProfileNumber(value))
        }
    }

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        const twin = items.find(({ name : user }) => user.toLowerCase() === name.toLowerCase());
        if (twin) {
             Report.failure(
            'error',
            'There is already a contact with this name',
            'Okay',
            );
        } else {
            Notify.success('A contact successfully edited');
            dispatch(updateContactsThunk())
            e.target.reset()
        }
    }

    return (
      
      <form onSubmit={handlerOnSubmit} className={css.form}>
              <p className={css.event}>Update contact</p>
              <div className={css.items}>
                    <div className={css.item}>
                        <input onChange={handlerOnChange}  className={css.input} id="name" type="text" name="name" value={name} required />
                        <label className={css.label} htmlFor="name">Name</label>
                    </div>
                    <div className={css.item}>
                        <input onChange={handlerOnChange}  className={css.input} id="tel" type="tel" name="number" value={number} required/>
                        <label className={css.label} htmlFor="tel">Number</label>
              </div>
              </div>
              <button className={css.button} type='submit'>Update</button>
            </form>
        );
}