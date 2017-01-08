/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MyTextView from './js/MyTextView';

export default class NativeUIDemo extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <MyTextView style={styles.myTextView}
                            text={'cesc=cdfsdfsiy'}
                            textSize={18}
                            isAlaph={true}
                            onChangeMessage={this.onTextViewPressed}
                />
            </View>
        );
    }

    onTextViewPressed = () => {
        alert('自定义UI组件被点击了！！！');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    myTextView: {
        width: 300,
        height: 100,
    },
});

AppRegistry.registerComponent('NativeUIDemo', () => NativeUIDemo);
