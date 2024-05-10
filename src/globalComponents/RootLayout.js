import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, StatusBar} from 'react-native';
/*
 RootLayout is a React component that serves as the root layout for the app.
 It provides a SafeAreaView with customizable background color and handles the
 status bar styling. 
 */
// Component for the root layout of the app
const RootLayout = ({bgColor, ...props}) => {
  // Set the background color of the layout
  const backgroundColor = bgColor || '#FFFFFF';

  return (
    // Wrap the content in a SafeAreaView to ensure it's visible within safe area boundaries
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: backgroundColor}}
        {...props}>
        {/* status bar style */}
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

        {/* Render the children components */}
        {props.children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RootLayout;
