import { Scrollbars } from 'react-custom-scrollbars-2';

export const CustomScrollbar = ({ children }) => {
    return (
        <Scrollbars autoHeight
        autoHeightMin={100}
        autoHeightMax={500}>
        {children}
      </Scrollbars>
    )
}