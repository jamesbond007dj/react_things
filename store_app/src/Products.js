import React from 'react';


class Products extends React.Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(inventory) {
        console.log(inventory)
        alert(inventory.inventoryType);
    }

    render() {
        return (
            <div className="App">
            <InventoryList />
            <InventoryForm onSubmit={this.submitHandler}/>
            </div>
        );
    }
}


class InventoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          addItem: true,
          inventoryType: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
          event.preventDefault();
          this.props.onSubmit(this.state);
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Add Item:
              <input
                name="addItem"
                type="checkbox"
                checked={this.state.addItem}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              inventory Type:
              <input
                name="inventoryType"
                type="text"
                value={this.state.inventoryType}
                onChange={this.handleInputChange} />
            </label>
            <button>submit</button>
          </form>
        );
      }


}
function InventoryItem(props) {
    return <li><p>{JSON.stringify(props.inventory)}</p></li>
}

class InventoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invetories: [
                {id: 412, inventoryType: 'Books'},
                {id: 543, inventoryType: 'Movies'},
            ]
        }
    }

    render() {
        return (
            this.state.invetories.length &&
            <ul>
                {this.state.invetories.map(inventory => <inventoryItem key={inventory.id} inventory={inventory} />)}
            </ul>

        )
    }
}

export default Products;