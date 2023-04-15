import React, { useEffect, useRef } from 'react'
// import LottieView from 'lottie-react-native';
// const LottieView = require("lottie-react-native");
import Lottie from 'lottie-react-native';
import { Dimensions } from 'react-native';

export default function GirlBooks({ ...rest }) {

    const animationRef = useRef<Lottie>(null)

    useEffect(() => {
        animationRef.current?.play()

        // Or set a specific startFrame and endFrame with:
        animationRef.current?.play(30, 120);
    }, [])
    return (

        <Lottie
            style={{
                height: Dimensions.get('screen').width,
                width: Dimensions.get('screen').width,
            }}
            source={require('../../animations/girl-books/data.json')}
            autoPlay
            loop
        />

    )
}
