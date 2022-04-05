import React from 'react';
import axios from 'axios';
import './jesse-demo.scss';


// define your State & Props up here
type Props = {};

type State = {}

// ----- pass your defined Props & State to the React.Component
export class JesseDemo extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            categories: [],
        };
    }



    // this is a lifecycle hook, this is where you'd call you API calling methods
    componentDidMount() {
        this._getMealsByFirstLetter('a', this);
    }


    /**
     * 
     * @param letter 
     * @param self 
     */
    private _getMealsByFirstLetter(letter: string, self: JesseDemo) {
        /**
         * use this endpoint:
         * https://www.themealdb.com/api/json/v1/1/search.php?f=LETTER_FILTER
         * 
         * API docs reference:
         * https://www.themealdb.com/api.php?ref=apilist.fun
         */
    }

    render() {
        // return a list of items
        return (
            <div></div>
        );
    }
}