import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class ItemScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
        eggs:'',
        bread:'',
        Milk:'',
        candies:'',
        fruits:'',

        }
    }
    getDetails=()=>{
        var requestRef=db.collection('valuables').doc(this.state.userId)
        .get()
        .then((doc)=>{
            this.setState({
eggs:doc.data().quantity,
bread:doc.data().quantity,
Milk:doc.data().quantity,
candies:doc.data().quantity,
fruits:doc.data().quantity,

            })

            
        })
    }
    componentDidMount(){
        this.getDetails()

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.formContainer}></View>
                <Text>eggs</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                placeholder={'price'}
                onChangeText={(text)=>{
                    this.setState({
                        eggs:text
                    })
                }}
                value={this.state.eggs}/>
                 <Text>bread</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                placeholder={'price'}
                onChangeText={(text)=>{
                    this.setState({
                        bread:text
                        
                    })
                }}
                value={this.state.bread}/>
                 <Text>Milk</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                placeholder={'price'}
                onChangeText={(text)=>{
                    this.setState({
                        Milk:text
                    })
                }}
                value={this.state.fruits}/>
                 <Text>fruits</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                placeholder={'price'}
                onChangeText={(text)=>{
                    this.setState({
                        fruits:text
                    })
                }}
                value={this.state.fruits}/>
                 <Text>candies</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                placeholder={'price'}
                onChangeText={(text)=>{
                    this.setState({
                        candies:text
                    })
                }}
               
                
                value={this.state.candies}/>
            </View>
            
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
formContainer:{
    flex:1,
    width:'100%',
    alignItems:'center'
},
formTextInput:{
    width:'20%',
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
}
})