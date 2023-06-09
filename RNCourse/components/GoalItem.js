import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    return(
        <View style={styles.goalItem}>
            <Pressable 
                //android에서 ripple 처리 방법
                android_ripple={{color: '#dddddd'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                //ios에서 ripple 처리 방법
                style={(pressed) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}
    
export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: 'white',
    }
});