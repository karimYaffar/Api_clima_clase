import React, { useState, useEffect } from 'react';
import { Text, ScrollView, ImageBackground, Image, View } from 'react-native';
import { WeatherButton } from './components/boton';
import { WeatherInfo } from './components/api';
import { styles } from "./components/estilos";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=a6db6214fc9c42d1950191808231010&q=Huejutla,es&aqi=no');
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <ImageBackground
      source={require('./assets/clima.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.apiContainer}>
        <ImageBackground
          source={require('./assets/clima.jpg')}  // Ruta de la imagen en el directorio 'assets'
          style={styles.apiContainerBackground}
        >
          {/* Encabezado con la imagen del clima */}
          <View style={styles.weatherHeader}>
            {weatherData && weatherData.current.condition.icon && (
              <Image
                source={{ uri: `http:${weatherData.current.condition.icon}` }}
                style={styles.weatherIcon}
              />
            )}
            <Text style={styles.header}>Clima de Huejutla</Text>
          </View>
          
          {/* Resto de tu contenido */}
          {weatherData && <WeatherInfo weatherData={weatherData} />}
        </ImageBackground>
      </ScrollView>
    </ImageBackground>
  );
}
