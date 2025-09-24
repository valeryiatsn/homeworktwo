import React from 'react'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: UserType[] = []

const setUsers: React.Dispatch<React.SetStateAction<UserType[]>> = (value) => {
    // если value — это функция, вызываем её с текущим состоянием
    if (typeof value === 'function') {
        initialState = (value as (prev: UserType[]) => UserType[])(initialState)
    } else {
        initialState = value
    }
}


beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setUsers, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(typeof initialState[0]._id).toBe('string')
})

