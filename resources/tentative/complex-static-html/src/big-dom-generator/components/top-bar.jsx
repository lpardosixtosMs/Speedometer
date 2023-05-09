import { SearchArea } from "./search-area";
import { ActionButton, ActionGroup } from "./action-group";
import { PopOver } from "./pop-over";

import ProfileIcon from "./../assets/Smock_RealTimeCustomerProfile_18_N.svg";
import SettingsIcon from "./../assets/Smock_Settings_18_N.svg";
import BellIcon from "./../assets/Smock_Bell_18_N.svg";

import SpeedometerLogo from "./../assets/logo.png";

export const TopBar = () => {
    const NUM_OF_NOTIFICATIONS = 10;
    const NUM_OF_SETTINGS = 5;
    const NUM_OF_PROFILE_OPTIONS = 3;
    return (
        <div className="ui top-bar">
            <img className="ui" src={SpeedometerLogo} alt="Speedometer Logo" height={40} />
            <h2 className="ui spectrum-Heading spectrum-Heading--sizeL">TODO App</h2>
            <div className={`ui search-area`}>
                <SearchArea />
            </div>
            <div className="ui top-bar-right">
                <ActionGroup>
                    <ActionButton Icon={BellIcon} quite={false} />
                    <PopOver  numOptions={NUM_OF_NOTIFICATIONS} className="ui spectrum-Popover spectrum-Popover--bottom"  />
                    <ActionButton Icon={SettingsIcon} quite={false} />
                    <PopOver numOptions={NUM_OF_SETTINGS} className="ui spectrum-Popover spectrum-Popover--bottom" />
                    <ActionButton Icon={ProfileIcon} quite={false} />
                    <PopOver numOptions={NUM_OF_PROFILE_OPTIONS} className="ui spectrum-Popover spectrum-Popover--bottom" />
                </ActionGroup>
            </div>
        </div>
    );
};
