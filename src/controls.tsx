/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
import { Text, TouchableOpacity } from "react-native";

function Controls({
  styles,
  textStyles,
  label,
  onPressControl,
}: {
  styles: any[];
  textStyles: any;
  label: string;
  onPressControl: () => void;
}) {
  return (
    <TouchableOpacity onPress={() => onPressControl()}>
      <Text style={[styles, textStyles]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Controls;
