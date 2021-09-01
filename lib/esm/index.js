import React, { useEffect, useState } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var MONTH_FORMAT = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var DAY_FORMAT_2_LETTERS = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
];

var generateId = function () {
    return Math.random() * 1000000 + '';
};
var getMonthText = function (currentValue) {
    var currentMonth = currentValue.getMonth();
    return MONTH_FORMAT[currentMonth];
};
var getMonthYearText = function (currentValue) {
    var currentMonth = getMonthText(currentValue);
    var currentYear = currentValue.getFullYear();
    return currentMonth + " " + currentYear;
};
var getNumberOfDayInAMonth = function (selectedDate) {
    var currentMonth = selectedDate.getMonth();
    var currentYear = selectedDate.getFullYear();
    var standard = 40;
    var calculated = new Date(currentYear, currentMonth, standard).getDate();
    return standard - calculated;
};
var getDateListFromNumberOfDayInAMonth = function (numberOfDayInAMonth, selectedMonth, selectedYear, actualValue) {
    var sameYear = selectedYear === actualValue.year;
    var sameMonth = selectedMonth === actualValue.month;
    return Array.from(Array(numberOfDayInAMonth + 1).keys()).filter(function (d) { return d >= 1; }).map(function (d) { return ({
        id: generateId(),
        text: d + '',
        status: d === actualValue.date && sameMonth && sameYear ? 'selected' : 'show'
    }); });
};
var getStartDayOfMonth = function (currentValue) {
    var currentMonth = currentValue.getMonth();
    var currentYear = currentValue.getFullYear();
    var startDay = new Date(currentYear, currentMonth).getDay();
    return startDay;
};
var getLastMonthDateList = function (currentValue) {
    var startDayOfMonth = getStartDayOfMonth(currentValue);
    return Array.from(Array(startDayOfMonth).keys()).map(function (_) { return ({
        id: generateId(),
        text: '',
        status: 'hide'
    }); });
};
var getDateList = function (selectedDate, selectedMonth, selectedYear, actualValue) {
    var lastMonthLists = getLastMonthDateList(selectedDate);
    return __spreadArray(__spreadArray([], lastMonthLists), getDateListFromNumberOfDayInAMonth(getNumberOfDayInAMonth(selectedDate), selectedMonth, selectedYear, actualValue));
};
var formatDate = function (input) {
    var currentYear = input.getFullYear();
    var currentMonth = input.getMonth();
    var currentDate = input.getDate();
    var currentHour = input.getHours();
    var currentMinute = input.getMinutes();
    var formatTwoDigits = function (inputNumber) {
        return inputNumber < 10 ? '0' + inputNumber : inputNumber + '';
    };
    var outputYear = formatTwoDigits(currentYear);
    var outputMonth = formatTwoDigits(currentMonth + 1);
    var outputDate = formatTwoDigits(currentDate);
    var outputHour = formatTwoDigits(currentHour);
    var outputMinute = formatTwoDigits(currentMinute);
    return outputYear + "/" + outputMonth + "/" + outputDate + " " + outputHour + ":" + outputMinute;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = ".styles-module_container__cGwBw {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n.styles-module_container__cGwBw .styles-module_text__3Icyu {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  color: #222222;\n}\n.styles-module_container__cGwBw .styles-module_button__3tHHr {\n  background: #f5f5f5;\n  border-radius: 40px;\n  width: 40px;\n  height: 40px;\n  border: none;\n  cursor: pointer;\n}\n.styles-module_container__cGwBw .styles-module_button__3tHHr:hover {\n  background: #dbdada;\n}";
var styles$4 = {"container":"styles-module_container__cGwBw","text":"styles-module_text__3Icyu","button":"styles-module_button__3tHHr"};
styleInject(css_248z$4);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var LeftArrowIcon = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$1({
  width: "6",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 1L1.093 4.782A.307.307 0 001 5a.3.3 0 00.093.218L5 9",
  stroke: "#555",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var RightArrowIcon = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "6",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 1l3.907 3.782A.307.307 0 015 5a.3.3 0 01-.093.218L1 9",
  stroke: "#555",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

var Header = function (_a) {
    var data = _a.data;
    var selectedDateTime = data.state.selectedDateTime, _b = data.action, previousMonth = _b.previousMonth, nextMonth = _b.nextMonth;
    var monthYearString = getMonthYearText(selectedDateTime);
    var goToPreviousMonth = function () {
        previousMonth();
    };
    var goToNextMonth = function () {
        nextMonth();
    };
    return React.createElement("div", { className: styles$4.container },
        React.createElement("div", { className: styles$4.leftArrow },
            React.createElement("button", { className: styles$4.button, onClick: goToPreviousMonth },
                React.createElement(LeftArrowIcon, null))),
        React.createElement("div", { className: styles$4.text }, monthYearString),
        React.createElement("div", { className: styles$4.rightArrow },
            React.createElement("button", { className: styles$4.button, onClick: goToNextMonth },
                React.createElement(RightArrowIcon, null))));
};

var css_248z$3 = ".styles-module_container__3kgsO {\n  display: grid;\n  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  text-align: center;\n  position: relative;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD .styles-module_textContainer__1KAdu {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD.styles-module_disabled__2oOfs {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  color: #9c9c9c;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD.styles-module_hide__1Vl9m {\n  visibility: hidden;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD.styles-module_show__1MTTn {\n  color: #222222;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  cursor: pointer;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD.styles-module_show__1MTTn:hover .styles-module_textContainer__1KAdu {\n  background: #acb4bd;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD.styles-module_selected__3MJMO .styles-module_textContainer__1KAdu {\n  background: #1174dc;\n}\n.styles-module_container__3kgsO .styles-module_item__1zOgD.styles-module_selected__3MJMO .styles-module_textContainer__1KAdu .styles-module_text__I-01c {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  color: #ffffff;\n}";
var styles$3 = {"container":"styles-module_container__3kgsO","item":"styles-module_item__1zOgD","textContainer":"styles-module_textContainer__1KAdu","disabled":"styles-module_disabled__2oOfs","hide":"styles-module_hide__1Vl9m","show":"styles-module_show__1MTTn","selected":"styles-module_selected__3MJMO","text":"styles-module_text__I-01c"};
styleInject(css_248z$3);

var TableContent = function (_a) {
    var data = _a.data;
    var dateList = data.state.dateList, select = data.action.selectDate;
    var getStyles = function (status) {
        switch (status) {
            case 'disable':
                return styles$3.disable;
            case 'hide':
                return styles$3.hide;
            case 'show':
                return styles$3.show;
            case 'selected':
                return styles$3.selected;
            default:
                return styles$3.hide;
        }
    };
    var onClick = function (selectedDate) {
        select(selectedDate);
    };
    return (React.createElement("div", { className: styles$3.container }, dateList.map(function (d) {
        return (React.createElement("div", { key: d.id, className: styles$3.item + " " + getStyles(d.status), onClick: function () { return onClick(d.text); } },
            React.createElement("div", { className: styles$3.textContainer },
                React.createElement("div", { className: styles$3.text }, d.text))));
    })));
};

var css_248z$2 = ".styles-module_container__3NNXT {\n  display: grid;\n  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  color: #555555;\n}\n.styles-module_container__3NNXT .styles-module_dayName__1b-6U {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}";
var styles$2 = {"container":"styles-module_container__3NNXT","dayName":"styles-module_dayName__1b-6U"};
styleInject(css_248z$2);

var TableHeader = function () {
    return React.createElement("div", { className: styles$2.container }, DAY_FORMAT_2_LETTERS.map(function (d) {
        return React.createElement("div", { key: d, className: styles$2.dayName }, d);
    }));
};

var css_248z$1 = ".styles-module_container__1abwd {\n  margin-top: 16px;\n}";
var styles$1 = {"container":"styles-module_container__1abwd"};
styleInject(css_248z$1);

var Main = function (_a) {
    var data = _a.data;
    return React.createElement("div", { className: styles$1.container },
        React.createElement(TableHeader, null),
        React.createElement(TableContent, { data: data }));
};

var css_248z = ".styles-module_container__300Qz {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  border: 1px solid #e5e5e5;\n  padding: 8px;\n}\n.styles-module_container__300Qz.styles-module_show__3IlVV {\n  display: block;\n}\n.styles-module_container__300Qz.styles-module_hide__1gghr {\n  display: none;\n}";
var styles = {"container":"styles-module_container__300Qz","show":"styles-module_show__3IlVV","hide":"styles-module_hide__1gghr"};
styleInject(css_248z);

var DatePicker = function (_a) {
    var data = _a.data;
    var status = data.state.status, _b = data.action, updateSelectedYear = _b.updateSelectedYear, updateSelectedMonth = _b.updateSelectedMonth;
    useEffect(function () {
        updateSelectedYear(new Date().getFullYear());
        updateSelectedMonth(new Date().getMonth());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return React.createElement("div", { className: styles.container + " " + (status ? styles.show : styles.hide) },
        React.createElement(Header, { data: data }),
        React.createElement(Main, { data: data }));
};

var useDatePicker$1 = function () {
    var _a = useState(false), status = _a[0], setStatus = _a[1];
    var _b = useState(0), selectedYear = _b[0], setSelectedYear = _b[1];
    var _c = useState(0), selectedMonth = _c[0], setSelectedMonth = _c[1];
    var _d = useState(0), selectedDate = _d[0], setSelectedDate = _d[1];
    var _e = useState(0), valueYear = _e[0], setValueYear = _e[1];
    var _f = useState(0), valueMonth = _f[0], setValueMonth = _f[1];
    var _g = useState(0), valueDate = _g[0], setValueDate = _g[1];
    useEffect(function () {
        var now = new Date();
        var currentYear = now.getFullYear();
        var currentMonth = now.getMonth();
        var currentDate = now.getDate();
        setSelectedYear(currentYear);
        setSelectedMonth(currentMonth);
        setSelectedDate(currentDate);
    }, []);
    var showDatePicker = function () {
        setStatus(true);
    };
    var hideDatePicker = function () {
        setStatus(false);
    };
    var updateSelectedYear = function (payload) {
        setSelectedYear(payload);
    };
    var updateSelectedMonth = function (payload) {
        setSelectedMonth(payload);
    };
    var updateSelectedDate = function (payload) {
        setSelectedDate(payload);
    };
    var selectDate = function (dateInput) {
        var datePayload = parseInt(dateInput, 10);
        setSelectedDate(datePayload);
        setValueDate(datePayload);
        setValueMonth(selectedMonth);
        setValueYear(selectedYear);
    };
    var nextMonth = function () {
        var currentMonth = selectedMonth;
        var currentYear = selectedYear;
        if (currentMonth >= 0 && currentMonth < 11) {
            setSelectedMonth(currentMonth + 1);
        }
        if (currentMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear(currentYear + 1);
        }
        var yearCheck = selectedYear === valueYear;
        var monthCheck = selectedMonth === valueMonth;
        if (yearCheck && monthCheck) {
            setSelectedDate(valueDate);
        }
        else {
            setSelectedDate(0);
        }
    };
    var previousMonth = function () {
        var currentMonth = selectedMonth;
        var currentYear = selectedYear;
        if (currentMonth > 0 && currentMonth <= 11) {
            setSelectedMonth(currentMonth - 1);
        }
        if (currentMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear(currentYear - 1);
        }
        var yearCheck = selectedYear === valueYear;
        var monthCheck = selectedMonth === valueMonth;
        if (yearCheck && monthCheck) {
            setSelectedDate(valueDate);
        }
        else {
            setSelectedDate(0);
        }
    };
    var selectedDateTime = new Date(selectedYear, selectedMonth, selectedDate === 0 ? 1 : selectedDate);
    var valueDateTime = new Date(valueYear, valueMonth, valueDate);
    var valueString = valueDate && valueMonth && valueYear ? formatDate(valueDateTime) : '';
    var valueObj = {
        year: valueYear,
        month: valueMonth,
        date: valueDate,
    };
    var dateList = getDateList(selectedDateTime, selectedMonth, selectedYear, valueObj);
    return {
        state: {
            dateList: dateList,
            selectedDateTime: selectedDateTime,
            valueDateTime: valueDateTime,
            valueString: valueString,
            value: {
                year: valueYear,
                month: valueMonth,
                date: valueDate,
            },
            selectedYear: selectedYear,
            selectedMonth: selectedMonth,
            selectedDate: selectedDate,
            status: status,
        },
        action: {
            selectDate: selectDate,
            showDatePicker: showDatePicker,
            hideDatePicker: hideDatePicker,
            previousMonth: previousMonth,
            nextMonth: nextMonth,
            updateSelectedYear: updateSelectedYear,
            updateSelectedMonth: updateSelectedMonth,
            updateSelectedDate: updateSelectedDate,
        }
    };
};

var useDatePicker = useDatePicker$1;

export { DatePicker as default, useDatePicker };
//# sourceMappingURL=index.js.map
