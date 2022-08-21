import { StyleSheet, Text, View } from 'react-native';
import {default_colors}  from '../../constants' 

export function ExpCard({ props }) {
  const { title, employer, date, acts } = props;
  return (
    <View style={CardStyle.container}>
      <View style={CardStyle.div}>
        <Text style={CardStyle.text}>{title}</Text>
      </View>
      <View style={CardStyle.div}>
        <Text style={CardStyle.text}>{employer}</Text>
        <Text style={CardStyle.text}>{date}</Text>
      </View>
      <View style={CardStyle.div}>
        {acts.map((item) => (
          <Text key={item.id} style={CardStyle.text}>
            {item.act}
          </Text>
        ))}
      </View>
    </View>
  );
}

export const CardStyle = StyleSheet.create({
  container: {
    borderColor: default_colors.secondary,
    borderWidth: '1px',
    borderRadius: '5px',
    minWidth: '225px',
    minHeight: '200px',
    padding: '10px',
    textAlign: 'center',
    gap: '10px',

    shadowOffset: { width: 4, height: 2 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  text: {
    color: default_colors.texts,
  },
  div: {
    borderBottomColor: default_colors.secondary,
    borderWidth: '1px',
  },
});
