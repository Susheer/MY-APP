import React, { Component } from 'react';
import {Card, CardItem, Body, Text } from 'native-base';
import ItemCard from "./itemCard"
import { TouchableOpacity,Modal,StyleSheet,Alert,Pressable,View } from 'react-native';
export default class CardExample extends Component {
 state={
  modalVisible:false
 }
 setModalVisible=(bool)=>{
this.setState({modalVisible:bool})
 }
  render() {
    const {item}=this.props;
     const {modalVisible}=this.state
    return (
      <>
        <TouchableOpacity
          key={item.name}
          onPress={() => {
            this.setModalVisible(true)
          }}
        >
          <Card>
            <CardItem>
              <Body>
                <Text>{item.name}</Text>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          this.setModalVisible(!modalVisible)
          }}
        >
       
         <ItemCard name={item.name} category={item.category}/>
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Buy Now</Text>
              </Pressable>
          
     
        </Modal>
      </>
    );

  }
}


const styles = StyleSheet.create({
  button: {
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});