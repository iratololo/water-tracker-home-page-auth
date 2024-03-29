import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import css from "./ContactCard.module.css"
import { UpdateForm } from "components/UpdateForm/UpdateForm";

import { removeContactsThunk } from "store/contacts/thunks";

const ContactCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.contacts.contacts.profile);
    const handlerOnClick = () => {
        Confirm.show(
            'Deletion',
            'Are you sure you want to delete this contact?',
            'Yes',
            'No',
            () => {
                dispatch(removeContactsThunk(id))
                navigate('/contacts')
            }
            );
    }

  return (
        <div className={css.card}>
            <UpdateForm />
            <button onClick={handlerOnClick} className={css.button} >Remove</button>
        </div>
  )
}

export default ContactCard