import { View, TextInput } from 'react-native';
import Input from './Input'

function ExpenseForm(){

    function ammountChangedHandler(){

    }


    return <View>
        <Input label='Amount' textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: ammountChangedHandler,
        }} />
        <Input label='Datet' textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {

            }
        }}/>
        <Input label='Description' textInputConfig={{
            //여러줄의 텍스트를 받을 수 있는 textarea같은 옵션
            multiline: true,
            //자동 수정 기능
            autoCorrenct: true,
            autoCapitalize: 'none', //charactores, words, sentences, none
        }} />
    </View>

}

export default ExpenseForm;