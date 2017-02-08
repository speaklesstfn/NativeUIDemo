/**
 * Created by tfn on 2017/1/8.
 */
import {PropTypes} from 'react';

import {requireNativeComponent, View,} from 'react-native';

let myTextView = {
    name: 'textView',
    propTypes: {
        text: PropTypes.string,
        textSize: PropTypes.number,
        textColor: PropTypes.string,
        isAlpha: PropTypes.bool,
        ...View.propTypes,//添加默认View的属性，否则会导致各种属性未定义错误
    },
};

module.exports = requireNativeComponent('MyTextView', myTextView);