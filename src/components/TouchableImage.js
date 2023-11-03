import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';

const TouchableImageComponent = ({style, src}) => {
  return (
    <TouchableOpacity style={style}>
      <Image style={{width: 18, height: 18}} source={src} />
    </TouchableOpacity>
  );
};
export default TouchableImageComponent;
