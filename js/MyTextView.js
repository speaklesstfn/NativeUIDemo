/**
 * Created by tfn on 17-1-5.
 */

import React, {Component, PropTypes}from 'react';

import RCTTextView from './MyTextViewManager';

export default class MyTextView extends Component {
    //默认属性定义使用static propTypes
    static propTypes = {
        onChangeMessage: PropTypes.func,
    };

    render() {
        return (
            <RCTTextView
                {...this.props}
                onChange={this._onChange}
            />
        );
    }

    _onChange = (event: Event) => {
        if (!this.props.onChangeMessage) {
            return;
        }

<<<<<<< HEAD
        if (event.nativeEvent.msg === 'MyMsg') {
            this.props.onChangeMessage();
            return;
        }
=======
        this.props.onChangeMessage(event.nativeEvent.msg);
>>>>>>> a07aaaffc19e81781f6c64e552667de1d846fe14
    };
}

