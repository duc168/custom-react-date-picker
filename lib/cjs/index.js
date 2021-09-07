'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dateFns = require('date-fns');
var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

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

var css_248z$c = ".styles-module_container__1abwd {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  /* Likely future */\n}";
var styles$c = {"container":"styles-module_container__1abwd"};
styleInject(css_248z$c);

var css_248z$b = ".styles-module_container__2ri92 {\n  display: grid;\n  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  text-align: center;\n  position: relative;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX .styles-module_textContainer__3wBrK {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX.styles-module_disabled__q8Mxr {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  /* Likely future */\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  color: #9c9c9c;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX.styles-module_hide__2Fe3b {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  /* Likely future */\n  visibility: hidden;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX.styles-module_show__37R5e {\n  color: #222222;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  cursor: pointer;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX.styles-module_show__37R5e:hover .styles-module_textContainer__3wBrK {\n  background: #acb4bd;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX.styles-module_selected__1qu98 .styles-module_textContainer__3wBrK {\n  background: #1174dc;\n}\n.styles-module_container__2ri92 .styles-module_item__1XAuX.styles-module_selected__1qu98 .styles-module_textContainer__3wBrK .styles-module_text__eLNWC {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  color: #ffffff;\n}";
var styles$b = {"container":"styles-module_container__2ri92","item":"styles-module_item__1XAuX","textContainer":"styles-module_textContainer__3wBrK","disabled":"styles-module_disabled__q8Mxr","hide":"styles-module_hide__2Fe3b","show":"styles-module_show__37R5e","selected":"styles-module_selected__1qu98","text":"styles-module_text__eLNWC"};
styleInject(css_248z$b);

var TableContent = function (_a) {
    var data = _a.data;
    var dateList = data.state.dateList, select = data.action.selectDate;
    var getStyles = function (status) {
        switch (status) {
            case "disable":
                return styles$b.disabled;
            case "hide":
                return styles$b.hide;
            case "show":
                return styles$b.show;
            case "selected":
                return styles$b.selected;
            default:
                return styles$b.hide;
        }
    };
    var onClick = function (item) {
        var selectedDate = item.text;
        if (item.status === 'show') {
            select(selectedDate);
        }
    };
    return (React__default['default'].createElement("div", { className: styles$b.container }, dateList.map(function (d) {
        return (React__default['default'].createElement("div", { key: d.id, className: styles$b.item + " " + getStyles(d.status), onClick: function () { return onClick(d); } },
            React__default['default'].createElement("div", { className: styles$b.textContainer },
                React__default['default'].createElement("div", { className: styles$b.text }, d.text))));
    })));
};

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

var css_248z$a = ".styles-module_container__2suYF {\n  display: grid;\n  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  color: #555555;\n}\n.styles-module_container__2suYF .styles-module_dayName__R_2Jx {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}";
var styles$a = {"container":"styles-module_container__2suYF","dayName":"styles-module_dayName__R_2Jx"};
styleInject(css_248z$a);

var TableHeader = function () {
    return React__default['default'].createElement("div", { className: styles$a.container }, DAY_FORMAT_2_LETTERS.map(function (d) {
        return React__default['default'].createElement("div", { key: d, className: styles$a.dayName }, d);
    }));
};

