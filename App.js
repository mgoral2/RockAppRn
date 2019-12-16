import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import image25 from './Images/25.jpeg';
import image24 from './Images/24.jpeg';
import image23 from './Images/23.jpeg';
import image22 from './Images/22.jpeg';
import image21 from './Images/21.jpeg';
import image20 from './Images/20.jpeg';
import image19 from './Images/19.jpeg';
import image18 from './Images/18.jpeg';
import image17 from './Images/17.jpeg';
import image16 from './Images/16.jpeg';
import image15 from './Images/15.jpeg';
import image14 from './Images/14.jpeg';
import image13 from './Images/13.jpeg';
import image12 from './Images/12.jpeg';
import image11 from './Images/11.jpeg';
import image10 from './Images/10.jpeg';
import image9 from './Images/9.jpeg';
import image8 from './Images/8.jpeg';
import image7 from './Images/7.jpeg';
import image6 from './Images/6.jpeg';
import image5 from './Images/5.jpeg';
import image4 from './Images/4.jpeg';
import image3 from './Images/3.jpeg';
import image2 from './Images/2.jpeg';
import image1 from './Images/1.jpeg';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {WhichRecord: 25}
  }

  RandomNumber = () => {
    this.setState((state, props) => ({
      WhichRecord: Math.floor((Math.random()*25))+1
    }));
    console.log(this.state.WhichRecord);
  };

  render () {
    var ImageArray = [26];


        ImageArray[25] = [image25, "James Brown", "Live at the Apollo"];
        ImageArray[24] = [image24, "Stevie Wonder", "Innervisions"];
        ImageArray[23] = [image23, "John Lennon", "Plastic Ono Band"];
        ImageArray[22] = [image22, "Robert Johnson", "The Complete Recordings"];
        ImageArray[21] = [image21, "Chuck Berry", "The Great Twenty-Eight"];
        ImageArray[20] = [image20, "Michael Jackson", "Thriller"];
        ImageArray[19] = [image19, "Van Morrison", "Astral Weeks"];
        ImageArray[18] = [image18, "Bruce Springsteen", "Born To Run"];
        ImageArray[17] = [image17, "Nirvana", "Nevermind"];
        ImageArray[16] = [image16, "Bob Dylan", "Blood on the Tracks"];
        ImageArray[15] = [image15, "The Jimmy Hendrix Experience", "Are You Experienced?"];
        ImageArray[14] = [image14, "The Beatles", "Abbey Road"];
        ImageArray[13] = [image13, "The Velvet Underground and Nico", "The Velvet Underground"];
        ImageArray[12] = [image12, "Miles Davis", "Kind of Blue"];
        ImageArray[11] = [image11, "Elvis Presley", "The Sun Sessions"];
        ImageArray[10] = [image10, "The Beatles", "The White Album"];
        ImageArray[9] = [image9, "Bob Dylan", "Blonde on Blonde"];
        ImageArray[8] = [image8, "The Clash", "London Calling"];
        ImageArray[7] = [image7, "The Rolling Stones", "Exile on Main Street"];
        ImageArray[6] = [image6, "Marvin Gaye", "What's Going On"];
        ImageArray[5] = [image5, "The Beatles", "Rubber Soul"];
        ImageArray[4] = [image4, "Bob Dylan", "Highway 61 Revisited"];
        ImageArray[3] = [image3, "The Beatles", "Revolver"];
        ImageArray[2] = [image2, "The Beach Boys", "Pet Sounds"];
        ImageArray[1] = [image1, "The Beatles", " Sgt. Pepper's Lonely hearts Club Band"];

  return (
    <View>
      <Image source = {ImageArray[this.state.WhichRecord][0]}/>
      <Text>  Artist: {ImageArray[this.state.WhichRecord][1]} </Text>
      <Text>  Album: {ImageArray[this.state.WhichRecord][2]} </Text>
      <Button title = "Press Me" onPress={this.RandomNumber}/>
    </View>
  );
}
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
