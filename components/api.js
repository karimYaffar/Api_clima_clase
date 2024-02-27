import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "./estilos";

export const WeatherInfo = ({ weatherData }) => {
    return (
        <ImageBackground
            source={require('../assets/clima.jpg')} // Ruta de la imagen en el directorio 'assets'
            style={styles.weatherContainerBackground}
        >
            <View style={[styles.weatherContainer, { backgroundColor: 'transparent' }]}>
                <View style={styles.weatherHeader}>
                    {weatherData.current.condition.icon && (
                        <Image
                            source={{ uri: `http:${weatherData.current.condition.icon}` }}
                            style={styles.enlargedWeatherIcon}
                        />
                    )}
                </View>
                <Text style={styles.weatherTemp}>{weatherData.current.temp_c}°C</Text>
                <Text style={styles.weatherCondition}>{weatherData.current.condition.text}</Text>
                <Text style={styles.weatherInfo}>
                    Wind: {weatherData.current.wind_kph} km/h | Humidity: {weatherData.current.humidity}%
                </Text>
            </View>
        </ImageBackground>
    );
};
