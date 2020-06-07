import './_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {FontAwesome} from '@expo/vector-icons';
import SaveAreaView from 'react-native-safe-area-view';

const TrackCreateScreen = ({isFocused}) =>{
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callBack = useCallback((location) =>{
        addLocation(location, recording);
    }, [recording])

    const [err] = useLocation(isFocused || recording, callBack); 

    return (
        <SaveAreaView>
            <Text h3>Create a Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SaveAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add track',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);