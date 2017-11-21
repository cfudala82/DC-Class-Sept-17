class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  update_name(event) {
    this.setState.({name: event.target.value});
  }

  render() {
    return (
      <form>
        <label>Your Name?</label>
        <input type="text" value={this.state.name}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
