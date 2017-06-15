import {NativeModules,ToastAndroid,Platform} from 'react-native';

var RCTToastAndroid = Platform.OS === 'android' ? ToastAndroid : NativeModules.LRDRCTSimpleToast;

var SimpleToast = {
  // Toast duration constants
  SHORT: RCTToastAndroid.SHORT,
  LONG: RCTToastAndroid.LONG,

  // Toast gravity constants
  TOP: RCTToastAndroid.TOP,
  BOTTOM: RCTToastAndroid.BOTTOM,
  CENTER: RCTToastAndroid.CENTER,

  show: function (
    message,
    duration,
    color
  ) {
    RCTToastAndroid.show(message, duration === undefined ? this.SHORT : duration,color);
  },

  showWithGravity: function (
    message,
    duration,
    gravity,
    color
  ) {
    RCTToastAndroid.showWithGravity(message, duration === undefined ? this.SHORT : duration, gravity,color);
  },
};

export default SimpleToast;
