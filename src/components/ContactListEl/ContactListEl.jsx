import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import css from "./ContactListEl.module.css"

import { changeProfile } from "store/contacts/sliceContacts";

export const ContactListEl = ({ data }) => {
        const { name, number } = data;
        const dispatch = useDispatch();

        const handlerOnClick = () => {
        dispatch(changeProfile(data))
        }

  return (
          <li className={css.item}>
                <Link onClick={handlerOnClick} to='id'>
                        <div className={css.contact}>
                                <div className={css.avatar}>{name.slice(0, 1)}</div>
                                <div className={css.description}>
                                        <p className={css.name}>{name}</p>
                                        <p className={css.number}>{number}</p>
                                </div>
                        </div>
                </Link>
        </li>
        )
}