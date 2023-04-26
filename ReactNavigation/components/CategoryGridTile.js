import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({title, color, onPress}) {

    //현재 사용중인 네비게이션을 hook으로 가져옴
    const navigation = useNavigation();

    return <View style={ styles.gridItem }>
        <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}
            >
            
            <View style={[styles.innerContainer, {backgroundColor : color}]}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        //그림자(aos 전용)
        elevation: 4,
        //ios 그림자
        //ios는 backgroundcolor가 필수적으로 있어야 쉐도우가 생성된다.
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        //aos에서 ripple이 바깥으로 넘어가는거 방지, aos에서만 적용
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button:{
        flex:1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer:{
        //부모의 사이즈만큼 모두 사용하겠다.
        //다만 부모도 사이즈가 상위 부모로부터 정해져있어야 함.
        flex:1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    }
});