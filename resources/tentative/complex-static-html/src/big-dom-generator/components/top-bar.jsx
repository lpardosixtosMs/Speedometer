import { SearchArea } from "./search-area";
import { ActionButton, ActionGroup } from "./action-group";
import { PopOver } from "./pop-over";

import ProfileIcon from "./../assets/Smock_RealTimeCustomerProfile_18_N.svg";
import SettingsIcon from "./../assets/Smock_Settings_18_N.svg";
import BellIcon from "./../assets/Smock_Bell_18_N.svg";
import HelpIcon from "../assets/Smock_Help_18_N.svg";
import CheckmarkIcon from "../assets/Smock_Checkmark_18_N.svg";

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

const Notifications = () => {
    return (
        <div className="ui spectrum-FieldGroup spectrum-FieldGroup--toplabel spectrum-FieldGroup--vertical" role="group" aria-labelledby="checkboxgroup-label-1">
            <div className="ui spectrum-FieldLabel spectrum-FieldLabel--sizeM" id="checkboxgroup-label-1">
                Notifications
            </div>

            <div className="ui spectrum-FieldGroupInputLayout" aria-describedby="helptext-checkbox-1">
                <label className="ui spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-FieldGroup-item">
                    <input type="checkbox" className="ui spectrum-Checkbox-input" id="checkbox-0" />
                    <span className="ui spectrum-Checkbox-box">
                        <CheckmarkIcon className="ui spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" />
                    </span>
                    <span className="ui spectrum-Checkbox-label">Checkbox</span>
                </label>

                <label className="ui spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-FieldGroup-item">
                    <input type="checkbox" className="ui spectrum-Checkbox-input" id="checkbox-2" />
                    <span className="ui spectrum-Checkbox-box">
                        <CheckmarkIcon className="ui spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" />
                    </span>
                    <span className="ui spectrum-Checkbox-label">Checkbox</span>
                </label>

                <label className="ui spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-FieldGroup-item">
                    <input type="checkbox" className="ui spectrum-Checkbox-input" id="checkbox-3" checked />
                    <span className="ui spectrum-Checkbox-box">
                        <CheckmarkIcon className="ui spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" />
                    </span>
                    <span className="ui spectrum-Checkbox-label">Checkbox</span>
                </label>
            </div>
        </div>
    );
};

export const TopBar = () => {
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
                    <PopOver className="ui spectrum-Popover spectrum-Popover--bottom" role="dialog">
                        <Notifications />
                    </PopOver>
                    <ActionButton Icon={SettingsIcon} quite={false} />
                    <PopOver numOptions={NUM_OF_SETTINGS} className="ui spectrum-Popover spectrum-Popover--bottom is-open" role="dialog" />
                    <ActionButton Icon={ProfileIcon} quite={false} />
                    <PopOver className="ui spectrum-Popover spectrum-Popover--bottom-start is-open" role="dialog">
                        <ProfileCard />
                    </PopOver>
                </ActionGroup>
            </div>
        </div>
    );
};
