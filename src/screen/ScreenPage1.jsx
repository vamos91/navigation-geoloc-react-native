import { View, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import MapView, {Marker} from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location'

const ScreenPage1 = () => {
    const [listMarkers, setListMarkers] = useState([])
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)

    const getCoordOnMap = (e) => {
        setListMarkers([...listMarkers, e.nativeEvent.coordinate])
        console.log(listMarkers)
    }

    useEffect(() => {
        const getCurrentPosition = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
              }
              
            // let location = await Location.getCurrentPositionAsync()
            // setLat(location.coords.latitude)
            // setLng(location.coords.longitude)

            await Location.watchPositionAsync({
                distanceInterval: 1, 
                timeInterval: 1000,
                accuracy:Location.Accuracy.High,
            }, (location) => {
                setLat(location.coords.latitude)
                setLng(location.coords.longitude)
            })
        }
       getCurrentPosition()
    }, [])

  return (
    <View style={styles.container}>
        {
        lat && lng && (
            <>
                <MapView
                        onPress={(e) => getCoordOnMap(e)}
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: lat,
                            longitude: lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker 
                        title="Vous êtes ici !"
                            coordinate={{
                                latitude: lat,
                                longitude: lng,
                            }}
                        />
                        {
                            listMarkers.length > 0 && listMarkers.map((marker) => (
                                <Marker 
                                title="Vous êtes ici !"
                                    coordinate={marker}
                                />
                            ))
                        }
                    </MapView>
            </>
        )
        }
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    map:{
        width: '100%',
        height: '100%'
    }
})

export default ScreenPage1