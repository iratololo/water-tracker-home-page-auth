import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

import css from "./Loader.module.css"
import { globalLoadingSelector } from 'store/root/selectors';

export const Loader = () => {
    const isLoading = useSelector(globalLoadingSelector);
    return (
        isLoading ?<div className={css.loader}>
            <ColorRing visible={true} height="150" width="150" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
        </div>:<></>
    )
}