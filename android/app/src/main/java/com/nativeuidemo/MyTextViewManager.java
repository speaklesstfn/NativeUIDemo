package com.nativeuidemo;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import android.graphics.Color;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
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
    protected TextView createViewInstance(final ThemedReactContext reactContext) {
        final TextView textView = new TextView(reactContext);
        //注册原生事件
        textView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if (event.getAction() == MotionEvent.ACTION_DOWN) {
                    WritableMap nativeEvent = Arguments.createMap();
                    nativeEvent.putString("msg", "MyMsg");

                    //topChange是定义在UIManagerModuleConstants.java里（com.facebook.react.uimanager包），会自动绑定JS端的onChange事件
                    reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(textView.getId(), "topChange", nativeEvent);
                    return true;
                } else {
                    return false;
                }
            }
        });

        return textView;
    }

    @ReactProp(name = "text")
    public void setText(TextView textView, String text) {
        textView.setText(text);
    }

    @ReactProp(name = "textSize")
    public void setTextSize(TextView textView, float fontSize) {
        textView.setTextSize(fontSize);
    }

    @ReactProp(name = "textColor")
    public void setTextColor(TextView textView, String textColor) {
        textView.setTextColor(Color.parseColor(textColor));
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
