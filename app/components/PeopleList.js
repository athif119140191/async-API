import React, { Component } from "react";
import {
  StyleSheet, FlatList, Text, Image, View,
  TouchableOpacity, Modal, TouchableWithoutFeedback,
} from "react-native";
import PropTypes from "prop-types";
import PeopleDetail from "./PeopleDetail";

export default class PeopleList extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      Dpicture: "",
      Dnama: "",
      Dcell: "",
      Demail: "",
      Daddr: "",
      Dcoun: "",
    };
  }
  _keyExtractor = item => item.email;

  setModalVisible = (visible) => {
      this.setState({ modalVisible: visible,
       });
    };

  setItem = (Item) => {
        this.setState({ Dpicture: Item.picture.large,
                        Dnama: Item.name.title + " " + Item.name.first + " " + Item.name.last,
                        Dcell: Item.cell,
                        Demail: Item.email,
                        Daddr: Item.location.street.number + " " + Item.location.street.name + " Street"  ,
                        Dcoun: Item.location.city + ", VA " + Item.location.postcode + "\n" + 
                                Item.location.state + ", " + Item.location.country,
         });
      };

  _renderItem = ({ item }) => {
    const { name, picture, cell, email } = item;
    
    //const { modalVisible, Dpicture, Dnama, Dcell, Demail, Daddr, Dcoun } = this.state;

    return (
      <View>
      <TouchableOpacity onPress={() => {
                    this.setModalVisible(true);
                    this.setItem(item);
                  }}>
          <View style={styles.cardContainerStyle}>
            <View style={{ paddingRight: 5 }}>
              <Text style={styles.cardTextStyle}>
                {name.first} {name.last} {"\n"}
                {cell} {"\n"}
                {email}
              </Text>
            </View>
            <Image
              style={styles.faceImageStyle}
              source={{ uri: picture.medium }}
            />
          </View>
      </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { modalVisible, Dpicture, Dnama, Dcell, Demail, Daddr, Dcoun } = this.state;
    
    //let content = <PeopleDetail navigation={this.props.navigation}/>
    return (
      <View>
        <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 24, color: 'white'}}>PAM async API</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 14, color: 'white'}}>Athif Najmudin 119140191</Text>
          <Text style={{fontSize: 14, color: 'white'}}>Fathimatul Mahmudzah 119140168</Text>
        </View>
      <FlatList
        style={{ flex: 1 }}
        data={this.props.people}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal is closed");
          }}
        >
          <TouchableWithoutFeedback onPress={() => {
            this.setModalVisible(!modalVisible);
          }}>
            <View style={{
              flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
              paddingVertical: 100
            }}>
              <PeopleDetail
                    picture= {Dpicture}
                    nama= {Dnama}
                    cell= {Dcell}
                    email= {Demail}
                    addr= {Daddr}
                    coun= {Dcoun}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

PeopleList.propTypes = {
  people: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "#4e8087",
    padding: 10
  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
  cardTextStyle: {
    color: "white",
    textAlign: "left"
  }
});