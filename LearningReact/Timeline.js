import d3 from 'd3'
import { Component } from 'react'
import { render } from 'react-dom'

class Timeline extends Component {

    constructor({data=[]}) {
        const times = d3.extent(data.map(d => d.year))
        const range = [50, 450]
        super({data})
        this.scale = d3.time.scale().domain(times).range(range)
        this.state = {data, times, range}
    }

    render() {
        const { data } = this.state
        const { scale } = this
        return (
            <div className="timeline">
                <h1>{this.props.name} Timeline</h1>
                <Canvas>
                    {data.map((d, i) =>
                        <TimelineDot position={scale(d.year)}
                                     txt={`${d.year} - ${d.event}`}
                        />
                    )}
                </Canvas>
            </div>
        )
    }

}

render(
    <Timeline name="History of Skiing"
              data={historicDatesForSkiing} />,
    document.getElementById('react-container')
)

const historicDatesForSkiing = [
    {
        year: 1879,
        event: "Ski Manufacturing Begins"
    },
    {
        year: 1882,
        event: "US Ski Club Founded"
    },
    {
        year: 1924,
        event: "First Winter Olympics Held"
    },
    {
        year: 1926,
        event: "First US Ski Shop Opens"
    },
    {
        year: 1932,
        event: "North America's First Rope Tow Spins"
    },
    {
        year: 1936,
        event: "First Chairlift Spins"
    },
    {
        year: 1949,
        event: "Squaw Valley, Mad River Glen Open"
    },
    {
        year: 1958,
        event: "First Gondola Spins"
    },
    {
        year: 1964,
        event: "Plastic Buckle Boots Available"
    }
]
