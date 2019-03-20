import * as React from "react";
import { hot } from "react-hot-loader/root";

class Example extends React.Component<{}> {
    render() {
        return <h1>Hello, React!</h1>;
    }
}

export default hot(Example);