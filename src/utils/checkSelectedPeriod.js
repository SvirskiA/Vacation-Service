import moment from "moment";

let inTwoWeeks = moment().add(14, "days").format("YYYY-MM-DD");

const checkSelectedPeriod = (vacation, datesArray) => {
    let breakPoint = false;
    let message = {};

    const isSickLeave = vacation.type.toLowerCase().includes('sick');

    for (let elem of datesArray) {
        if (!isSickLeave
            && elem.created !== vacation.created
            && ((elem.start > vacation.start && elem.start < vacation.end) ||
                (elem.end > vacation.start && elem.end < vacation.end) ||
                (vacation.start > elem.start && vacation.start < elem.end) ||
                (vacation.end > elem.start && vacation.end < elem.end))

        ) {
            message.warning =
                "It looks like you already have a request for the same period. Please check the dates of your request.";
            message.buttons = { negative: 'Ok, got it' };
            breakPoint = true;
            break;
        }
    }

    if (!isSickLeave && !breakPoint && inTwoWeeks > vacation.start) {
        message.warning =
            "Please submit your request at least two weeks before the desired start date.";
        message.text =
            "Would you like to confirm the request with the dates as suggested below?";
        message.buttons = {
            negative: 'change dates',
            positive: 'Confirm anyway',
        };
    } else if (!isSickLeave && !breakPoint &&
        vacation.duration <= 2 &&
        moment(vacation.start).isoWeekday() > 5 &&
        moment(vacation.end).isoWeekday() > 5
    ) {
        message.warning =
            "The selected interval includes only public holidays or weekend days. Please review the selected dates.";
        message.buttons = {
            negative: 'change dates',
            positive: 'Confirm anyway',
        };
    } else if (!isSickLeave && !breakPoint && vacation.duration > 14) {
        message.warning =
            "We know you must be tired. But please consider shoter vacation. How about 2 weeks?";
        message.buttons = {
            negative: 'change dates',
            positive: 'Confirm anyway',
        };
    } else if (!breakPoint) {
        message.text = "Please confirm creating a new vacation request:";
        message.buttons = {
            negative: 'cancel',
            positive: 'confirm',
        };
    }
    return message;
};

export default checkSelectedPeriod;
