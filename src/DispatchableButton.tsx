// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import RaisedButton from "material-ui/RaisedButton";
import * as React from "react";
import { connect } from "react-redux";

class DispatchButton extends React.Component<{label: string, onClick: () => void }, void> {
    public render() {
        return (
            <RaisedButton label={this.props.label} onClick={this.props.onClick} />);
    }
}

export default function(mapDispatchToProps: (dispatch: any, ownProps: any) => any) {
    return connect(null, mapDispatchToProps)(DispatchButton);
}
