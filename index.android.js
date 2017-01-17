/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

import MyTextView from './js/MyTextView';


export default class NativeUIDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <MyTextView
                    style={styles.myTextView}
                    text={'这是来自于原生的TextView'}
                    textSize={18}
                    isAlaph={true}
                    onChangeMessage={this.onTextViewPressed}
                />
            </View>
        );
    }

    onTextViewPressed = (msg) => {
        alert('自定义UI组件被点击了！！！' + msg);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    myTextView: {
        width: 250,
        height: 25,
        backgroundColor: 'darkgray',
    },
});

AppRegistry.registerComponent('NativeUIDemo', () => NativeUIDemo);
