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
import { OptionsPopOver, VerticalPopOver } from "./pop-over";
import ChevronUpIcon from "../assets/Smock_ChevronUp_18_N.svg";
import ChevronDownIcon from "../assets/Smock_ChevronDown_18_N.svg";
import { Table } from "./table";

const Divider = () => {
    return <div className="ui divider spectrum-Divider spectrum-Divider--sizeS spectrum-Divider--vertical" />;
};

const ProgressBar = ({ teamNumber, value }) => {
    return (
        <div className="ui spectrum-ProgressBar spectrum-Meter--sizeS is-negative" value={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
            <div className="ui spectrum-FieldLabel spectrum-FieldLabel--sizeS spectrum-ProgressBar-label">Team {teamNumber} progress</div>
            <div className="ui spectrum-FieldLabel spectrum-FieldLabel--sizeS spectrum-ProgressBar-percentage">{value}%</div>
            <div className="ui spectrum-ProgressBar-track">
                <div className="ui spectrum-ProgressBar-fill" style={{ width: value.toString() + "%" }}></div>
            </div>
        </div>
    );
};

const AnalyticsPopOver = () => {
    const children = [];
    const numProgressBars = 5;
    for (let i = 0; i < numProgressBars; i++) {
        children.push(<ProgressBar key={i} teamNumber={i} value={((i + 1) * 10) % 100} />);
    }
    return <VerticalPopOver>{children}</VerticalPopOver>;
};

const Stepper = () => {
    return (
        <div className="ui spectrum-Stepper">
            <label for="stepper-m" className="ui spectrum-FieldLabel spectrum-FieldLabel--sizeS">
                Sprints
            </label>
            <div className="ui spectrum-Textfield spectrum-Textfield--sizeM spectrum-Stepper-textfield">
                <input type="text" placeholder="1" autocomplete="" className="ui spectrum-Textfield-input spectrum-Stepper-input" id="stepper-m" />
            </div>

            <span className="ui spectrum-Stepper-buttons">
                <ActionButton Icon={ChevronUpIcon} aria-haspopup="false" aria-pressed="false" className="ui spectrum-Stepper-stepUp" />
                <ActionButton Icon={ChevronDownIcon} aria-haspopup="false" aria-pressed="false" className="ui spectrum-Stepper-stepDown" />
            </span>
        </div>
    );
};

const TagGroup = () => {
    const tags = [
        { label: "Tag 1", className: "spectrum-Tag--sizeS" },
        { label: "Tag 2", className: "spectrum-Tag--sizeS is-invalid" },
        { label: "Tag 3", className: "spectrum-Tag--sizeS is-disabled" },
    ];

    return (
        <div className="ui spectrum-TagGroup" role="list" aria-label="list">
            {tags.map((tag, index) => (
                <div className={`ui spectrum-Tag spectrum-TagGroup-item ${tag.className}`} role="listitem" key={index}>
                    <span className="ui spectrum-Tag-label">{tag.label}</span>
                </div>
            ))}
        </div>
    );
};

const FilterPopOver = () => {
    return (
        <VerticalPopOver>
            <div className="ui spectrum-Textfield">
                <label for="textfield-1" className="ui spectrum-FieldLabel spectrum-FieldLabel--sizeS">
                    Name
                </label>
                <input id="textfield-1" type="text" name="field" value="Sprint one" className="ui spectrum-Textfield-input" pattern="[\w\s]+" aria-describedby="character-count-6" />
            </div>
            <Stepper />
            <TagGroup />
            <div className="ui spectrum-Switch spectrum-Switch--sizeS">
                <input type="checkbox" className="ui spectrum-Switch-input" id="switch-onoff-1" checked />
                <span className="ui spectrum-Switch-switch"></span>
                <label className="ui spectrum-Switch-label" for="switch-onoff-1">
                    Completed Sprints
                </label>
            </div>
        </VerticalPopOver>
    );
};

export const Ribbon = () => {
    return (
        <div className="ui ribbon">
            <ActionGroup>
                <ActionButton Icon={ClockIcon} label={"Send Reminder"} quiet />
                <OptionsPopOver numOptions={4} />
                <ActionButton Icon={ViewListIcon} label={"Backlog"} quiet />
                <VerticalPopOver>
                    <Table />
                </VerticalPopOver>
                <ActionButton Icon={GraphTrendIcon} label={"Analytics"} quiet />
                <AnalyticsPopOver />
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
                <FilterPopOver />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <DatePicker />
            </ActionGroup>
        </div>
    );
};
