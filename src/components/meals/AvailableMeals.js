import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './mealItem/MealItem';

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                'https://cheesy-7938b-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.mealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.mealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const mealsList = meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
