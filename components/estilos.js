import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2196f3',  // Amarillo
    },
    weatherHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    weatherIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
        color: '#FFEB3B',  // Amarillo
    },
    button: {
        backgroundColor: '#1565c0',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFEB3B',  // Amarillo
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    weatherContainer: {
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'transparent', 
    },
    weatherCity: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFEB3B',  // Amarillo
    },
    weatherTemp: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#FFEB3B',  // Amarillo
    },
    weatherCondition: {
        fontSize: 20,
        marginBottom: 10,
        color: '#FFEB3B',  // Amarillo
    },
    weatherInfo: {
        fontSize: 18,
        color: '#FFEB3B',  // Amarillo
        marginTop: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    enlargedWeatherIcon: {
        width: 300,
        height: 300,
        color: '#FFEB3B',  // Amarillo
    },
    weatherContainerBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    apiContainer: {
        flex: 1,
        padding: 20,
    },
    apiContainerBackground: {
        flex: 1,
        resizeMode: 'cover', // Puedes ajustar según tus preferencias
        justifyContent: 'center', // Ajusta según tus necesidades
        alignItems: 'center', // Ajusta según tus necesidades
    },
});
