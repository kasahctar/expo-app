import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View>
            <TouchableOpacity style={{}} onPress={() => dispatch(increment())}>
                <Text>Increment value</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity style={{}} onPress={() => dispatch(decrement())}>
                <Text>Decrement value</Text>
            </TouchableOpacity>
        </View>
    );
}