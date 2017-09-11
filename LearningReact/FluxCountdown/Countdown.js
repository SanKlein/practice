const Countdown = ({count, tick, reset}) => {

  if (count) {
    setTimeout(() => tick(), 1000)
  }

  return (count) ?
      <h1>{count}</h1> :
      <div onClick={() => reset(10)}>
          <span>CELEBRATE!!!</span>
          <span>(click to start over)</span>
      </div>

}
