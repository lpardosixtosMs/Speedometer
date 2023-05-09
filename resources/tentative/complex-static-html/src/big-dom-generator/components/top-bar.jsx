import { SearchArea } from "./search-area";
import { ActionButton, ActionGroup } from "./action-group";
import { PopOver } from "./pop-over";

import ProfileIcon from "./../assets/Smock_RealTimeCustomerProfile_18_N.svg";
import SettingsIcon from "./../assets/Smock_Settings_18_N.svg";
import BellIcon from "./../assets/Smock_Bell_18_N.svg";
import HelpIcon from "../assets/Smock_Help_18_N.svg";

import SpeedometerLogo from "./../assets/logo.png";

const ContextualHelp = () => {
    return (
        <>
            <ActionButton Icon={HelpIcon} quite={false} />
            <PopOver role="presentation" className="ui spectrum-Popover spectrum-Popover--sizeM spectrum-Popover--bottom-start spectrum-ContextualHelp-popover">
                <div className="ui">
                    <h2 className="ui spectrum-ContextualHelp-heading">Permission required</h2>
                    <p className="ui spectrum-ContextualHelp-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </PopOver>
        </>
    );
};

const ProfileCard = () => {
    return (
        <div className="ui spectrum-Card spectrum-Card--sizeS" tabIndex="0" role="figure">
            <div className="ui spectrum-Card-coverPhoto"></div>
            <div className="ui spectrum-Card-body">
                <div className="ui spectrum-Card-header">
                    <div className="ui spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS">John Doe</div>
                </div>
                <div className="ui spectrum-Card-content">
                    <div className="ui spectrum-Card-subtitle spectrum-Detail spectrum-Detail--sizeXS">johndoe@email.com</div>
                </div>
            </div>
            <a href="#" className="ui spectrum-Card-footer">
                Sign in with a different account
            </a>
        </div>
    );
};

export const TopBar = () => {
    const NUM_OF_NOTIFICATIONS = 10;
    const NUM_OF_SETTINGS = 5;
    return (
        <div className="ui top-bar">
            <img className="ui" src={SpeedometerLogo} alt="Speedometer Logo for TODO App" height={40} />
            <h2 className="ui spectrum-Heading spectrum-Heading--sizeL">TODO App</h2>
            <div className={`ui search-area`}>
                <SearchArea />
            </div>
            <div className="ui top-bar-right">
                <ActionGroup>
                    <ContextualHelp />
                    <ActionButton Icon={BellIcon} quite={false} />
                    <PopOver numOptions={NUM_OF_NOTIFICATIONS} className="ui spectrum-Popover spectrum-Popover--bottom" role="dialog" />
                    <ActionButton Icon={SettingsIcon} quite={false} />
                    <PopOver numOptions={NUM_OF_SETTINGS} className="ui spectrum-Popover spectrum-Popover--bottom" role="dialog" />
                    <ActionButton Icon={ProfileIcon} quite={false} />
                    <PopOver className="ui spectrum-Popover spectrum-Popover--bottom-start" role="dialog">
                        <ProfileCard />
                    </PopOver>
                </ActionGroup>
            </div>
        </div>
    );
};
