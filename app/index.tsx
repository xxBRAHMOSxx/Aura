import '../global.css';

import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";

export default function App() {

    return (
        <View style={tw`flex-1 items-center justify-center bg-white `}>
            <Text className='`text-3xl font-pBlack`'>Aura</Text>
            <StatusBar style='auto' />
            
        </View>
    )
}