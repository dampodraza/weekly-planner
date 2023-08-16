import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native-ui-lib";
import Checkbox from "expo-checkbox";
import {TextInput} from "react-native";
import {StatusBar} from "expo-status-bar";

const areAllInputsFilled = (items) => {
    return items.every(item => item.content.trim() !== '');
};

export default function SingleDay({date, day}) {
    const [items, setItems] = useState(Array.from({length: 5}, (_, index) => ({
        checked: false, content: ``,
    })));

    useEffect(() => {
        if (areAllInputsFilled(items)) {
            setItems([...items, {checked: false, content: ''}]);
        }
    }, [items]);

    const toggleCheckbox = (index) => {
        const updatedItems = [...items];
        updatedItems[index].checked = !updatedItems[index].checked;

        // Move the checked item to the end of the list
        if (updatedItems[index].checked) {
            const checkedItem = updatedItems.splice(index, 1)[0];
            updatedItems.push(checkedItem);
        }

        setItems(updatedItems);

    };

    return (<View>
            <View style={styles.header} paddingV-6>
                <Text text50R>{date}</Text>
                <Text text50R>{day}</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.inputContainer}>
                {items.map((item, index) => (<View key={index} style={styles.inputRow}>
                        <Checkbox
                            value={item.checked}
                            onValueChange={() => toggleCheckbox(index)}
                            style={styles.checkbox}
                        />
                        <TextInput
                            value={item.content}
                            onChangeText={(newContent) => {
                                const updatedItems = [...items];
                                updatedItems[index].content = newContent;
                                setItems(updatedItems);
                            }}
                            style={[styles.input, {
                                color: item.checked ? 'rgba(0, 0, 0, 0.5)' : 'black',
                                textDecorationLine: item.checked ? 'line-through' : 'none',
                            },]}
                            placeholder={``}
                        />
                    </View>))}
            </View>
        </View>)
}

const styles = {
    container: {
        flex: 1, backgroundColor: '#fff', marginTop: StatusBar.currentHeight,
    }, header: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20,
    }, line: {
        height: 2, backgroundColor: 'black', marginHorizontal: 20,
    }, inputContainer: {
        paddingHorizontal: 20, paddingVertical: 10,
    }, input: {
        width: '90%', borderBottomWidth: 1, borderColor: 'black', marginBottom: 10, paddingVertical: 5,
    }, inputRow: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 10,
    }, checkbox: {
        width: 20, height: 20, borderRadius: 10, borderWidth: 2, marginRight: 10,
    },
};