/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

import PropTypes from "prop-types";
import jMoment from "moment-jalaali";
import uuid from "uuid/v4";
import { View } from "react-native";

import Day, { DayProps } from "./Day";
import EmptyDay from "./EmptyDay";
import Utils from "./utils";

//Fallback when RN version is < 0.44

export default function DaysGridView(props: Omit<DayProps, "day">) {
  const {
    month,
    year,
    styles,
    onPressDay,
    selectedStartDate,
    selectedEndDate,
    allowRangeSelection,
    textStyle,
    todayTextStyle,
    selectedDayStyle,
    selectedRangeStartStyle,
    selectedRangeStyle,
    selectedRangeEndStyle,
    customDatesStyles,
    minDate,
    maxDate,
    disabledDates,
    minRangeDuration,
    maxRangeDuration,
    enableDateChange,
  } = props;
  // const today = jMoment.utc();
  // let's get the total of days in this month, we need the year as well, since
  // leap years have different amount of days in February
  const totalDays = Utils.getDaysInMonth(month, year);
  // Let's create a date for day one of the current given month and year
  const firstDayOfMonth = jMoment
    .utc()
    .jYear(year)
    .jMonth(month)
    .jDate(1);
  // The weekday() method returns the day of the week (from 0 to 6) for the specified date.
  // Note: Sunday is 0, Monday is 1, and so on. We will need this to know what
  // day of the week to show day 1
  const firstWeekDay = (firstDayOfMonth.isoWeekday() + 1) % 7;
  // fill up an array of days with the amount of days in the current month
  //@ts-ignore
  const days = Array.apply<number>(null, { length: totalDays }).map(
    Number.call,
    Number
  );
  const guideArray = [0, 1, 2, 3, 4, 5, 6];

  // Get the starting index, based upon whether we are using monday or sunday as first day.
  const startIndex = firstWeekDay;

  function generateColumns(i) {
    const column = guideArray.map((index) => {
      if (i === 0) {
        // for first row, let's start showing the days on the correct weekday
        if (index >= startIndex) {
          if (days.length > 0) {
            const day = days.shift() + 1;
            return (
              <Day
                key={day}
                day={day}
                month={month}
                year={year}
                styles={styles}
                onPressDay={onPressDay}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                allowRangeSelection={allowRangeSelection}
                minDate={minDate}
                maxDate={maxDate}
                disabledDates={disabledDates}
                minRangeDuration={minRangeDuration}
                maxRangeDuration={maxRangeDuration}
                textStyle={textStyle}
                todayTextStyle={todayTextStyle}
                selectedDayStyle={selectedDayStyle}
                selectedRangeStartStyle={selectedRangeStartStyle}
                selectedRangeStyle={selectedRangeStyle}
                selectedRangeEndStyle={selectedRangeEndStyle}
                customDatesStyles={customDatesStyles}
                enableDateChange={enableDateChange}
              />
            );
          }
        } else {
          return <EmptyDay key={uuid()} styles={styles} />;
        }
      } else {
        if (days.length > 0) {
          const day = days.shift() + 1;
          return (
            <Day
              key={day}
              day={day}
              month={month}
              year={year}
              styles={styles}
              onPressDay={onPressDay}
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
              allowRangeSelection={allowRangeSelection}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
              minRangeDuration={minRangeDuration}
              maxRangeDuration={maxRangeDuration}
              textStyle={textStyle}
              todayTextStyle={todayTextStyle}
              selectedDayStyle={selectedDayStyle}
              selectedRangeStartStyle={selectedRangeStartStyle}
              selectedRangeStyle={selectedRangeStyle}
              selectedRangeEndStyle={selectedRangeEndStyle}
              customDatesStyles={customDatesStyles}
              enableDateChange={enableDateChange}
            />
          );
        }
      }
    });
    return column;
  }
  return (
    //@ts-ignore
    <View style={styles.daysWrapper}>
      {guideArray.map((index) => (
        //@ts-ignore
        <View key={index} style={styles.weekRow}>
          {generateColumns(index)}
        </View>
      ))}
    </View>
  );
}
