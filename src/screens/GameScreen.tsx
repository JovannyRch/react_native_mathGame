import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ButtonText } from './../../src/components/ButtonText';

export const GameScreen = () => {
    const [gameVals, setGameVals] = useState({
        oper1: 0,
        oper2: 0,
        isCorrect: true,
        option: 0,
    });

    const randomNumber = (number = 10) => {
        return Math.round(Math.random() * number);
    }

    const [points, setPoints] = useState(0);
    const { oper2, oper1, isCorrect, option } = gameVals;
    const [userInput, setUserInput] = useState(false);
    const generateProblem = () => {
        console.log(oper1, oper2);
        let o1 = randomNumber();
        let o2 = randomNumber();
        console.log(o1, o2);

        console.log(oper1, oper2);
        let isCorr = Math.round(Math.random()) == 1;
        let val = isCorr ? o1 * o2 : randomNumber(100);
        console.log(gameVals);
        console.log({ oper1: o1, oper2: o2, isCorrect: isCorr, option: val });
        setGameVals({ oper1: o1, oper2: o2, isCorrect: isCorr, option: val });
        console.log(gameVals);
    }
    const addPoint = () => {
        setPoints(points + 1);
    }
    const memoizedCallback = useCallback(
        () => {
            generateProblem()
        },
        [userInput],
    )


    const checkAnswer = (val: boolean) => {
        setUserInput(true);
        if (val === isCorrect) {
            addPoint();
        }
        generateProblem();
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <Text style={{ paddingRight: 20, color: 'white', fontSize: 80, }}>{points}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
                <Text style={styles.text}>{oper1} x {oper2} = {option}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
                <ButtonText f={() => { checkAnswer(true) }} text={'Yes'} color="rgb(92,188,125)" />
                <View style={{ width: 40 }}></View>
                <ButtonText f={() => { checkAnswer(false) }} text={'No'} color="rgb(199,64,78)" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(216,106,135)',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },
    text: {
        fontSize: 80,
        color: 'white'
    }
});