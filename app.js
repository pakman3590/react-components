class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onItemClick.bind(this)}>{this.props.list}</li>
    )
  }
}

let GroceryList = (props) => (
    <ul>
      {props.list.map(list =>
        <GroceryListItem list={list} />
      )}
    </ul>
)


let App = () => (
  <div>
    <h2>My Groceries</h2>
    <GroceryList list={['Potatoes', 'Carrots']} />
  </div>
)




ReactDOM.render(<App />, document.getElementById('app'));