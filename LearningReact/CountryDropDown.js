import { render } from 'react-dom'

const CountryNames = ({data, selected=""}) =>
    <select className="people-list" defaultValue={selected}>
       {data.map(({name}, i) =>
           <option key={i} value={name}>{name}</option>
       )}
   </select>

const CountryDropDown =
    DataComponent(
        CountryNames,
        "https://restcountries.eu/rest/v1/all"
    )

render(
    <CountryDropDown selected="United States" />,
    document.getElementById('react-container')
)
