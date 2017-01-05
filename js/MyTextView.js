/**
 * Created by tfn on 17-1-5.
 */

import {PropTypes}from 'react';

import {requireNativeComponent,} from 'react-native';

let myTextView = {
    names: 'textView',
    propTypes: {
        text: PropTypes.string,
        textSize: PropTypes.number,
        textColor: PropTypes.number,
        isAlpha: PropTypes.boolean,
    },
};