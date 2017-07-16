# react-native-simple-toast
React Native Toast component for both Android and iOS. It just let iOS have the same toast performance with Android. Using [scalessec/Toast](https://github.com/scalessec/Toast) for iOS;

## Install
You can use [rnpm](https://github.com/rnpm/rnpm) to install native component easily;

```bash
npm install react-native-simple-toast --save
rnpm link
```

## Usage

It's just the same as [ToastAndroid](http://facebook.github.io/react-native/docs/toastandroid.html)

```javascript
import Toast from 'react-native-simple-toast';

Toast.show('This is a toast.');
Toast.show('This is a long toast.',Toast.LONG);
```
## Options

Toast was been able to make customizable through these properties

```javascript
{
            width:300,
            height:50,
            backgroundColor: "#C2F8FF",
            color: "#ffffff",
            borderWidth: 3,
            borderColor: "#C2F8FF",
            borderRadius: 3
}

```
if you want to make a customizable toast,you add an object like above to `show` and `showGravity`

#### Example usage:

```javascript
import Toast from 'react-native-simple-toast';
const style={
                        width:300,
                        height:50,
                        backgroundColor: "#C2F8FF",
                        color: "#ffffff",
                        borderWidth: 3,
                        borderColor: "#C2F8FF",
                        borderRadius: 3
            };
Toast.show('This is a long toast.',Toast.LONG,style);


Toast.showWithGravity(message, Toast.SHORT,Toast.TOP,style)
```
These are properties that can make customizable
`width`,
`height`,
`backgroundColor`,
`color`,
`borderColor`,
`borderWidth` 
You can make customizable all of them or some of them or you can use default toast style.