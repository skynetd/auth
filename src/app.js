import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import {LoginForm} from './components/LoginForm';

class App extends Component {
    componentWillMount (){
        firebase.initializeApp({
            apiKey: 'AIzaSyCXOVaMOED4IFBfKot7iXV-R9x9dd5wEU0',
            authDomain: 'authentication-a0904.firebaseapp.com',
            databaseURL: 'https://authentication-a0904.firebaseio.com',
            projectId: 'authentication-a0904',
            storageBucket: 'authentication-a0904.appspot.com',
            messagingSenderId: '699958158474'
        });
    }
    
    render(){
        return(
            <View>
                <Header headerText={"Authentication"}/>
                <LoginForm />
                console.log(View, firebase, Header, LoginForm);
            </View>
        );
    }
}

export default App;