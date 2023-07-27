import { SearchArea } from "./search-area";
import { ActionButton, ActionGroup } from "./action-group";
import { OptionsPopOver, VerticalPopOver } from "./pop-over";

import ProfileIcon from "./../assets/Smock_RealTimeCustomerProfile_18_N.svg";
import SettingsIcon from "./../assets/Smock_Settings_18_N.svg";
import BellIcon from "./../assets/Smock_Bell_18_N.svg";
import HelpIcon from "../assets/Smock_Help_18_N.svg";
import CheckmarkIcon from "../assets/Smock_Checkmark_18_N.svg";

import SpeedometerLogo from "./../assets/logo.png";
import classNames from "classnames";

const ContextualHelp = () => {
    return (
        <>
            <ActionButton Icon={HelpIcon} quiet={false} />
            <div role="presentation" className={classNames("spectrum-Popover", "spectrum-Popover--sizeM", "spectrum-Popover--bottom-start", "spectrum-ContextualHelp-popover")}>
                <div className="context-help-popover-body">
                    <h2 className="spectrum-ContextualHelp-heading">Todo help</h2>
                    <p className="spectrum-ContextualHelp-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </>
    );
};

const ProfileCardPopOver = () => {
    return (
        <div className="spectrum-Popover spectrum-Popover--bottom-start profile-card-popover" role="dialog">
            <div className="spectrum-Card spectrum-Card--sizeS" tabIndex="0" role="figure">
                <div className="spectrum-Card-coverPhoto"></div>
                <div className="spectrum-Card-body">
                    <div className="spectrum-Card-header">
                        <div className="spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS">John Doe</div>
                    </div>
                    <div className="spectrum-Card-content">
                        <div className="spectrum-Card-subtitle spectrum-Detail spectrum-Detail--sizeXS">
                            <p>jdoe</p>
                        </div>
                    </div>
                </div>
                <a className="spectrum-Card-footer">Sign in with a different account</a>
            </div>
        </div>
    );
};

const Notifications = () => {
    const notifications = [
        {
            title: "Notification 1",
            age: "1 day ago",
            checked: false,
        },
        {
            title: "Notification 2",
            age: "2 days ago",
            checked: false,
        },
        {
            title: "Notification 3",
            age: "2 days ago",
            checked: true,
        },
        {
            title: "Notification 4",
            age: "3 days ago",
            checked: false,
        },
        {
            title: "Notification 5",
            age: "10 days ago",
            checked: false,
        },
    ];

    const listItems = notifications.map((notification, index) =>
        <li className={classNames({ completed: notification.checked })}>
            <div className={classNames("spectrum-Checkbox", "spectrum-Checkbox--sizeS")}>
                <input type="checkbox" className="spectrum-Checkbox-input" id={`checkbox-${index}`} defaultChecked={notification.checked} />
                <div className="spectrum-Checkbox-box">
                    <CheckmarkIcon className={classNames("spectrum-Icon", "spectrum-UIIcon-Checkmark100", "spectrum-Checkbox-checkmark")} />
                </div>
                <label className="spectrum-Checkbox-label">{notification.title}</label>
                <label className="spectrum-Checkbox-label">{notification.age}</label>
            </div>
        </li>
    );

    return (
        <div className={classNames("spectrum-FieldGroup", "spectrum-FieldGroup--toplabel", "spectrum-FieldGroup--vertical", "notifications")} role="group" aria-labelledby="checkboxgroup-label-1">
            <div className="notification-tabs">
                <div className={classNames("spectrum-FieldLabel", "spectrum-FieldLabel--sizeM")} id="checkboxgroup-label-1">
                    Messages
                </div>
                <div className={classNames("spectrum-FieldLabel", "spectrum-FieldLabel--sizeM")} id="checkboxgroup-label-2">
                    Notifications
                </div>
            </div>

            <div className="notification-actions">
                <button>Mark All as Read</button>
            </div>

            <div className="spectrum-FieldGroupInputLayout" aria-describedby="helptext-checkbox-1">
                <ul className="notifications-list" role="list">
                    {listItems}
                </ul>
            </div>
        </div>
    );
};

export const TopBar = () => {
    const numSettings = 5;
    return (
        <div className="top-bar">
            <img src={SpeedometerLogo} alt="Speedometer Logo for TODO App" height={40} />
            <div className={"search-area"}>
                <SearchArea />
            </div>
            <div className="top-bar-right">
                <ActionGroup>
                    <ContextualHelp />
                    <ActionButton Icon={BellIcon} quiet={false} />
                    <VerticalPopOver>
                        <Notifications />
                    </VerticalPopOver>
                    <ActionButton Icon={SettingsIcon} quiet={false} />
                    <OptionsPopOver numOptions={numSettings} />
                    <ActionButton Icon={ProfileIcon} quiet={false} />
                    <ProfileCardPopOver />
                </ActionGroup>
            </div>
        </div>
    );
};
