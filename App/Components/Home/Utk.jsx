// import React from 'react'
// import { Image, SafeAreaView, Text, View } from 'react-native'
// import Colors from '../../Common/Colors'

// const Utk = () => {
//     return (
//         <SafeAreaView style={{ backgroundColor: "white", marginBottom: 0 }}>
//             <Image source={{ uri: "https://avatars.githubusercontent.com/u/122993091?v=4" }} style={{ width: 250, height: 250, borderRadius: 125, marginLeft: 50 }} />
//             <Text style={{ marginTop: 30, marginBottom:80,fontSize: 18, lineHeight: 25, letterSpacing: 2, fontStyle: "italic" }}>
//                 Hey there! Thanks for checking out my React Native News App! My name is Utkarsh and I'm the developer behind this app. It took me 4 days to create this app and I'm excited to share it with you. I hope you'll find it useful and enjoy using it as much as I enjoyed creating it.

//                 If you want to check out my other projects, head over to my GitHub page at github.com/utk145. Thanks for viewing!
//             </Text>
//         </SafeAreaView>

//     )
// }

// export default Utk



// import React from 'react';
// import { Image, SafeAreaView, Text, View, StyleSheet, Dimensions } from 'react-native';
// import Colors from '../../Common/Colors';

// const { width } = Dimensions.get('window');
// const imageSize = width * 0.5;

// const Utk = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: "https://avatars.githubusercontent.com/u/122993091?v=4" }} style={[styles.image, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]} />
//       </View>
//       <Text style={styles.text}>
//         Hey there! Thanks for checking out my React Native News App! My name is Utkarsh and I'm the developer behind this app. It took me 4 days to create this app and I'm excited to share it with you. I hope you'll find it useful and enjoy using it as much as I enjoyed creating it.

//         If you want to check out my other projects, head over to my GitHub page at github.com/utk145. Thanks for viewing!
//       </Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   image: {
//     resizeMode: 'cover',
//   },
//   text: {
//     marginHorizontal: 20,
//     fontSize: 18,
//     lineHeight: 25,
//     letterSpacing: 2,
//     fontStyle: 'italic',
//     textAlign: 'center',
//   },
// });

// export default Utk;







// import React from 'react';
// import { Image, SafeAreaView, Text, View, StyleSheet, Dimensions, TouchableHighlight, Linking } from 'react-native';
// import Colors from '../../Common/Colors';

// const { width } = Dimensions.get('window');
// const imageSize = width * 0.5;

// const Utk = () => {

//   const handleGithubLinkPress = () => {
//     // Open link to github.com/utk145 in browser
//     Linking.openURL('https://github.com/utk145');
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: "https://avatars.githubusercontent.com/u/122993091?v=4" }} style={[styles.image, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]} />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>
//           Hey there! Thanks for checking out my React Native News App! My name is Utkarsh and I'm the developer behind this app. It took me 4 days to create this app and I'm excited to share it with you. I hope you'll find it useful and enjoy using it as much as I enjoyed creating it.
//         </Text>
//         <TouchableHighlight onPress={handleGithubLinkPress} underlayColor="transparent">
//           <Text style={styles.linkText}>
//             github.com/utk145
//           </Text>
//         </TouchableHighlight>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 30,
//     marginTop:70
//   },
//   image: {
//     resizeMode: 'cover',
//   },
//   textContainer: {
//     marginHorizontal: 20,
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   text: {
//     marginBottom: 20,
//     fontSize: 18,
//     lineHeight: 25,
//     letterSpacing: 2,
//     fontStyle: 'italic',
//     textAlign: 'center',
//   },
//   linkText: {
//     fontSize: 18,
//     lineHeight: 25,
//     letterSpacing: 2,
//     fontWeight: 'bold',
//     color: Colors.primary,
//   },
// });

// export default Utk;




import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet, Dimensions, TouchableHighlight, Linking } from 'react-native';
import Colors from '../../Common/Colors';

const { width } = Dimensions.get('window');
const imageSize = width * 0.5;

const Utk = () => {

  const handleGithubLinkPress = () => {
    // Open link to github.com/utk145 in browser
    Linking.openURL('https://github.com/utk145');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: "https://avatars.githubusercontent.com/u/122993091?v=4" }} style={[styles.image, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hey there! Thanks for checking out my React Native News App! My name is Utkarsh and I'm the developer behind this app. It took me 4 days to create this app and I'm excited to share it with you. I hope you'll find it useful and enjoy using it as much as I enjoyed creating it.
        </Text>
        <TouchableHighlight onPress={handleGithubLinkPress} underlayColor="transparent">
          <Text style={styles.linkText}>
            github.com/utk145
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Updated marginBottom value
  },
  image: {
    resizeMode: 'cover',
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 30, // Adjusted marginTop value to match the reduced marginBottom value in imageContainer
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 2,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  linkText: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default Utk;