var css_248z$9 = ".styles-module_container__3RwAO {\n  position: relative;\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0px 33px 30px rgba(0, 0, 0, 0.02);\n  backdrop-filter: blur(8px);\n}";
var styles$9 = {"container":"styles-module_container__3RwAO"};
styleInject(css_248z$9);

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
var getDateListFromNumberOfDayInAMonth = function (numberOfDayInAMonth, selectedMonth, selectedYear, actualValue, minDate, maxDate) {
    var sameYear = selectedYear === actualValue.year;
    var sameMonth = selectedMonth === actualValue.month;
    var minYear = minDate.getFullYear();
    var minMonth = minDate.getMonth();
    var minDay = minDate.getDate();
    var maxYear = maxDate.getFullYear();
    var maxMonth = maxDate.getMonth();
    var maxDay = maxDate.getDate();
    var checkMinDisabled = minYear === selectedYear && minMonth === selectedMonth;
    var checkMaxDisabled = maxYear === selectedYear && maxMonth === selectedMonth;
    var statusSwitcher = function (input) {
        if (input === actualValue.date && sameMonth && sameYear) {
            return 'selected';
        }
        if (checkMinDisabled) {
            if (input < minDay) {
                return 'disable';
            }
        }
        if (checkMaxDisabled) {
            if (input > maxDay) {
                return 'disable';
            }
        }
        return 'show';
    };
    return Array.from(Array(numberOfDayInAMonth + 1).keys()).filter(function (d) { return d >= 1; }).map(function (d) { return ({
        id: generateId(),
        text: d + '',
        status: statusSwitcher(d)
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
var getDateList = function (selectedDate, selectedMonth, selectedYear, actualValue, minDate, maxDate) {
    var lastMonthLists = getLastMonthDateList(selectedDate);
    return __spreadArray(__spreadArray([], lastMonthLists), getDateListFromNumberOfDayInAMonth(getNumberOfDayInAMonth(selectedDate), selectedMonth, selectedYear, actualValue, minDate, maxDate));
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
var getTimeList = function (timeType, // 12 or 24
actualValue, minTime, maxTime) {
    var getTwoDigital = function (input) {
        if (input < 10) {
            return '0' + input;
        }
        return input + '';
    };
    var amPmFormat = function (inputHour, inputMinute) {
        var HH = inputHour > 12 ? inputHour - 12 : inputHour;
        var mm = inputMinute;
        var pmAm = inputHour > 12 ? 'PM' : 'AM';
        var result = getTwoDigital(HH) + ":" + getTwoDigital(mm) + " " + pmAm;
        return result;
    };
    var minHour = minTime.getHours();
    var minMinute = minTime.getMinutes();
    // const minSecond = minTime.getSeconds()
    var maxHour = maxTime.getHours();
    var maxMinute = maxTime.getMinutes();
    // const maxSecond = maxTime.getSeconds()    
    var statusSwitcher = function (inputHour, inputMinute) {
        if (dateFns.differenceInMinutes(new Date(2000, 1, 1, inputHour, inputMinute), new Date(2000, 1, 1, minHour, minMinute)) < 0) {
            return 'disable';
        }
        if (dateFns.differenceInMinutes(new Date(2000, 1, 1, maxHour, maxMinute), new Date(2000, 1, 1, inputHour, inputMinute)) < 0) {
            return 'disable';
        }
        if (inputHour === actualValue.hour && inputMinute === actualValue.minute) {
            return 'selected';
        }
        return 'show';
    };
    var result = [];
    for (var idx = 0; idx < 24; idx++) {
        var hour = idx;
        if (timeType === 24) {
            var minuteFull = 0;
            var minuteHalf = 30;
            result.push({
                id: generateId(),
                text: getTwoDigital(hour) + ":" + getTwoDigital(minuteFull),
                status: statusSwitcher(hour, minuteFull),
                hour: hour,
                minute: minuteFull
            });
            result.push({
                id: generateId(),
                text: getTwoDigital(hour) + ":" + getTwoDigital(minuteHalf),
                status: statusSwitcher(hour, minuteHalf),
                hour: hour,
                minute: minuteHalf
            });
        }
        if (timeType === 12) {
            var minuteFull = 0;
            var minuteHalf = 30;
            result.push({
                id: generateId(),
                text: amPmFormat(hour, minuteFull),
                status: statusSwitcher(hour, minuteFull),
                hour: hour,
                minute: minuteFull
            });
            result.push({
                id: generateId(),
                text: amPmFormat(hour, minuteHalf),
                status: statusSwitcher(hour, minuteHalf),
                hour: hour,
                minute: minuteHalf
            });
        }
    }
    return result;
};

var css_248z$8 = ".styles-module_container__2Oje1 {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.styles-module_container__2Oje1 .styles-module_text__ULpPb {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  color: #222222;\n}\n.styles-module_container__2Oje1 .styles-module_button__1U6kE {\n  background: #f5f5f5;\n  border-radius: 40px;\n  width: 40px;\n  height: 40px;\n  border: none;\n  cursor: pointer;\n}\n.styles-module_container__2Oje1 .styles-module_button__1U6kE:hover {\n  background: #dbdada;\n}";
var styles$8 = {"container":"styles-module_container__2Oje1","text":"styles-module_text__ULpPb","button":"styles-module_button__1U6kE"};
styleInject(css_248z$8);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var LeftArrowIcon = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React__default['default'].createElement("svg", _extends$1({
  width: "6",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M5 1L1.093 4.782A.307.307 0 001 5a.3.3 0 00.093.218L5 9",
  stroke: "#555",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var RightArrowIcon = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React__default['default'].createElement("svg", _extends({
  width: "6",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M1 1l3.907 3.782A.307.307 0 015 5a.3.3 0 01-.093.218L1 9",
  stroke: "#555",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

var Header$3 = function (_a) {
    var data = _a.data;
    var selectedDateTime = data.state.selectedDateTime, _b = data.action, previousMonth = _b.previousMonth, nextMonth = _b.nextMonth;
    var monthYearString = getMonthYearText(selectedDateTime);
    var goToPreviousMonth = function () {
        previousMonth();
    };
    var goToNextMonth = function () {
        nextMonth();
    };
    return React__default['default'].createElement("div", { className: styles$8.container },
        React__default['default'].createElement("div", { className: styles$8.leftArrow },
            React__default['default'].createElement("button", { className: styles$8.button, onClick: goToPreviousMonth },
                React__default['default'].createElement(LeftArrowIcon, null))),
        React__default['default'].createElement("div", { className: styles$8.text }, monthYearString),
        React__default['default'].createElement("div", { className: styles$8.rightArrow },
            React__default['default'].createElement("button", { className: styles$8.button, onClick: goToNextMonth },
                React__default['default'].createElement(RightArrowIcon, null))));
};

var Main = function (_a) {
    var data = _a.data;
    return React__default['default'].createElement("div", { className: styles$9.container },
        React__default['default'].createElement(Header$3, { data: data }),
        React__default['default'].createElement(TableHeader, null),
        React__default['default'].createElement(TableContent, { data: data }));
};

var css_248z$7 = ".styles-module_container__1pOVd {\n  margin-left: 8px;\n  border: 1px solid #e5e5e5;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 0 1px rgba(14, 10, 10, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}";
var styles$7 = {"container":"styles-module_container__1pOVd"};
styleInject(css_248z$7);

var css_248z$6 = ".styles-module_container__FshOy {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  color: #222222;\n  padding: 15px 20px 15px 18px;\n  background-color: #fff;\n  box-shadow: 0 33px 30px rgba(0, 0, 0, 0.02);\n}";
var styles$6 = {"container":"styles-module_container__FshOy"};
styleInject(css_248z$6);

var Header$2 = function (_a) {
    var _b;
    var data = _a.data;
    return React__default['default'].createElement("div", { className: styles$6.container }, (_b = data.label.timeLabel) !== null && _b !== void 0 ? _b : 'Select Time');
};

var css_248z$5 = ".timeContent-module_container__3vkS2 {\n  height: 256px;\n  width: 120px;\n  overflow-y: auto;\n  background-color: transparent;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.timeContent-module_container__3vkS2::-webkit-scrollbar {\n  width: 2px;\n}\n.timeContent-module_container__3vkS2::-webkit-scrollbar-thumb {\n  background: #DDDDDD;\n  border-radius: 3px;\n}\n.timeContent-module_container__3vkS2::-webkit-scrollbar-thumb:hover {\n  background: #afafaf;\n}\n.timeContent-module_container__3vkS2 .timeContent-module_item__1-mgb {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 32px;\n  text-align: center;\n  margin: 8px 12px;\n  padding: 3px 5px;\n  color: #222;\n}\n.timeContent-module_container__3vkS2 .timeContent-module_item__1-mgb.timeContent-module_disabled__iNvnG {\n  color: #9C9C9C;\n  display: none;\n}\n.timeContent-module_container__3vkS2 .timeContent-module_item__1-mgb.timeContent-module_hide__2Kuc8 {\n  display: none;\n}\n.timeContent-module_container__3vkS2 .timeContent-module_item__1-mgb.timeContent-module_selected__wljrP {\n  background-color: #1174dc;\n  color: #fff;\n}\n.timeContent-module_container__3vkS2 .timeContent-module_item__1-mgb:hover.timeContent-module_show__1d9KC {\n  background-color: #F0F0F0;\n  cursor: pointer;\n}";
var styles$5 = {"container":"timeContent-module_container__3vkS2","item":"timeContent-module_item__1-mgb","disabled":"timeContent-module_disabled__iNvnG","hide":"timeContent-module_hide__2Kuc8","selected":"timeContent-module_selected__wljrP","show":"timeContent-module_show__1d9KC"};
styleInject(css_248z$5);

var Content$2 = function (_a) {
    var data = _a.data;
    var timeList = data.state.timeList, select = data.action.selectTime;
    var getStyles = function (status) {
        switch (status) {
            case "disable":
                return styles$5.disabled;
            case "hide":
                return styles$5.hide;
            case "show":
                return styles$5.show;
            case "selected":
                return styles$5.selected;
            default:
                return styles$5.hide;
        }
    };
    var onClick = function (item) {
        if (item.status === 'show') {
            select(item);
        }
    };
    return React__default['default'].createElement("div", { className: styles$5.container }, timeList.map(function (t) {
        return React__default['default'].createElement("div", { className: styles$5.item + " " + getStyles(t.status), key: t.id, onClick: function () { return onClick(t); } }, t.text);
    }));
};

var TimeContainer$2 = function (_a) {
    var data = _a.data;
    return React__default['default'].createElement("div", { className: styles$7.container },
        React__default['default'].createElement(Header$2, { data: data }),
        React__default['default'].createElement(Content$2, { data: data }));
};

var css_248z$4 = ".styles-module_container__3akqE {\n  margin-left: 8px;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 0 1px rgba(14, 10, 10, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}";
var styles$4 = {"container":"styles-module_container__3akqE"};
styleInject(css_248z$4);

var css_248z$3 = ".styles-module_container__16W7a {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  color: #222222;\n  padding: 15px 20px 15px 18px;\n  background-color: #fff;\n  box-shadow: 0 33px 30px rgba(0, 0, 0, 0.02);\n}";
var styles$3 = {"container":"styles-module_container__16W7a"};
styleInject(css_248z$3);

var Header$1 = function (_a) {
    var _b;
    var data = _a.data;
    return React__default['default'].createElement("div", { className: styles$3.container }, (_b = data.label.fromTimeLabel) !== null && _b !== void 0 ? _b : 'Select Time');
};

var Content$1 = function (_a) {
    var data = _a.data;
    var fromTimeList = data.state.fromTimeList, select = data.action.selectFromTime;
    var getStyles = function (status) {
        switch (status) {
            case "disable":
                return styles$5.disabled;
            case "hide":
                return styles$5.hide;
            case "show":
                return styles$5.show;
            case "selected":
                return styles$5.selected;
            default:
                return styles$5.hide;
        }
    };
    var onClick = function (item) {
        if (item.status === 'show') {
            select(item);
        }
    };
    return React__default['default'].createElement("div", { className: styles$5.container }, fromTimeList.map(function (t) {
        return React__default['default'].createElement("div", { className: styles$5.item + " " + getStyles(t.status), key: t.id, onClick: function () { return onClick(t); } }, t.text);
    }));
};

var TimeContainer$1 = function (_a) {
    var data = _a.data;
    return React__default['default'].createElement("div", { className: styles$4.container },
        React__default['default'].createElement(Header$1, { data: data }),
        React__default['default'].createElement(Content$1, { data: data }));
};

var css_248z$2 = ".styles-module_container__3sZMz {\n  margin-left: 8px;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 0 1px rgba(14, 10, 10, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}";
var styles$2 = {"container":"styles-module_container__3sZMz"};
styleInject(css_248z$2);

var css_248z$1 = ".styles-module_container__3bURD {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  color: #222222;\n  padding: 15px 20px 15px 18px;\n  background-color: #fff;\n  box-shadow: 0 33px 30px rgba(0, 0, 0, 0.02);\n}";
var styles$1 = {"container":"styles-module_container__3bURD"};
styleInject(css_248z$1);

var Header = function (_a) {
    var _b;
    var data = _a.data;
    return React__default['default'].createElement("div", { className: styles$1.container }, (_b = data.label.toTimeLabel) !== null && _b !== void 0 ? _b : 'Select Time');
};

var Content = function (_a) {
    var data = _a.data;
    var toTimeList = data.state.toTimeList, select = data.action.selectToTime;
    var getStyles = function (status) {
        switch (status) {
            case "disable":
                return styles$5.disabled;
            case "hide":
                return styles$5.hide;
            case "show":
                return styles$5.show;
            case "selected":
                return styles$5.selected;
            default:
                return styles$5.hide;
        }
    };
    var onClick = function (item) {
        if (item.status === 'show') {
            select(item);
        }
    };
    return React__default['default'].createElement("div", { className: styles$5.container }, toTimeList.map(function (t) {
        return React__default['default'].createElement("div", { className: styles$5.item + " " + getStyles(t.status), key: t.id, onClick: function () { return onClick(t); } }, t.text);
    }));
};

var TimeContainer = function (_a) {
    var data = _a.data;
    return React__default['default'].createElement("div", { className: styles$2.container },
        React__default['default'].createElement(Header, { data: data }),
        React__default['default'].createElement(Content, { data: data }));
};

var MainContainer = function (_a) {
    var data = _a.data, _b = _a.pickDate, pickDate = _b === void 0 ? true : _b, _c = _a.pickTime, pickTime = _c === void 0 ? false : _c, _d = _a.pickTimeRange, pickTimeRange = _d === void 0 ? false : _d;
    return React__default['default'].createElement("div", { className: styles$c.container },
        pickDate && React__default['default'].createElement(Main, { data: data }),
        pickTime && React__default['default'].createElement(TimeContainer$2, { data: data }),
        pickTimeRange && React__default['default'].createElement(React.Fragment, null,
            React__default['default'].createElement(TimeContainer$1, { data: data }),
            React__default['default'].createElement(TimeContainer, { data: data })));
};

var css_248z = ".styles-module_container__300Qz {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.styles-module_container__300Qz.styles-module_show__3IlVV {\n  display: block;\n}\n.styles-module_container__300Qz.styles-module_hide__1gghr {\n  display: none;\n}";
var styles = {"container":"styles-module_container__300Qz","show":"styles-module_show__3IlVV","hide":"styles-module_hide__1gghr"};
styleInject(css_248z);

var DatePicker = function (_a) {
    var data = _a.data, props = __rest(_a, ["data"]);
    var status = data.state.status, _b = data.action, updateSelectedYear = _b.updateSelectedYear, updateSelectedMonth = _b.updateSelectedMonth;
    React.useEffect(function () {
        updateSelectedYear(new Date().getFullYear());
        updateSelectedMonth(new Date().getMonth());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React__default['default'].createElement("div", { className: styles.container + " " + (status ? styles.show : styles.hide) },
        React__default['default'].createElement(MainContainer, __assign({ data: data }, props))));
};

var useDatePicker$1 = function (_a) {
    var _b = _a.minDate, minDate = _b === void 0 ? dateFns.addDays(new Date(), -1) : _b, _c = _a.maxDate, maxDate = _c === void 0 ? new Date(2021, 11, 1) : _c, _d = _a.minTime, minTime = _d === void 0 ? dateFns.setSeconds(dateFns.setMinutes(dateFns.setHours(new Date(), 8), 0), 0) : _d, _e = _a.maxTime, maxTime = _e === void 0 ? dateFns.setSeconds(dateFns.setMinutes(dateFns.setHours(new Date(), 16), 0), 0) : _e, fromTimeLabel = _a.fromTimeLabel, toTimeLabel = _a.toTimeLabel, timeLabel = _a.timeLabel, _f = _a.timeType, timeType = _f === void 0 ? 24 : _f, onSelectDate = _a.onSelectDate, onSelectTime = _a.onSelectTime, onSelectFromTime = _a.onSelectFromTime, onSelectToTime = _a.onSelectToTime;
    var _g = React.useState(false), status = _g[0], setStatus = _g[1];
    var _h = React.useState(0), selectedYear = _h[0], setSelectedYear = _h[1];
    var _j = React.useState(0), selectedMonth = _j[0], setSelectedMonth = _j[1];
    var _k = React.useState(0), selectedDate = _k[0], setSelectedDate = _k[1];
    var _l = React.useState(0), valueHour = _l[0], setValueHour = _l[1];
    var _m = React.useState(0), valueMinute = _m[0], setValueMinute = _m[1];
    var _o = React.useState(0), valueSecond = _o[0], setValueSecond = _o[1];
    var _p = React.useState(0), valueFromHour = _p[0], setValueFromHour = _p[1];
    var _q = React.useState(0), valueFromMinute = _q[0], setValueFromMinute = _q[1];
    var _r = React.useState(0), valueFromSecond = _r[0], setValueFromSecond = _r[1];
    var _s = React.useState(0), valueToHour = _s[0], setValueToHour = _s[1];
    var _t = React.useState(0), valueToMinute = _t[0], setValueToMinute = _t[1];
    var _u = React.useState(0), valueToSecond = _u[0], setValueToSecond = _u[1];
    var _v = React.useState(0), valueYear = _v[0], setValueYear = _v[1];
    var _w = React.useState(0), valueMonth = _w[0], setValueMonth = _w[1];
    var _x = React.useState(0), valueDate = _x[0], setValueDate = _x[1];
    React.useEffect(function () {
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
        var result = {
            year: selectedYear,
            month: selectedMonth,
            date: datePayload
        };
        setSelectedDate(result.date);
        setValueDate(result.date);
        setValueMonth(result.month);
        setValueYear(result.year);
        onSelectDate && onSelectDate(result);
    };
    var selectTime = function (timeItem) {
        var result = {
            hour: timeItem.hour,
            minute: timeItem.minute,
            second: 0
        };
        setValueHour(result.hour);
        setValueMinute(result.minute);
        setValueSecond(result.second);
        onSelectTime && onSelectTime(result);
    };
    var selectFromTime = function (timeItem) {
        var toTime = new Date(2000, 1, 1, valueToHour, valueToMinute);
        var fromTime = new Date(2000, 1, 1, timeItem.hour, timeItem.minute);
        var fromTimeIsGreaterThanToTime = dateFns.differenceInMinutes(toTime, fromTime) <= 0;
        if (fromTimeIsGreaterThanToTime) {
            var result1 = {
                fromHour: timeItem.hour,
                fromMinute: timeItem.minute,
                fromSecond: 0,
                toHour: 0,
                toMinute: 0,
                toSecond: 0
            };
            setValueToHour(result1.toHour);
            setValueToMinute(result1.toMinute);
            setValueToSecond(result1.toSecond);
            setValueFromHour(result1.fromHour);
            setValueFromMinute(result1.fromMinute);
            setValueFromSecond(result1.fromSecond);
            onSelectFromTime && onSelectFromTime(result1);
            return;
        }
        var result2 = {
            fromHour: timeItem.hour,
            fromMinute: timeItem.minute,
            fromSecond: 0,
            toHour: valueToHour,
            toMinute: valueToMinute,
            toSecond: valueToSecond
        };
        setValueFromHour(result2.fromHour);
        setValueFromMinute(result2.fromMinute);
        setValueFromSecond(result2.fromSecond);
        onSelectFromTime && onSelectFromTime(result2);
    };
    var selectToTime = function (timeItem) {
        var toTime = new Date(2000, 1, 1, timeItem.hour, timeItem.minute);
        var fromTime = new Date(2000, 1, 1, valueFromHour, valueFromMinute);
        var toTimeIsLessThanFromTime = dateFns.differenceInMinutes(toTime, fromTime) <= 0;
        if (toTimeIsLessThanFromTime) {
            var result1 = {
                fromHour: 0,
                fromMinute: 0,
                fromSecond: 0,
                toHour: timeItem.hour,
                toMinute: timeItem.minute,
                toSecond: 0,
            };
            setValueFromHour(result1.fromHour);
            setValueFromMinute(result1.fromMinute);
            setValueFromSecond(result1.fromSecond);
            setValueToHour(result1.toHour);
            setValueToMinute(result1.toMinute);
            setValueToSecond(result1.toSecond);
            onSelectToTime && onSelectToTime(result1);
            return;
        }
        var result2 = {
            fromHour: valueFromHour,
            fromMinute: valueFromMinute,
            fromSecond: valueFromSecond,
            toHour: timeItem.hour,
            toMinute: timeItem.minute,
            toSecond: 0,
        };
        setValueToHour(result2.toHour);
        setValueToMinute(result2.toMinute);
        setValueToSecond(result2.toSecond);
        onSelectToTime && onSelectToTime(result2);
    };
    // const nextMonthLegacy = () => {
    //     const currentMonth = selectedMonth
    //     const currentYear = selectedYear
    //     if (currentMonth >= 0 && currentMonth < 11) {
    //         setSelectedMonth(currentMonth + 1)
    //     }
    //     if (currentMonth === 11) {
    //         setSelectedMonth(0)
    //         setSelectedYear(currentYear + 1)
    //     }
    //     const yearCheck = selectedYear === valueYear
    //     const monthCheck = selectedMonth === valueMonth
    //     if (yearCheck && monthCheck) {
    //         setSelectedDate(valueDate)
    //     } else {
    //         setSelectedDate(0)
    //     }
    // }
    var updateCurrentSelectedDate = function () {
        var yearCheck = selectedYear === valueYear;
        var monthCheck = selectedMonth === valueMonth;
        if (yearCheck && monthCheck) {
            setSelectedDate(valueDate);
        }
        else {
            setSelectedDate(0);
        }
    };
    var nextMonth = function () {
        var currentDate = new Date(selectedYear, selectedMonth);
        var nextMonth = dateFns.addMonths(currentDate, 1);
        var isBiggerThanMaxDate = dateFns.differenceInMonths(new Date(maxDate.getFullYear(), maxDate.getMonth()), nextMonth) < 0;
        if (isBiggerThanMaxDate)
            return;
        setSelectedMonth(nextMonth.getMonth());
        setSelectedYear(nextMonth.getFullYear());
        updateCurrentSelectedDate();
    };
    // const previousMonthLegacy = () => {
    //     const currentMonth = selectedMonth
    //     const currentYear = selectedYear
    //     if (currentMonth > 0 && currentMonth <= 11) {
    //         setSelectedMonth(currentMonth - 1)
    //     }
    //     if (currentMonth === 0) {
    //         setSelectedMonth(11)
    //         setSelectedYear(currentYear - 1)
    //     }
    //     const yearCheck = selectedYear === valueYear
    //     const monthCheck = selectedMonth === valueMonth
    //     if (yearCheck && monthCheck) {
    //         setSelectedDate(valueDate)
    //     } else {
    //         setSelectedDate(0)
    //     }
    // }
    var previousMonth = function () {
        var currentDate = new Date(selectedYear, selectedMonth);
        var previousMonth = dateFns.addMonths(currentDate, -1);
        var isSmallerThanMinDate = dateFns.differenceInMonths(previousMonth, new Date(minDate.getFullYear(), minDate.getMonth())) < 0;
        if (isSmallerThanMinDate)
            return;
        setSelectedMonth(previousMonth.getMonth());
        setSelectedYear(previousMonth.getFullYear());
        updateCurrentSelectedDate();
    };
    var selectedDateTime = new Date(selectedYear, selectedMonth, selectedDate === 0 ? 1 : selectedDate);
    var valueDateTime = new Date(valueYear, valueMonth, valueDate);
    var valueString = valueDate && valueMonth && valueYear ? formatDate(valueDateTime) : '';
    var valueObj = {
        year: valueYear,
        month: valueMonth,
        date: valueDate,
    };
    var timeObj = {
        hour: valueHour,
        minute: valueMinute,
        second: valueSecond,
    };
    var fromTimeObj = {
        hour: valueFromHour,
        minute: valueFromMinute,
        second: valueFromSecond,
    };
    var toTimeObj = {
        hour: valueToHour,
        minute: valueToMinute,
        second: valueToSecond,
    };
    // console.log('value ', valueObj, timeObj, fromTimeObj, toTimeObj)
    var dateList = getDateList(selectedDateTime, selectedMonth, selectedYear, valueObj, minDate, maxDate);
    var timeList = getTimeList(timeType, timeObj, minTime, maxTime);
    var fromTimeList = getTimeList(timeType, fromTimeObj, minTime, maxTime);
    var toTimeList = getTimeList(timeType, toTimeObj, minTime, maxTime);
    var result = {
        state: {
            fromTimeList: fromTimeList,
            toTimeList: toTimeList,
            timeList: timeList,
            dateList: dateList,
            selectedDateTime: selectedDateTime,
            valueDateTime: valueDateTime,
            valueString: valueString,
            value: {
                year: valueYear,
                month: valueMonth,
                date: valueDate,
                hour: valueHour,
                minute: valueMinute,
                second: valueSecond,
                fromHour: valueFromHour,
                fromMinute: valueFromMinute,
                fromSecond: valueFromSecond,
                toHour: valueToHour,
                toMinute: valueToMinute,
                toSecond: valueToSecond,
            },
            selectedYear: selectedYear,
            selectedMonth: selectedMonth,
            selectedDate: selectedDate,
            status: status,
        },
        label: {
            fromTimeLabel: fromTimeLabel,
            toTimeLabel: toTimeLabel,
            timeLabel: timeLabel
        },
        action: {
            selectFromTime: selectFromTime,
            selectToTime: selectToTime,
            selectDate: selectDate,
            selectTime: selectTime,
            showDatePicker: showDatePicker,
            hideDatePicker: hideDatePicker,
            previousMonth: previousMonth,
            nextMonth: nextMonth,
            updateSelectedYear: updateSelectedYear,
            updateSelectedMonth: updateSelectedMonth,
            updateSelectedDate: updateSelectedDate,
        }
    };
    return ___default['default'].cloneDeep(result);
};

var useDatePicker = useDatePicker$1;

exports['default'] = DatePicker;
exports.useDatePicker = useDatePicker;
//# sourceMappingURL=index.js.map
