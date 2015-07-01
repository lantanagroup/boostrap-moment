angular.module('bootstrapMoment', ['ui.bootstrap'])
    .directive('bootstrapMoment', function () {
        return {
            restrict: 'E',
            scope: {
                CurrentDate: '=?currentDate',
                Required: '=?required',
                Placement: '=?placement',
                OnChange: '&?onChange',
                Validate: '&?validate',
                IsValid: '=?isValid',
                InitWithDate: '=?init'
            },
            templateUrl: 'bootstrapmoment.html',
            link: function(scope, element, attrs) {
                scope.Zones = [{"offset":-720,"name":"International Date Line West","offsetString":"-12:00"},{"offset":-660,"name":"Coordinated Universal Time-11","offsetString":"-11:00"},{"offset":-600,"name":"Hawaii","offsetString":"-10:00"},{"offset":-540,"name":"Alaska","offsetString":"-09:00"},{"offset":-480,"name":"Pacific Time (US & Canada)","offsetString":"-08:00"},{"offset":-480,"name":"Baja California","offsetString":"-08:00"},{"offset":-420,"name":"Mountain Time (US & Canada)","offsetString":"-07:00"},{"offset":-420,"name":"Chihuahua, La Paz, Mazatlan","offsetString":"-07:00"},{"offset":-420,"name":"Arizona","offsetString":"-07:00"},{"offset":-360,"name":"Saskatchewan","offsetString":"-06:00"},{"offset":-360,"name":"Guadalajara, Mexico City, Monterrey","offsetString":"-06:00"},{"offset":-360,"name":"Central Time (US & Canada)","offsetString":"-06:00"},{"offset":-360,"name":"Central America","offsetString":"-06:00"},{"offset":-300,"name":"Indiana (East)","offsetString":"-05:00"},{"offset":-300,"name":"Eastern Time (US & Canada)","offsetString":"-05:00"},{"offset":-300,"name":"Chetumal","offsetString":"-05:00"},{"offset":-300,"name":"Bogota, Lima, Quito, Rio Branco","offsetString":"-05:00"},{"offset":-258,"name":"Caracas","offsetString":"-04:30"},{"offset":-240,"name":"Georgetown, La Paz, Manaus, San Juan","offsetString":"-04:00"},{"offset":-240,"name":"Cuiaba","offsetString":"-04:00"},{"offset":-240,"name":"Atlantic Time (Canada)","offsetString":"-04:00"},{"offset":-240,"name":"Asuncion","offsetString":"-04:00"},{"offset":-198,"name":"Newfoundland","offsetString":"-03:30"},{"offset":-180,"name":"Santiago","offsetString":"-03:00"},{"offset":-180,"name":"Salvador","offsetString":"-03:00"},{"offset":-180,"name":"Montevideo","offsetString":"-03:00"},{"offset":-180,"name":"Greenland","offsetString":"-03:00"},{"offset":-180,"name":"Cayenne, Fortaleza","offsetString":"-03:00"},{"offset":-180,"name":"Buenos Aires","offsetString":"-03:00"},{"offset":-180,"name":"Brasilia","offsetString":"-03:00"},{"offset":-120,"name":"Mid-Atlantic","offsetString":"-02:00"},{"offset":-120,"name":"Coordinated Universal Time-02","offsetString":"-02:00"},{"offset":-60,"name":"Cape Verde Is.","offsetString":"-01:00"},{"offset":-60,"name":"Azores","offsetString":"-01:00"},{"offset":840,"name":"Kiritimati Island","offsetString":"+14:00"},{"offset":780,"name":"Samoa","offsetString":"+13:00"},{"offset":780,"name":"Nuku\'alofa","offsetString":"+13:00"},{"offset":720,"name":"Petropavlovsk-Kamchatsky - Old","offsetString":"+12:00"},{"offset":720,"name":"Fiji","offsetString":"+12:00"},{"offset":720,"name":"Coordinated Universal Time+12","offsetString":"+12:00"},{"offset":720,"name":"Auckland, Wellington","offsetString":"+12:00"},{"offset":720,"name":"Anadyr, Petropavlovsk-Kamchatsky (RTZ 11)","offsetString":"+12:00"},{"offset":660,"name":"Solomon Is., New Caledonia","offsetString":"+11:00"},{"offset":660,"name":"Chokurdakh (RTZ 10)","offsetString":"+11:00"},{"offset":600,"name":"Vladivostok, Magadan (RTZ 9)","offsetString":"+10:00"},{"offset":600,"name":"Magadan","offsetString":"+10:00"},{"offset":600,"name":"Hobart","offsetString":"+10:00"},{"offset":600,"name":"Guam, Port Moresby","offsetString":"+10:00"},{"offset":600,"name":"Canberra, Melbourne, Sydney","offsetString":"+10:00"},{"offset":600,"name":"Brisbane","offsetString":"+10:00"},{"offset":558,"name":"Darwin","offsetString":"+09:30"},{"offset":558,"name":"Adelaide","offsetString":"+09:30"},{"offset":540,"name":"Yakutsk (RTZ 8)","offsetString":"+09:00"},{"offset":540,"name":"Seoul","offsetString":"+09:00"},{"offset":540,"name":"Osaka, Sapporo, Tokyo","offsetString":"+09:00"},{"offset":480,"name":"Ulaanbaatar","offsetString":"+08:00"},{"offset":480,"name":"Taipei","offsetString":"+08:00"},{"offset":480,"name":"Perth","offsetString":"+08:00"},{"offset":480,"name":"KualaLumpur, Singapore","offsetString":"+08:00"},{"offset":480,"name":"Irkutsk (RTZ 7)","offsetString":"+08:00"},{"offset":480,"name":"Beijing, Chongqing, Hong Kong, Urumqi","offsetString":"+08:00"},{"offset":420,"name":"Krasnoyarsk (RTZ 6)","offsetString":"+07:00"},{"offset":420,"name":"Bangkok, Hanoi, Jakarta","offsetString":"+07:00"},{"offset":378,"name":"Yangon (Rangoon)","offsetString":"+06:30"},{"offset":360,"name":"Novosibirsk (RTZ 5)","offsetString":"+06:00"},{"offset":360,"name":"Dhaka","offsetString":"+06:00"},{"offset":360,"name":"Astana","offsetString":"+06:00"},{"offset":327,"name":"Kathmandu","offsetString":"+05:45"},{"offset":318,"name":"Sri Jayawardenepura","offsetString":"+05:30"},{"offset":318,"name":"Chennai, Kolkata, Mumbai, New Delhi","offsetString":"+05:30"},{"offset":300,"name":"Islamabad, Karachi","offsetString":"+05:00"},{"offset":300,"name":"Ekaterinburg (RTZ 4)","offsetString":"+05:00"},{"offset":300,"name":"Ashgabat, Tashkent","offsetString":"+05:00"},{"offset":258,"name":"Kabul","offsetString":"+04:30"},{"offset":240,"name":"Yerevan","offsetString":"+04:00"},{"offset":240,"name":"Tbilisi","offsetString":"+04:00"},{"offset":240,"name":"Port Louis","offsetString":"+04:00"},{"offset":240,"name":"Izhevsk, Samara (RTZ 3)","offsetString":"+04:00"},{"offset":240,"name":"Baku","offsetString":"+04:00"},{"offset":240,"name":"Abu Dhabi, Muscat","offsetString":"+04:00"},{"offset":198,"name":"Tehran","offsetString":"+03:30"},{"offset":180,"name":"Nairobi","offsetString":"+03:00"},{"offset":180,"name":"Moscow, St. Petersburg, Volgograd (RTZ 2)","offsetString":"+03:00"},{"offset":180,"name":"Minsk","offsetString":"+03:00"},{"offset":180,"name":"Kuwait, Riyadh","offsetString":"+03:00"},{"offset":180,"name":"Baghdad","offsetString":"+03:00"},{"offset":120,"name":"Tripoli","offsetString":"+02:00"},{"offset":120,"name":"Kaliningrad (RTZ 1)","offsetString":"+02:00"},{"offset":120,"name":"Jerusalem","offsetString":"+02:00"},{"offset":120,"name":"Istanbul","offsetString":"+02:00"},{"offset":120,"name":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","offsetString":"+02:00"},{"offset":120,"name":"Harare, Pretoria","offsetString":"+02:00"},{"offset":120,"name":"E. Europe","offsetString":"+02:00"},{"offset":120,"name":"Damascus","offsetString":"+02:00"},{"offset":120,"name":"Cairo","offsetString":"+02:00"},{"offset":120,"name":"Beirut","offsetString":"+02:00"},{"offset":120,"name":"Athens, Bucharest","offsetString":"+02:00"},{"offset":120,"name":"Amman","offsetString":"+02:00"},{"offset":60,"name":"Windhoek","offsetString":"+01:00"},{"offset":60,"name":"West Central Africa","offsetString":"+01:00"},{"offset":60,"name":"Sarajevo, Skopje, Warsaw, Zagreb","offsetString":"+01:00"},{"offset":60,"name":"Brussels, Copenhagen, Madrid, Paris","offsetString":"+01:00"},{"offset":60,"name":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","offsetString":"+01:00"},{"offset":60,"name":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","offsetString":"+01:00"},{"offset":0,"name":"Monrovia, Reykjavik","offsetString":""},{"offset":0,"name":"Dublin, Edinburgh, Lisbon, London","offsetString":""},{"offset":0,"name":"Coordinated Universal Time","offsetString":""},{"offset":0,"name":"Casablanca","offsetString":""}];

                var getCalendarWeeks = function(selectedDate) {
                    var currentDate = moment(selectedDate).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
                    var weeks = [{
                        days: []
                    }];

                    if (currentDate.day() != 0) {
                        for (var i = 0; i < currentDate.day(); i++) {
                            weeks[weeks.length-1].days.push({
                                date: null
                            });
                        }
                    }

                    for (var i = 1; i <= moment().daysInMonth(); i++) {
                        var cWeek = weeks[weeks.length-1];
                        cWeek.days.push({
                            date: moment(currentDate)
                        });
                        currentDate.add(1, 'day');

                        if (currentDate.day() == 0) {
                            weeks.push({
                                days: []
                            });
                        }
                    }

                    for (var i = currentDate.day(); i <= 6; i++) {
                        weeks[weeks.length-1].days.push({
                            date: null
                        });
                    }

                    return weeks;
                };

                var getLocalOffset = function() {
                    var dateString = moment().toString();

                    var offsetRegex = new RegExp(/([\+|\-|Z|T]\d{2}[:]?\d{2})$/);
                    var offsetPartRegex = /^(\+|\-|T|Z)(\d{2})[:]?(\d{2})$/;
                    var offset = '-07:00';      // default

                    if (offsetRegex.test(dateString)) {
                        offset = offsetRegex.exec(dateString)[0];

                        if (offsetPartRegex.test(offset)) {
                            var offsetParts = offsetPartRegex.exec(offset);
                            offset = offsetParts[1] + offsetParts[2] + ':' + offsetParts[3];
                        }
                    }

                    return offset;
                };

                var isSet = function(obj) {
                    return obj != null && obj != undefined;
                };

                var validate = function() {
                    if (scope.Validate) {
                        scope.IsValid = scope.Validate({ date: scope.CurrentDate });
                    } else {
                        scope.IsValid = !scope.Required || (isSet(scope.CurrentDate) && scope.CurrentDate.isValid());
                    }
                };

                if (!scope.Placement) {
                    scope.Placement = 'left';
                }

                if (!isSet(scope.InitWithDate)) {
                    scope.InitWithDate = true;
                }

                if (scope.Required && scope.InitWithDate && !scope.CurrentDate) {
                    scope.CurrentDate = moment().zone(getLocalOffset());
                    scope.CurrentDate.milliseconds(0);
                } else if (scope.CurrentDate && scope.InitWithDate && !scope.CurrentDate.isValid()) {
                    scope.CurrentDate = moment().zone(getLocalOffset());
                    scope.CurrentDate.milliseconds(0);
                }

                scope.CurrentTime = {
                    hours: scope.CurrentDate ? scope.CurrentDate.hours() : null,
                    minutes: scope.CurrentDate ? scope.CurrentDate.minutes() : null,
                    zone: scope.CurrentDate ? scope.CurrentDate.format('Z') : getLocalOffset()
                };

                scope.TextFields = {
                    date: scope.CurrentDate ? scope.CurrentDate.format('YYYY-MM-DD') : null,
                    updating: false
                };

                scope.CalendarDate = scope.CurrentDate ? moment(scope.CurrentDate) : moment().zone(getLocalOffset());
                scope.Weeks = getCalendarWeeks(scope.CalendarDate);

                scope.ClearDate = function() {
                    scope.CurrentDate = null;

                    scope.TextFields.updating = true;
                    scope.TextFields.date = '';
                    scope.TextFields.updating = false;

                    scope.CurrentTime.hours = null;
                    scope.CurrentTime.minutes = null;
                    scope.CurrentTime.zone = getLocalOffset();

                    if (scope.OnChange) {
                        scope.OnChange({ newDate: scope.CurrentDate });
                    }
                    
                    validate();
                };

                scope.SelectToday = function() {
                    var today = moment().zone(getLocalOffset());
                    scope.SelectDate(today);
                    scope.CurrentTime.hours = today.hours();
                    scope.CurrentTime.minutes = today.minutes();
                    scope.CurrentTime.zone = today.format('Z');
                };

                scope.IsSelected = function(theDate) {
                    if (!theDate || !scope.CurrentDate) {
                        return false;
                    }

                    if (theDate.month() == scope.CurrentDate.month() && theDate.date() == scope.CurrentDate.date() && theDate.year() == scope.CurrentDate.year()) {
                        return true;
                    }

                    return false;
                };

                scope.GetDateDisplay = function(theDate) {
                    var date = theDate.date().toString();

                    if (date.length == 1) {
                        return '0' + date;
                    }

                    return date;
                };

                scope.SelectDate = function(theDate) {
                    if (!scope.CurrentDate) {
                        scope.CurrentDate = moment(theDate);
                    } else {
                        scope.CurrentDate.month(theDate.month());
                        scope.CurrentDate.date(theDate.date());
                        scope.CurrentDate.year(theDate.year());
                    }

                    if (!scope.CurrentTime.hours || !scope.CurrentTime.minutes) {
                        scope.CurrentTime.hours = scope.CurrentDate.hours();
                        scope.CurrentTime.minutes = scope.CurrentDate.minutes();
                        scope.CurrentTime.zone = scope.CurrentDate.format('Z');
                    }

                    scope.TextFields.updating = true;
                    scope.TextFields.date = scope.CurrentDate.format('YYYY-MM-DD');
                    scope.TextFields.updating = false;

                    if (scope.OnChange) {
                        scope.OnChange({ newDate: scope.CurrentDate });
                    }

                    scope.ClosePopover();
                    validate();
                };

                scope.ClosePopover = function() {
                    // This is a bit of a hack; It closes the popover... but if the popover is not the first child scope, this will fail.
                    scope.$$childHead.isOpen = false;
                };

                scope.SelectZone = function(zone) {
                    scope.CurrentTime.zone = zone.offsetString;

                    if (scope.CurrentDate) {
                        scope.CurrentDate.zone(zone.offsetString);
                    }

                    validate();
                };

                scope.ChangeYear = function(change) {
                    scope.CalendarDate.add(change, 'year');
                    scope.Weeks = getCalendarWeeks(scope.CalendarDate);
                };

                scope.ChangeMonth = function(change) {
                    scope.CalendarDate.add(change, 'month');
                    scope.Weeks = getCalendarWeeks(scope.CalendarDate);
                };

                scope.ChangeHour = function(change) {
                    if (isNaN(scope.CurrentTime.hours)) {
                        return;
                    }

                    scope.CurrentTime.hours += change;
                };

                scope.ChangeMinute = function(change) {
                    if (isNaN(scope.CurrentTime.minutes)) {
                        return;
                    }

                    scope.CurrentTime.minutes += change;
                };

                scope.$watch('CurrentTime', function(newCurrentTime) {
                    if (isNaN(newCurrentTime.hours) || isNaN(newCurrentTime.minutes) || newCurrentTime.hours == null || newCurrentTime.minutes == null) {
                        return;
                    }

                    if (newCurrentTime.hours > 23) {
                        scope.CurrentTime.hours = 0;
                        scope.$apply();
                        return;
                    } else if (newCurrentTime.hours < 0) {
                        scope.CurrentTime.hours = 23;
                        scope.$apply();
                        return;
                    }

                    if (newCurrentTime.minutes > 59) {
                        scope.CurrentTime.minutes = 0;
                        scope.$apply();
                        return;
                    } else if (newCurrentTime.minutes < 0) {
                        scope.CurrentTime.minutes = 59;
                        scope.$apply();
                    }

                    if (!scope.CurrentDate) {
                        var newMoment = moment().zone(newCurrentTime.zone);
                        newMoment.hours(newCurrentTime.hours);
                        newMoment.minutes(newCurrentTime.minutes);
                        scope.SelectDate(newMoment);
                        return;
                    }

                    scope.CurrentDate.hours(newCurrentTime.hours);
                    scope.CurrentDate.minutes(newCurrentTime.minutes);

                    validate();

                    if (scope.OnChange) {
                        scope.OnChange({ newDate: scope.CurrentDate });
                    }
                }, true);

                scope.$watch('TextFields.date', function(newDateField, oldDateField) {
                    if (scope.TextFields.updating) {
                        return;
                    }

                    var newDateString = newDateField + ' ' + (scope.CurrentDate ? scope.CurrentDate.format('hh:mm:ss Z') : '00:00:00 ' + getLocalOffset());
                    var newDate = moment(newDateString).zone(newDateString);

                    if (!newDate.isValid()) {
                        return;
                    }

                    if (!scope.CurrentDate) {
                        scope.CurrentDate = newDate;
                    } else {
                        scope.CurrentDate.year(newDate.year());
                        scope.CurrentDate.month(newDate.month());
                        scope.CurrentDate.date(newDate.date());
                    }

                    validate();

                    if (scope.OnChange) {
                        scope.OnChange({ newDate: scope.CurrentDate });
                    }
                });

                validate();
            }
        };
    });

/* ANGULAR TEMPLATE HERE */
angular.module('bootstrapMoment').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('bootstrapmoment.html',
    "<div><div class=\"date-group has-feedback\" ng-class=\"{ 'has-error': !IsValid }\"><div class=\"inner-addon right-addon\"><span tabindex=\"0\" class=\"glyphicon glyphicon-calendar inner-addon-middle\" popover-template=\"'calendarTemplate'\" popover-placement=\"{{Placement}}\" popover-append-to-body=\"true\"></span> <input type=\"text\" class=\"form-control date-text\" style=\"width: 100%\" ng-model=\"TextFields.date\" ng-model-options=\"{updateOn: 'blur'}\"></div><div class=\"inner-addon right-addon\"><i class=\"glyphicon glyphicon-chevron-up inner-addon-top\" ng-click=\"ChangeHour(1)\"></i> <i class=\"glyphicon glyphicon-chevron-down inner-addon-bottom\" ng-click=\"ChangeHour(-1)\"></i> <input type=\"text\" class=\"form-control\" style=\"width: 100%\" ng-model=\"CurrentTime.hours\"></div><div class=\"inner-addon right-addon\"><i class=\"glyphicon glyphicon-chevron-up inner-addon-top\" ng-click=\"ChangeMinute(1)\"></i> <i class=\"glyphicon glyphicon-chevron-down inner-addon-bottom\" ng-click=\"ChangeMinute(-1)\"></i> <input type=\"text\" class=\"form-control\" style=\"width: 100%\" ng-model=\"CurrentTime.minutes\"></div><button type=\"button\" class=\"btn btn-default btn-sm\" dropdown-toggle dropdown-append-to-body=\"false\" data-toggle=\"dropdown\">{{CurrentTime.zone}} <span class=\"caret\"></span></button><ul class=\"dropdown-menu pull-right\" role=\"menu\"><li ng-repeat=\"z in Zones\"><a ng-click=\"SelectZone(z)\">(UTC{{z.offsetString}}) {{z.name}}</a></li></ul><button type=\"button\" class=\"btn btn-default\" ng-click=\"SelectToday()\"><i class=\"glyphicon glyphicon-asterisk\" title=\"Today\"></i></button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"ClearDate()\"><i class=\"glyphicon glyphicon-remove\" title=\"Clear\"></i></button></div><script type=\"text/ng-template\" id=\"calendarTemplate\"><div class=\"date-popover\">\r" +
    "\n" +
    "            <table class=\"table\">\r" +
    "\n" +
    "                <thead>\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <th colspan=\"2\">\r" +
    "\n" +
    "                        <i class=\"glyphicon glyphicon-fast-backward\" title=\"Previous Year\" ng-click=\"ChangeYear(-1)\"></i>\r" +
    "\n" +
    "                        <i class=\"glyphicon glyphicon-backward\" title=\"Previous Month\" ng-click=\"ChangeMonth(-1)\"></i>\r" +
    "\n" +
    "                    </th>\r" +
    "\n" +
    "                    <th colspan=\"3\" style=\"text-align: center;\">\r" +
    "\n" +
    "                        {{CalendarDate.format('MMM')}} {{CalendarDate.year()}}\r" +
    "\n" +
    "                    </th>\r" +
    "\n" +
    "                    <th colspan=\"2\">\r" +
    "\n" +
    "                        <div class=\"pull-right\">\r" +
    "\n" +
    "                            <i class=\"glyphicon glyphicon-forward\" title=\"Next Month\" ng-click=\"ChangeMonth(1)\"></i>\r" +
    "\n" +
    "                            <i class=\"glyphicon glyphicon-fast-forward\" title=\"Next Year\" ng-click=\"ChangeYear(1)\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </th>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <th>Su</th>\r" +
    "\n" +
    "                    <th>Mo</th>\r" +
    "\n" +
    "                    <th>Tu</th>\r" +
    "\n" +
    "                    <th>We</th>\r" +
    "\n" +
    "                    <th>Th</th>\r" +
    "\n" +
    "                    <th>Fr</th>\r" +
    "\n" +
    "                    <th>Sa</th>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                </thead>\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                <tr ng-repeat=\"cWeek in Weeks\">\r" +
    "\n" +
    "                    <td ng-repeat=\"cDate in cWeek.days\" ng-class=\"{ 'selected': IsSelected(cDate.date) }\">\r" +
    "\n" +
    "                        <span ng-if=\"cDate.date\" ng-click=\"SelectDate(cDate.date)\">{{GetDateDisplay(cDate.date)}}</span>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"ClosePopover()\">Close</button></script></div>"
  );

}]);
