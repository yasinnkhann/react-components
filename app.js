// TODO
const list = ['Pineapple', 'Grapefruit', 'Squash', 'Pumpkin'];

const mappedList = list.slice(-2).map(food => (
  <li>{food}</li>
));
class Pineapple extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    // BINDERS
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleOnMouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {

    return (
      <li
        // id={this.state.isHovered ? 'hoveredList' : 'notHoveredList'}
        style={{fontWeight: this.state.isHovered && 'bolder'}}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        {this.props.list[0]}
      </li>
    );

  }
}
class Grapefruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    // BINDERS
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleOnMouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {

    return (
      <li
        // id={this.state.isHovered ? 'hoveredList' : 'notHoveredList'}
        style={{fontWeight: this.state.isHovered && 'bolder'}}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        {this.props.list[1]}
      </li>
    );

  }
}

var GroceryList = props => (
  <div>
    <ul>
      <Pineapple list={props.list} />
      <Grapefruit list={props.list} />
      {mappedList}
    </ul>
  </div>
);

var App = () => (
  <div>
    <h2>My Grocery List:</h2>
    <GroceryList list={list}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
