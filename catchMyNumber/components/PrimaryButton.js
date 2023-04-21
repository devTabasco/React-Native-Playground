import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
    function pressHandler(){
        console.log('Pressed!');
    }
    
    return(
    <View style={styles.buttonOuterContainer}>
        {/* 삼항식을 활용해서, pressed == true 일 때, 적용할 style들을 객체로 전달 */}
        <Pressable style={({pressed}) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer} onPress={pressHandler} android_ripple={{color: '#640233'}}>
            {/* props를 매개변수로 받아서 props.childen를 출력해도 됨. */}
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        margin: 4,
        overFlow: 'hidden',
    },
    buttonContainer:{
        borderRadius: 28,
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,

    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,

    }
})