import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enterdGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      //key를 unique하게 만들기 위해 랜덤함수 활용
      {text: enterdGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      //filter는 js에 내장된 함수. 배열에서 사용할 수 있음.
      //filter로 걸러낸 항목을 제외한 항목을 리턴함.
      //filter 안의 값이 false면 해당 항목 제외.
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          {/* FlatList는 페이지가 보여질 때 항목을 랜더링 할 수 있다. */}
        <FlatList data={courseGoals} renderItem={(itemData)  => {
          return <GoalItem text={itemData.item.text}
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler} />
        }}
        // 만약 key 대신 id라는 property를 사용하고 싶다면 아래처럼 처리해줘도 됨.
        keyExtractor={(item, index) => {
          return item.id;
        }}  
        />
          {/* for-each 같은 개념 */}
          
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 50,
  },
  
  goalsContainer:{
    flex: 4,
  },
  

});
