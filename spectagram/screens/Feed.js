
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
import {PostCard} from 'CreatePost.js'
export default class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                        source={require("../assets/logo.png")}
                        style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                        </View> 
                        </View>
                        <View style={styles.cardContainer}>
                            <FlatList
                            keyExtractor={this.keyExtractor}
                            data={posts}
                            renderItem={this.renderItem}
                            />
                </View>
            </View>

            

        );
    }
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:"black"
},
droidSafeArea: {
    marginTop: isSearchBarAvailableForCurrentPlatform.OS === "android" ? statusbar.currentHeight : RFValue(35)
},
appTittle: {
    flex: 0.07,
    flexDirection:row
},
appIcon: {
    flex:0.2,
    justifyContent: "center",
    alignItems:"center",
},
iconImage: {
    width:"100%",
    height:"100%",
    resizeMode:"contain"
},
appTitleTextContainer: {
    flex: 0.8,
    justifyContent:"center"
},
appTitleText:{
    color:"white",
    fontSize: RFValue(28),
},
cardContainer:{
    flex:0.85
}

});