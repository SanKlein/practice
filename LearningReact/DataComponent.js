const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }

        componentWillMount() {
            this.setState({loading:true})
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }))
        }

        render() {
            return (
                <div className="data-component">
                    {(this.state.loading) ?
                       <div>Loading...</div> :
                       <ComposedComponent {...this.state} />}
                </div>
            )
        }
    }
