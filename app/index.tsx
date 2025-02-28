import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import { Link } from 'expo-router'


export default function App() {
    return (
        <View style={tw`flex-1 items-center justify-center bg-white`}>
            <Text style={tw`text-3xl`}>Hello! I am starting from Home</Text>
            <StatusBar style='auto' />
            
        </View>
    )
}