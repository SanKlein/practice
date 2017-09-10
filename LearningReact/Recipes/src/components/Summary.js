const Summary = ({ ingredients=0, steps=0, title='[recipe]' }) => {
  return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
}

Summary.propTypes = {
  ingredients: React.PropTypes.number,
  steps: React.PropTypes.number,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
        new Error("A title must be a string") :
        (props[propName].length > 20) ?
            new Error(`title is over 20 characters`) :
            null
}
