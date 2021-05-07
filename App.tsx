import { StatusBar } from 'expo-status-bar';
// @ts-ignore
import React, {Profiler, useCallback} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Task from "./components/Task";

let listItems: string[] = ['Apple', 'Orange', 'Banana', 'dishwashing liquid', 'Milk', 'Eggs',
  'Chicken', 'Brocolli', 'Wheat Flour', 'Corn Flour', 'Avocado', 'Bread', 'Cucumber', 'Corriander', 'Cilantro', 'Sereno Peppers',
  'Thai Chilli', 'Jalapenos', 'Salt', 'Black pepper', 'Coffee', 'Ice cubes', 'Sugar', '2 % Milk', 'Tea', 'Fennel Seeds',
  'Black beans', 'Tortilla', 'Pinto Beans', 'Peas', 'Guacamole', 'Starch', 'Pasta', 'Salsa', 'Penne Pasta', 'Corn flour',
  'Corn flakes', 'Papaya', 'Oils', 'Sauces', 'Salad Dressings', 'Red kidney beans', 'White beans', 'Green lentils', 'Cheese',
  'Goat Cheese', 'Rice', 'Basmati Rice', 'Granola', 'Oregano', 'Cumin', 'Basil', 'Cooking Oil', 'Canola Oil', 'Stock cubes',
  'Butter', 'Yogurt', 'Honey', 'Vinegar', 'Chopped Tomatoes', 'Fruits', 'Nuts', 'Sunflower seeds', 'Tuna', 'Salmon',
  'Tamarind', 'Jelly beans', 'Red Chillis', 'Green Chillis', 'Garbanzo Beans', 'Vanilla Ice cream', 'French cake',
  'Bean split', 'Ice cream Cones', 'Soda', 'Pepsi', 'Coke', '7up', 'Chocolate cream', 'White Chocolate', 'Z'];

console.log('Number of list items: {}', listItems.length);

export default function App() {

  listItems.sort((a,b) => {
    if (a.toLowerCase() < b.toLowerCase())
      return -1;
    if (a.toLowerCase() > b.toLowerCase())
      return 1;
  });
  return (
      <Profiler id="sorted-items" onRender={
        (id, phase, actualDuration) => {
          console.log('details: id=%s, phase=%s, actualDuration=%s', id, phase, actualDuration);
        }
      }>
      <View style={styles.container}>
        {}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            <ScrollView>
              {/*{listItems.map((item) => <Task text={item.toString()}></Task>)}*/}
              {listItems.map((item) => <Task key={item}
                                             text={item.toString()}></Task>)}
            </ScrollView>
          </View>


        </View>
      </View>
      </Profiler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  }
});
