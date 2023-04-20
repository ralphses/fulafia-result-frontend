import React from "react";


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "",
          quantity: 0,
          price: 0,
        },
      ],
    };
  }

  handleChange(event, index) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // If the field name contains a dot, use a helper function to update the nested object
    if (name.includes(".")) {
      this.setState((prevState) => {
        const nameParts = name.split(".");
        const fieldName = nameParts.pop();
        const nestedObj = nameParts.reduce(
          (obj, key) => obj[key],
          prevState.items[index]
        );
        nestedObj[fieldName] = value;
        return prevState;
      });
    } else {
      this.setState((prevState) => {
        const items = [...prevState.items];
        items[index][name] = value;
        return { items };
      });
    }
  }

  handleAddItem() {
    this.setState((prevState) => {
      const items = [...prevState.items];
      items.push({
        name: "",
        quantity: 0,
        price: 0,
      });
      return { items };
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Send the data to the API using a fetch request
    fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.items),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.items.map((item, index) => (
          <div key={index}>
            <label>
              Name:
              <input
                type="text"
                name={`items.${index}.name`}
                value={item.name}
                onChange={(event) => this.handleChange(event, index)}
              />
            </label>
            <br />
            <label>
              Quantity:
              <input
                type="number"
                name={`items.${index}.quantity`}
                value={item.quantity}
                onChange={(event) => this.handleChange(event, index)}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                name={`items.${index}.price`}
                value={item.price}
                onChange={(event) => this.handleChange(event, index)}
              />
            </label>
            <br />
          </div>
        ))}
        <button type="button" onClick={() => this.handleAddItem()}>
          Add Item
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default new MyForm;