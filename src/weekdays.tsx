/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

import { Text, View } from "react-native";
import Utils from "./utils";

function Weekdays(props: {
  styles: any;
  startFromMonday: any;
  weekdays: any;
  textStyle: any;
}) {
  const { styles, startFromMonday, weekdays, textStyle } = props;
  let wd = weekdays;
  if (!wd) {
    //@ts-ignore
    wd = startFromMonday ? Utils.WEEKDAYS_MON : Utils.WEEKDAYS; // English Week days Array
  }

  return (
    <View style={styles.dayLabelsWrapper}>
      {wd.map((day, key) => {
        return (
          <Text key={key} style={[styles.dayLabels, textStyle]}>
            {day}
          </Text>
        );
      })}
    </View>
  );
}

export default Weekdays;
