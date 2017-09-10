React.createElement("h1", null, "Baked Salmon");
// <h1>Baked Salmon</h1>

React.createElement("h1",
    {id: "recipe-0", 'data-type': "title"},
    "Baked Salmon"
)

// <h1 data-reactroot id="recipe-0" data-type="title">Baked Salmon</h1>

// react element
{
    $$typeof: Symbol(React.element),
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {"children": "Baked Salmon"},
    "_owner": null,
    "_store": {}
}

var dish = React.createElement("h1", null, "Baked Salmon")

ReactDOM.render(dish, document.getElementById('react-container'))

React.createElement("ul", {className: "ingredients"},
    items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
)

// React.createClass
const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient)
  },
  render() {
    return React.createElement("ul", {className: "ingredients"},
        this.props.items.map(this.renderListItem)
    )
  }
})

const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

ReactDOM.render(
  React.createElement(IngredientsList, {items}, null),
  document.getElementById('react-container')
)

// React.Component
class IngredientsList extends React.Component {

  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient)
  }

  render() {
    return React.createElement("ul", {className: "ingredients"},
        this.props.items.map(this.renderListItem)
    )
  }

}

// stateless functional Component
const IngredientsList = ({items}) =>
  React.createElement("ul", {className: "ingredients"},
    items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  )
