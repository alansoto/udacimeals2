import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';

class App extends Component {

doThing = () => {
  this.props.selectRecipe({day:'monday', recipe:{label:'arrroz'}, meal:'breakfast'})
}

 render() {
   console.log(this.props);
    return (
      <div>

        <button onClick={this.doThing}>click me</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }

}

function mapStateToProps (calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null

        return meals
      }, {})
    })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
