import { ActionButton } from "./action-group";

import MoreIcon from "./../assets/Smock_MoreCircle_18_N.svg";

const PopOver = () => {
    const numOptions = 10;
    const children = [];
    for (let i = 0; i < numOptions; i++) {
        children.push((
            <li key={i} className="ui spectrum-Menu-item" role="menuitem" tabindex="0">
                <span className="ui spectrum-Menu-itemLabel">Hidden Option {i}</span>
            </li>
        ));
    }

    return (
        <div className="ui spectrum-Popover spectrum-Popover--bottom">
            <ul class="ui spectrum-Menu" role="menu">
                {children}
            </ul>
        </div>
    );
}

export const ShowMore = () => {
    return (
        <div className="ui show-more">
            <ActionButton Icon={MoreIcon} quiet />
            <PopOver />
        </div>
    );
};
