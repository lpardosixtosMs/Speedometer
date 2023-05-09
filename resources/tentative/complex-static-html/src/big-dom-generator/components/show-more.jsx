import { ActionButton } from "./action-group";
import { PopOver } from "./pop-over";

import MoreIcon from "./../assets/Smock_MoreCircle_18_N.svg";

export const ShowMore = () => {
    return (
        <div className="ui show-more">
            <ActionButton Icon={MoreIcon} quiet />
            <PopOver numOptions={10} className="ui spectrum-Popover spectrum-Popover--bottom" />
        </div>
    );
};
