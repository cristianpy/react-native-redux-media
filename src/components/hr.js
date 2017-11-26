import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#c3c3c3'        
    },
    text: {
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        color: '#c3c3c3'
    }
});

class Hr extends Component {
    constructor(props) {
        super(props);

        this.renderLine = this.renderLine.bind(this);
        this.renderText = this.renderText.bind(this);
        this.renderInner = this.renderInner.bind(this);
    }

    renderLine(key) {
        return <View key={key} style={styles.line} />
    }

    renderText(key) {
        return (
            <View key={key} >
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        )
    }

    renderInner() {
        if (!this.props.text) {
            return this.renderLine()
        }
        return [
            this.renderLine(1),
            this.renderText(2),
            this.renderLine(3)
        ]
    }

    render() {

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: parseInt(this.props.marginLeft), marginRight: parseInt(this.props.marginRight) }}>
                {this.renderInner()}
            </View>
        )
    }
}

export default Hr;