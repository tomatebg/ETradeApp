import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import appColors from '../../Themes/appColors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    optionContainer: {
        marginBottom: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,

    entryButton: {
        // backgroundColor: appColors.buttonBlue,
        marginLeft: wp('20%'),
        marginRight: wp('20%'),
        borderRadius: wp('4%'),
        backgroundColor: '#5d0eeb',
    } as ViewStyle,
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },

    image: {
        width: wp('25%'),
        height: hp('25%'),
        marginLeft: wp('2.5%'),
        marginTop: hp('-0.8%'),
        resizeMode: 'contain',
    } as ImageStyle,

    imageBackground: {
        width: wp('100%'),
        height: hp('35%'),
        padding: hp('10%'),
        marginVertical: hp('8.5%'),
        transform: [{ rotate: '180deg' }],
        position: 'absolute',
    } as ImageStyle,

    viewBackground: {
        width: wp('100%'),
        height: hp('35%'),
        transform: [{ scaleY: 1.2 }],
        position: 'absolute',
    } as ViewStyle,
    tradeTitle: {
        width: wp('100%'),
        height: hp('15%'),
        flexDirection: 'row',
        marginBottom: hp('5%'),
    } as ViewStyle,

    tradeHeading: {
        color: '#fff',
    } as TextStyle,
};
