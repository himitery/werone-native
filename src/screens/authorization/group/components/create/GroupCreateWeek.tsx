import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Week from '@api/domain/week';
import { LightTheme } from '@constants/color';

interface GroupCreateWeekProps {
  value: Week;
  setValue: React.Dispatch<React.SetStateAction<Week>>;
  style: StyleProp<ViewStyle>;
}

const GroupCreateWeek: React.FC<GroupCreateWeekProps> = ({
  value,
  setValue,
  style,
}) => {
  const handleOnValueChange = useCallback(
    (value) => {
      setValue(value);
    },
    [setValue]
  );

  return (
    <View style={style}>
      <Text style={styles.text}>요일 및 시간</Text>
      <Picker selectedValue={value} onValueChange={handleOnValueChange}>
        <Picker.Item label={'월요일'} value={Week.MONDAY} />
        <Picker.Item label={'화요일'} value={Week.TUESDAY} />
        <Picker.Item label={'수요일'} value={Week.WEDNESDAY} />
        <Picker.Item label={'목요일'} value={Week.THURSDAY} />
        <Picker.Item label={'금요일'} value={Week.FRIDAY} />
        <Picker.Item label={'토요일'} value={Week.SATURDAY} />
        <Picker.Item label={'일요일'} value={Week.SUNDAY} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: LightTheme.TEXT,
  },
});

export default GroupCreateWeek;
