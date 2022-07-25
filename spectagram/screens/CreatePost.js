import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import * as Font from "expo-font";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
export default class CreatePost extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={StyleSheet.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image 
                        source={require("../assets/logo.png")}
                        
                        style={styles.iconImage}>
                        
                        </Image>
                        
                        </View>

                        <View style={styles.appTititleTextContainer}>
                            <Text style={styles.appTittleText}>New Post</Text>
                            </View>
                            </View>
                            <View style={styles.fieldsContainer}>
                                <ScrollView>
                                    <Image
                                    soucre={preview_images [this.state.previewImage]}
                                    style={styles.previewImage}
                                    ></Image>
                                    <View style={{ height:
                                    RFValue(this.state.dropdownHeight)  }} >

                                      // code for dropdown picker

                                      <DropDownPicker
                                      items={[
                                          {label: "Image 1", value: "image_1"},

                                          {label: "Image 2", value: "image_2"},

                                          {label: "Image 3", value: "image_3"},

                                          {label: "Image 4", value: "image_4"},

                                          {label: "Image 5", value: "image_5"},

                                          {label: "Image 6", value: "image_6"},

                                          {label: "Image 7", value: "image_7"},
                                      ]} 

                                      defaultValue={this.state.previewImage}

                                      containerStyle={{
                                          height: 40,

                                          borderRaduis:20,

                                          marginBottom: 10
                                      }}

                                      onOpen={ () => {

                                        this.setState({ dropdownHeight: 170});

                                      }}

                                      onClose={ () => {

                                        this.setState({ dropdownHeight: 40});
                                      }}

                                      style={{ backgroundColor: "transparent"}}

                                      itemStyle={{
                                          justifyContent: "flex-start"
                                      }}
                                    
                                      dropDownStyle={{backgroundColor: "#2a2a2a"}}
                                    
                                      labelStyle={{
                                          color: "white"
                                      }}

                                      arrowStyle={{
                                          color: "white"
                                      }}

                                      onChangeItem={item =>
                                    this.setState({
                                        previewImage: item.RFValue
                                    })
                                    
                                }
                                />
                                </View>

                                 <TextInput
                                 
                                 style={styles.inputFont}
                                onChangeText={caption => this.setState({caption})}

                                placeholder={"Caption"}

                                placeholderTextColor="white"

                                />

                                </ScrollView>
                        
                                    

                    </View>
                <View style={{ flex:0.08}}/>
            </View>
            
        
            
        );
    }
}