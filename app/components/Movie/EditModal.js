import React, { Component } from 'react';
import { Text, TextInput, Button, } from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './EditModal.style';

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            releaseYear: ''
        };
    }

    showEditModal = (item) => {
        this.setState({
            id: item.id.toString(),
            name: item.name,
            releaseYear: item.releaseYear.toString(),
        });
        this.refs.myModal.open();
    }

    render() {
        const { wrapper, title, inputMovieName, inputMovieReleaseYear } = styles;
        return (
            <Modal
                ref={'myModal'}
                style={wrapper}
                position='center'
                coverScreen={true}
                backdrop={true}
                onClosed={() => {
                }}
            >
                <Text style={title}>
                    informations of the movie
                </Text>
                <TextInput
                    style={inputMovieName}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder="Movie's name"
                    value={this.state.name}
                />
                <TextInput
                    style={inputMovieReleaseYear}
                    onChangeText={(text) => this.setState({ releaseYear: text })}
                    placeholder="Release Year"
                    value={this.state.releaseYear}
                />
                <Button
                    title='Save'
                    color='mediumseagreen'
                    onPress={() => {
                        if (this.state.name.length === 0 || this.state.releaseYear === 0) {
                            alert('You must enter movie name and release year!');
                            return;
                        }
                        this.props.movieComponent.props.onUpdateMovie(this.state);
                        this.refs.myModal.close();
                    }} />
            </Modal>
        );
    }
}
