import { StyleSheet, Dimensions } from 'react-native';

var screen = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 10,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 280
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    inputMovieName: {
        margin: 5,
        padding: 2,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: screen.width - 120

    },
    inputMovieReleaseYear: {
        margin: 5,
        padding: 2,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: screen.width - 120
    }
});

export default styles;