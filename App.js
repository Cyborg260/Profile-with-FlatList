import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image, TouchableOpacity } 
from 'react-native';

const DATA = [
  {
    
    title: 'Mark Doe',
    possition:'active',
    tinyLogo:require('./android/assets/usericon.png')
    
  },
  {
    
    title: 'Jon Doe',
    possition:'active',
    tinyLogo:require('./android/assets/usericon3.png')


  },
  {
    
    title: 'Clark Man',
    possition:'active',
    tinyLogo:require('./android/assets/usericon4.png'),
    

  },
  {
    
    title: 'Jaden Boor',
    possition:'active',
    tinyLogo:require('./android/assets/usericon5.png')

  },
  {
    
    title: 'Srick Tree',
    possition:'active',
    tinyLogo:require('./android/assets/usericon9.png')

  },
  {
    
    title: 'Damon',
    possition:'active',
    tinyLogo:require('./android/assets/usericon6.png')
    

    
  },
  {
    
    title: 'Stefan',
    possition:'active',
    tinyLogo:require('./android/assets/usericon7.png')

  },
  {
    
    title: 'Elena',
    possition:'active',
    tinyLogo:require('./android/assets/usericon2.png')

    
  },
  
];

const Item = ({ title ,possition,tinyLogo}) => (
  <View style={styles.item}>
    <View style={{
      // backgroundColor:'red'
      }}>
    <Image style={styles.tinyLogo} source={tinyLogo}/>
    </View>
    <View style={{
      // backgroundColor:'green'
      }}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title2}>{possition}</Text>
    </View>
    <View style={{
      // backgroundColor:'red'
      }}>
      <Text style={{marginLeft:100}}>Mobile</Text>
    </View>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item 
    title={item.title}
    possition={item.possition}
    tinyLogo={item.tinyLogo}
    />
    
  );
 
  return (
    <SafeAreaView style={styles.container}>
      <FlatList   
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item=>item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e6e6fa'
    
  },
  item: {
    flexDirection:'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 0.5,
  
  },
  title: {
    fontSize: 24,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:20
    
  },
  title2: {
    fontSize: 12,
    color:'#0000ff',
    marginLeft:20
    
  },
   tinyLogo:{
    width:70,
    height:70,
    
  }

});

export default App;