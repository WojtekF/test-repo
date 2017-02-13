// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store"
import createButton from "..//DispatchableButton";
const store = configureMockStore()({});

const mapDispatchToProps = (dispatch: any, ownProps: any) => { return { onClick: () => dispatch({ type: 'ADD_TODO', id: 0, text: 'test' }), ...ownProps } }
const DB = createButton(mapDispatchToProps);

describe("<DispatchableButton/>", () => {
    let instance, container;

    beforeEach(() => {
        spyOn(store, "dispatch");
        instance = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <DB label={"some label"} />
                </MuiThemeProvider>
            </Provider>
        );
    });

    it("dispatches action when clicked", () => {
        container = TestUtils.findRenderedComponentWithType(instance, DB)
        container.selector.props.onClick();
        expect(store.dispatch).toHaveBeenCalledWith(
            { type: "ADD_TODO", id: 0, text: "test" }
        );
    });

    it("has label passed correctly", () => {
        container = TestUtils.findRenderedComponentWithType(instance, DB)
        let label = container.selector.props.label;
        expect(label).toEqual("some label");
    });
});
