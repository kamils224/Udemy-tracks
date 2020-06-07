import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import SaveAreaView from 'react-native-safe-area-view';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';


const AccountScreen = () =>{
    const {signout} = useContext(AuthContext);

    return (
        <SaveAreaView forceInset={{top: 'always'}}>
            <View>
                <Text style={{fontSize:48}}>Account Screen</Text>
                <Spacer>
                    <Button title="Sign Out" onPress={signout}/>
                </Spacer>
            </View>
        </SaveAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
};

const styles = StyleSheet.create({});

export default AccountScreen;