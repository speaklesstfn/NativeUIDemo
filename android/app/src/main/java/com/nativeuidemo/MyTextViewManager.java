package com.nativeuidemo;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import android.graphics.Color;
import android.widget.TextView;

/**
 * 自定义TextView供JS调用
 * <p>
 * Created by tfn on 17-1-5.
 */

public class MyTextViewManager extends SimpleViewManager<TextView> {
    @Override
    public String getName() {
        return "MyTextView";
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        TextView tv = new TextView(reactContext);
        return tv;
    }

    @ReactProp(name = "text")
    public void setText(TextView textView, String text) {
        textView.setText(text);
    }

    @ReactProp(name = "textSize")
    public void setTextSize(TextView textView, float fontSize) {
        textView.setTextSize(fontSize);
    }

    @ReactProp(name = "textColor", defaultInt = Color.BLACK)
    public void setTextColor(TextView textView, int textColor) {
        textView.setTextColor(textColor);
    }

    @ReactProp(name = "isAlpha", defaultBoolean = false)
    public void setTextAlpha(TextView textView, boolean isAlpha) {
        if (isAlpha) {
            textView.setAlpha(0.5f);
        } else {
            textView.setAlpha(1.0f);
        }
    }
}
