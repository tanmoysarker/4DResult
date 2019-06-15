import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'

class AuthLoadingScreen extends Component {
    constructor() {
        super()
        this.state ={
        First:'',
        Second: '',
        Third: '',
        Fourth: '',
        Fifth: '',
        Sixth: '',
        Seventh: '',
        Eighth: '',
        Ninth:''
        }
        this.loadApp()
    }

    loadApp = async () => {
        await fetch('https://fourdresult.herokuapp.com/nine93', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const first = response
            this.setState({ First: first })
          })
        await fetch('https://fourdresult.herokuapp.com/nine97', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const second = response
            this.setState({ Second: second })
          })
        await fetch('https://fourdresult.herokuapp.com/magnum', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const third = response
            this.setState({ Third: third })
          })
        await fetch('https://fourdresult.herokuapp.com/damacai', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const fourth = response
            this.setState({ Fourth: fourth })
          })
        await fetch('https://fourdresult.herokuapp.com/sportstoto', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const fifth = response
            this.setState({ Fifth: fifth })
          })
        await fetch('https://fourdresult.herokuapp.com/singapore4d', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const sixth = response
            this.setState({ Sixth: sixth })
          })
        await fetch('https://fourdresult.herokuapp.com/sabah88', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const seventh = response
            this.setState({ Seventh: seventh })
          })
        await fetch('https://fourdresult.herokuapp.com/cashSweep', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const eighth = response
            this.setState({ Eighth: eighth })
          })
        await fetch('https://fourdresult.herokuapp.com/stc', {
            method: 'GET',
        }).then((response) => response.json()).then((response) => {
            const ninth = response
            this.setState({ Ninth: ninth })
          })

        
        this.props.navigation.navigate(this.state.First && this.state.Second && this.state.Third && this.state.Fourth && this.state.Fifth && this.state.Sixth && this.state.Seventh && this.state.Eighth && this.state.Ninth ? 'App' : 'Auth')
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    }
}

export default AuthLoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
