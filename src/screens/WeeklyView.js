import React from 'react';
import { ScrollView, View } from 'react-native';
import SingleDay from '../components/SingleDay'; // Update the import path as needed

const WeeklyViewScreen = () => {
    const daysOfWeek = ['Pon', 'Wt', 'Śr', 'Czw', 'Pią', 'Sob', 'Nd'];

    return (
        <ScrollView>
            {daysOfWeek.map((day, index) => (
                <SingleDay key={index} date="Aug 14" day={day} />
            ))}
        </ScrollView>
    );
};

export default WeeklyViewScreen;