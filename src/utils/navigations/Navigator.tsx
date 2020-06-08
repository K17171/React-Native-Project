import {NavigationContainer} from '@react-navigation/native';
import {appStack, authStack} from './Routes';
import * as React from 'react';
import {View} from "react-native";
import {connect} from "react-redux";
import {RootReducerState} from "../../redux/reducers";
import {AsyncStorageService} from "../../services/AsyncStorage";
import {UserActions} from "../../redux/actions/UserActions";

interface Props {
    loggedIn: boolean;
    updateUser: any;
}

interface State {
}

class Navigator extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const user = await AsyncStorageService.getUser();
        if(user){
            this.props.updateUser(user);
        } else {

        }
    }

    render() {
        return <NavigationContainer>{this.props.loggedIn ? appStack() : authStack()}</NavigationContainer>;
    }
}

const mapStateProps = (state: RootReducerState) => ({
    loggedIn: state.userReducer.loggedIn,
});
const mapDispatchToProps = dispatch => ({
   updateUser: (user) => dispatch(UserActions.UserUpdateAction(user)),
});
export default connect(
    mapStateProps,
    mapDispatchToProps,
)(Navigator);
// export const Navigator = () => {
//   return <NavigationContainer>{appStack()}</NavigationContainer>;
// };
