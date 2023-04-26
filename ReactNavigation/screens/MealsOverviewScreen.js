import {View, FlatList, StyleSheet} from 'react-native'
import { MEALS } from '../data/dummy-data';

//route 대신 사용 가능한 hook
import { useRoute } from '@react-navigation/native'
import MealItem from '../components/MealItem';

//react navigation에서 screen으로 등록되어 있으면, 항상 route를 property로 받는다.
function MealsOverViewScreen({ route }){
    // useRoute 사용시
    // const route = useRoute();
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    function renderMealItem(itemData){
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
        }

        return (
            <MealItem {...mealItemProps}
                 />
        )
    }

    return(
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
    )
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
    },
})