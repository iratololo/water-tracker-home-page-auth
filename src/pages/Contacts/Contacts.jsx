import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

import css from "./Contacts.module.css"
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import Container from "components/reuse/Container/Container";
import { CustomScrollbar } from "components/Scrollbar/Scrollbar";

import { selectorContacts } from "store/contacts/selectors";
import { getContactsThunk } from "store/contacts/thunks";


const Contacts = () => {
    const items = useSelector(selectorContacts);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <Container>
            <div className={css.page}>
                <div className={css.column}>
                    <div className={css.scrolltop}>
                        <Filter />
                        
                        <Link className={css.add} to="form"><CiCirclePlus className={css.icon} /></Link>
                    </div>
                    <CustomScrollbar>
                    {items.length !== 0 && <ContactList/>}
                    </CustomScrollbar>
                </div>
                <div className={css.column}>
                    <Outlet/>
                </div>
            </div>
       </Container>
    )
}

export default Contacts