import React from 'react'
import {
    Text, StyleSheet, View,
    Image,
} from 'react-native';
//import PropTypes from "prop-types";

const PeopleDetail = (props) => {
    //const { picture, nama, cell, email } = route?.params || {};
    
    return (
        <View style={styles.cardContainerStyle}>
            <View style={{ alignItems: 'center', }}>
            <Image
                style={styles.faceImageStyle}
                source={{ uri: props.picture }}
            />
            </View>
            <Text style={styles.cardTextStyle}>
                {props.nama} {"\n"}
                {props.cell} {"\n"}
                {props.email} {"\n"}
                {props.addr} {"\n"}
                {props.coun}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#093339"
    },
    cardContainerStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#4e8087",
        padding: 10,
        width: 300
    },
    faceImageStyle: {
        width: 200,
        height: 200
    },
    cardTextStyle: {
        color: "white",
        textAlign: "left",
        fontSize: 20
    }
});

export default PeopleDetail;