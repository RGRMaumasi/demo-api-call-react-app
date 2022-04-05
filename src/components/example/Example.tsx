import React from 'react';
import axios from 'axios';
import './example.scss';


// define your State & Props up here
type Props = {};

type State = {
    categories: any[]
}

// ----- pass your defined Props & State to the React.Component
export class Example extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            categories: [],
        };
    }


    // this is a lifecycle hook, this is where you'd call you API calling methods
    componentDidMount() {
        console.log('mounted'); 
        this._getFoodCategories(this);
    }

    /**
     * 
     * @param self => a funny way to pass in `this`
     */
    private _getFoodCategories(self: Example) {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(response => {
            if(response.data.hasOwnProperty('categories')) {
                self.setState({ categories: response.data.categories });
            } else {
                // successful, but no data object
                console.log(response);
            }
        })
        // log error is API if call fails
        .catch(console.log);
    }


    private _displayFoodCategories() {
        return this.state.categories.map(category => {
            return (
                <li className='category-item' key={category.idCategory}>
                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                    <div className='description'>
                        <p><strong>{category.strCategory}</strong></p>
                        <p>{category.strCategoryDescription}</p>
                    </div>
                </li>
            );
        });
    }


    render() {
        return (
            <div>
                <h1>Example</h1>
                <ul className='category-list'>
                    { this._displayFoodCategories() }
                </ul>
            </div>
        );
    }
}