import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';





//stack navigation에 component를 등록해두면, navigation prop에 저장된다.
function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData){

        function pressHandler(){
            navigation.navigate('MealsOverviewScreen', 
            {categoryId: itemData.item.id});
        }

        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }


    return <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
            />
}

export default CategoriesScreen;