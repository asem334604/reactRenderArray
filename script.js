const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);


// classes
class CarNode1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.serialNumber} className={'card'}>
                <h2>{this.props.model}</h2>
                <h3>{this.props.manufacturer}</h3>
                <h4>{this.props.year}</h4>
                <p>{this.props.serialNumber}</p>
            </div>
        );
    }
}

class CarList1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {arr: cars};
    }

    render() {
        return (
            <React.Fragment>
                <h1><u>Output using classes</u></h1>
                <div className={'list'}>
                    {this.state.arr.map(car =>
                        <CarNode1 key={car.serialNumber}
                                  model={car.model}
                                  manufacturer={car.manufacturer}
                                  year={car.year}
                                  serialNumber={car.serialNumber}
                        />)}
                </div>
            </React.Fragment>
        );
    }
}

//functional
function CarNode2(props) {
    return (
        <div key={props.serialNumber} className={'card'}>
            <h2>{props.model}</h2>
            <h3>{props.manufacturer}</h3>
            <h4>{props.year}</h4>
            <p>{props.serialNumber}</p>
        </div>);
}

function CarList2(props) {
    //useState not working
    ///const [state, setState] = useState({arr: cars})

    // works, cant use setState
    let state = {arr: cars}

    return (<React.Fragment>
        <h1><u>Output using functions</u></h1>
        <div className={'list'}>
            {state.arr.map(car =>
                <CarNode2 key={car.serialNumber}
                          model={car.model}
                          manufacturer={car.manufacturer}
                          year={car.year}
                          serialNumber={car.serialNumber}
                />)}
        </div>
    </React.Fragment>);
}

//display output
class App extends React.Component {
    render() {
        return (
            <div>
                <CarList1/>
                <CarList2/>
            </div>
        );
    }
}

root.render(<App/>);