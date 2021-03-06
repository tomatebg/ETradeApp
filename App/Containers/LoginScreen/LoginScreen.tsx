import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';
import AppChecked from '../../Components/AppChecked/AppChecked';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';
import { RequestStatus } from '../../Models/RequestStatus';

import { Box, Button, Center, Heading, Text } from 'native-base';
import appImages from '../../Themes/appImages';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}

export interface State {
    email: string;
    password: string;
    remember: boolean;
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            remember: false,
        };
    }

    onChangeEmail = (text: string) => {
        this.setState({
            email: text,
        });
    };

    onChangePassword = (text: string) => {
        this.setState({
            password: text,
        });
    };

    onLoginPress = () => {
        const { authenticationActions } = this.props;
        const { email, password, remember } = this.state;
        const auth: Login = {
            email,
            password,
            remember,
        };
        authenticationActions.loginRequest(auth);
    };

    onEntryPress = () => {
        this.props.navigation.navigate('Auth', { screen: 'ProfileScreen' });
    };

    onCheckedPress = (checked: boolean) => {
        this.setState({
            remember: checked,
        });
    };

    render() {
        const { email, password, remember } = this.state;
        const { authenticationState } = this.props;
        const loading = authenticationState.status == RequestStatus.WIP;
        return (
            <Center flex={1}>
                <View style={[styles.optionContainer]}>
                    <Image source={appImages.ecomp} style={[styles.image]} />
                </View>
                <View style={[styles.viewBackground]}>
                    <ImageBackground
                        source={appImages.trade}
                        resizeMode="cover"
                        style={[styles.imageBackground]}
                    />
                </View>
                <Box style={[styles.tradeTitle]} p={7} rounded="lg">
                    <Center flex={1}>
                        <Text
                            fontFamily="Raleway-ExtraBold"
                            fontSize="4xl"
                            style={[styles.tradeHeading]}>
                            TRADE{' '}
                        </Text>
                        <Text fontFamily="Raleway-Regular">LITE</Text>
                    </Center>
                </Box>{' '}
                <View style={[styles.optionContainer]}>
                    <Button
                        style={[styles.entryButton]}
                        onPress={() => this.onEntryPress()}
                        px={25}
                        size={'md'}
                        endIcon={
                            <Icon name="arrow-right" size={15} color="#fff" />
                        }>
                        ENTRAR
                    </Button>
                </View>
            </Center>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);
