import { useLayoutEffect } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';

//route 대신 사용 가능한 hook
import { useRoute } from '@react-navigation/native'
import MealItem from '../components/MealItem';

//react navigation에서 screen으로 등록되어 있으면, 항상 route를 property로 받는다.
function MealsOverViewScreen({ route, navigation }){
    // useRoute 사용시
    // const route = useRoute();
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    //useEffect를 활용해 네비게이션 title을 동적으로 변경할 수 있지만,
    //이러면 화면이 렌더링된 후에 변경되는거라 사용자 경험이 좋지 않다.
    //이럴 때는 useLayoutEffect를 사용해야한다.

    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    //     navigation.setOptions({
    //         title: categoryTitle,
    //     });
    // //categoryId, navagation 객체를 파라미터로 넘기고 useEffet에서 setOption을 처리해야 경고가 뜨지 않는다.
    // }, [categoryId, navigation]);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    //categoryId, navagation 객체를 파라미터로 넘기고 useEffet에서 setOption을 처리해야 경고가 뜨지 않는다.
    }, [categoryId, navigation]);

    

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