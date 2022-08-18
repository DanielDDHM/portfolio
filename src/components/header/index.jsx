import { headerStyle } from './styles';
import { Navi } from '../../constants';
import { FlatList, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';

export function Header() {
    const {header, header_div, header_logo} = headerStyle;

    const [head, setHead] = useState([])

    useEffect(() => {
        setHead(Navi)
    })
  return (
    <ScrollView style={{ header }}>
      <ScrollView style={{ header_div }}>
        <Text style={{ header_logo }}>Daniel Machado</Text>
      </ScrollView>
      <ScrollView style={{ header_div }}>
        <FlatList
         data={head}
         renderItem={({item}) => <Text>{item.class}</Text>}
        />
      </ScrollView>
    </ScrollView>
  );
}
