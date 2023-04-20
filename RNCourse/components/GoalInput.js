import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props){
    const [enterdGoalText, setEnterdGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnterdGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enterdGoalText);
        setEnterdGoalText('');
    }


    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput style={styles.textInput} placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enterdGoalText}
                    />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancle" onPress={props.onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 16,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
        marginTop: 16,
    },
    image:{
        width: 100,
        height: 100,
        margin: 20,
    }
});