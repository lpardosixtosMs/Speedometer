import DeleteIcon from "../assets/Smock_Delete_18_N.svg";
import CutIcon from "../assets/Smock_Cut_18_N.svg";
import FilterIcon from "../assets/Smock_Filter_18_N.svg";
import ViewListIcon from "../assets/Smock_ViewList_18_N.svg";
import GraphTrendIcon from "../assets/Smock_GraphTrend_18_N.svg";
import CalendarIcon from "../assets/Smock_Calendar_18_N.svg";
import GraphGanttIcon from "../assets/Smock_GraphGantt_18_N.svg";
import ClockIcon from "../assets/Smock_Clock_18_N.svg";
import { ActionButton, ActionGroup } from "./action-group";
import { DatePicker } from "./date-picker";
import { PopOver } from "./pop-over";
import ChevronUpIcon from "../assets/Smock_ChevronUp_18_N.svg";
import ChevronDownIcon from "../assets/Smock_ChevronDown_18_N.svg";

const Divider = () => {
    return <div className="ui divider spectrum-Divider spectrum-Divider--sizeS spectrum-Divider--vertical" />;
};

const Analytics = () => {
    return (
        <div className="ui spectrum-ProgressBar spectrum-Meter--sizeS is-positive" value="50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: 200 }}>
            <div className="ui spectrum-FieldLabel spectrum-FieldLabel--sizeS spectrum-ProgressBar-label">Storage Space</div>
            <div className="ui spectrum-FieldLabel spectrum-FieldLabel--sizeS spectrum-ProgressBar-percentage">50%</div>
            <div className="ui spectrum-ProgressBar-track">
                <div className="ui spectrum-ProgressBar-fill" style={{ width: "50%" }}></div>
            </div>
        </div>
    );
};

const Stepper = () => {
    return (
        // style="--mod-actionbutton-icon-size:10px;"
        <>
            <label for="stepper-m" class="spectrum-FieldLabel spectrum-FieldLabel--sizeS">
                Sprints
            </label>
            <div className="ui spectrum-Stepper">
                {/* style="--spectrum-textfield-border-color:rgb(0,0,0);--spectrum-textfield-border-width:1px;" */}

                <div className="ui spectrum-Textfield spectrum-Textfield--sizeM spectrum-Stepper-textfield" id="stepper-m">
                    <input type="text" placeholder="1" autocomplete="" className="ui spectrum-Textfield-input spectrum-Stepper-input" />
                </div>

                <span className="ui spectrum-Stepper-buttons">
                    <button aria-haspopup="false" aria-pressed="false" className="ui spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-Stepper-stepUp">
                        <ChevronUpIcon className="ui spectrum-Icon spectrum-UIIcon-ChevronUp100 spectrum-Icon--medium spectrum-ActionButton-icon" />
                    </button>

                    <button aria-haspopup="false" aria-pressed="false" className="ui spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-Stepper-stepDown">
                        <ChevronDownIcon className="ui spectrum-Icon spectrum-UIIcon-ChevronDown100 spectrum-Icon--medium spectrum-ActionButton-icon" />
                    </button>
                </span>
            </div>
        </>
    );
};

export const Ribbon = () => {
    return (
        <div className="ui ribbon">
            <ActionGroup>
                <ActionButton Icon={ClockIcon} label={"Send Reminder"} quiet />
                <PopOver numOptions={4} className="ui spectrum-Popover spectrum-Popover--bottom" />
                <ActionButton Icon={ViewListIcon} label={"Backlog"} quiet />
                <ActionButton Icon={GraphTrendIcon} label={"Analytics"} quiet />
                <PopOver className="ui spectrum-Popover spectrum-Popover--bottom">
                    <Analytics />
                </PopOver>
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <ActionButton Icon={CutIcon} quiet />
                <ActionButton Icon={DeleteIcon} quiet />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <ActionButton Icon={CalendarIcon} quiet />
                <ActionButton Icon={GraphGanttIcon} label={"Timeline"} quiet />
                <ActionButton Icon={FilterIcon} quiet />
                <PopOver className="ui spectrum-Popover spectrum-Popover--bottom">
                    <div class="spectrum-Textfield">
                        <label for="textfield-1" class="spectrum-FieldLabel spectrum-FieldLabel--sizeS">
                            Name
                        </label>
                        <input id="textfield-1" type="text" name="field" value="Sprint one" class="spectrum-Textfield-input" pattern="[\w\s]+" aria-describedby="character-count-6" />
                    </div>
                    <Stepper />
                    <div class="spectrum-TagGroup" role="list" aria-label="list">
                        <div class="spectrum-Tag spectrum-Tag--sizeS spectrum-TagGroup-item" role="listitem">
                            <span class="spectrum-Tag-label">Tag 1</span>
                        </div>
                        <div class="spectrum-Tag spectrum-Tag--sizeS spectrum-TagGroup-item is-invalid" role="listitem">
                            <span class="spectrum-Tag-label">Tag 2</span>
                        </div>
                        <div class="spectrum-Tag spectrum-Tag--sizeS spectrum-TagGroup-item is-disabled" role="listitem">
                            <span class="spectrum-Tag-label">Tag 2</span>
                        </div>
                    </div>
                    <div class="spectrum-Switch spectrum-Switch--sizeS">
                        <input type="checkbox" class="spectrum-Switch-input" id="switch-onoff-1" checked />
                        <span class="spectrum-Switch-switch"></span>
                        <label class="spectrum-Switch-label" for="switch-onoff-1">
                            Completed Sprints
                        </label>
                    </div>
                </PopOver>
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <DatePicker />
            </ActionGroup>
        </div>
    );
};
