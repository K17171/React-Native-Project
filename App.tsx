import 'react-native-gesture-handler';
import * as React from 'react';
import Navigator from "./src/utils/navigations/Navigator";
import {Provider} from 'react-redux';
import Store from './src/redux/reducers';

interface State {
}

interface Props {
}

export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={Store}>
                <Navigator/>
            </Provider>
        );
    }
}
