import { render } from 'react-dom'

const PeopleList = ({data}) =>
    <ol className="people-list">
        {data.results.map((person, i) => {
            const {first, last} = person.name
            return <li key={i}>{first} {last}</li>
        })}
    </ol>

const RandomMeUsers = DataComponent(
                          PeopleList,
                          "https://randomuser.me/api/"
                      )

render(
    <RandomMeUsers count={10} />,
    document.getElementById('react-container')
)
