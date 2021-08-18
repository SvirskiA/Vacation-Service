import vacationImg from "../public/assets/img/Vacation.png";
import sickLeaveImg from "../public/assets/img/Sick leave new.png";
import ownExpenseImg from "../public/assets/img/own expense_new.png";

import vacationImgSmall from "../public/assets/img/Vacation request.svg";
import sickLeaveImgSmall from "../public/assets/img/Sick leave.svg";
import ownExpenseImgSmall from "../public/assets/img/Own expense.svg";

const chooseImg = (type, isSizeBig) => {
    let imgSrc = '';

    if (isSizeBig) {
        if (!type || type.toLowerCase().includes("vacation")) {
            imgSrc = vacationImg;
        } else if (type.toLowerCase().includes("sick")) {
            imgSrc = sickLeaveImg;
        } else if (type.toLowerCase().includes("own")) {
            imgSrc = ownExpenseImg;
        }
    } else if (!isSizeBig) {
        if (!type || type.toLowerCase().includes("vacation")) {
            imgSrc = vacationImgSmall;
        } else if (type.toLowerCase().includes("sick")) {
            imgSrc = sickLeaveImgSmall;
        } else if (type.toLowerCase().includes("own")) {
            imgSrc = ownExpenseImgSmall;
        }
    }
    return imgSrc;
}

export default chooseImg;