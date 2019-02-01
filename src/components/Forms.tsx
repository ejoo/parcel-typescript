import * as React from "react";

/**
 * ```
 * [
 *  {value: 'female', label: 'Female'},
 * ]
 * ```
 * @param values
 */
const RadioGroup = ({ values, selected, name }) => {
  return values.map(item => {
    return (
      <div>
        <input
          defaultChecked={selected == item.value}
          type="radio"
          name={name}
          value={item.value}
        />
        <label>{item.label}</label>
      </div>
    );
  });
};

/**
 * Usage:
 * ```
 * <CheckboxGroup
 *  values={['cricket', 'back-bitting', 'reading', 'understanding']}
 *  selected={['cricket', 'reading']}
 *  label="Hobbies"
 *  name="hobbies"
 * />
 * ```
 * @param param0
 */
const CheckboxGroup = ({ values, selected, label, name }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      {values.map(item => {
        const isSelected = selected.includes(item);
        return (
          <label>
            <input
              type="checkbox"
              value={item}
              name={name}
              defaultChecked={isSelected}
            />{" "}
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default class extends React.Component {
  state = {
    username: "ejoo",
    email: "ejaz@zoykee.com",
    password: "",
    gender: "female",
    university: "Aga Khan University",
    agreement: "",
    hobbies: ["cricket"],
    subject: "english",
    books: ["The Power of NOw"],
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // event delegation
  onChangeForm = e => {
    if (e.target) {
      let { value, name, type, checked } = e.target;

      if (['books', 'hobbies'].includes(name)) {
        const arr = [...this.state[name]]; // new array// immutable
        if (checked) {
          arr.push(value);
        } else {
          const index = arr.indexOf(value);
          if (index > -1) {
            arr.splice(index, 1);
          }
        }

        this.setState({
          [name]: arr
        });

        return true;
      }

      if (type === "checkbox") {
        value = checked;
      }
      this.setState({
        [name]: value
      });
    }
  };

  printInfo() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h3>Registration Info</h3>
        <p>Email: {this.state.email}</p>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Subject: {this.state.subject}</p>
        <p>University: {this.state.university}</p>
        <p>Agreement accepted: {this.state.agreement ? "Yes" : "No"}</p>
        <p>Hobbies: {this.state.hobbies.join(" ")}</p>{" "}
        <p>Books: {this.state.books.join(" ")}</p>{" "}
        <p>: {this.state.hobbies.join(" ")}</p>
        <p>
          <code>{JSON.stringify(this.state.hobbies, null, 2)}</code>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="flex">
        <div>
          <div>
            <h2>Forms</h2>
            <form onSubmit={this.submitForm} onChange={this.onChangeForm}>
              <label htmlFor="">Email</label>
              <br />
              <input type="text" name="email" defaultValue={this.state.email} />
              <br />
              <hr />
              <label htmlFor="">Username</label>
              <br />
              <input
                type="text"
                name="username"
                defaultValue={this.state.username}
              />
              <br />
              <hr />
              <label htmlFor="">Passowrd</label>
              <br />
              <input name="password" type="password" />
              <br />
              <hr />
              <label>Gender</label>
              <br />

              <RadioGroup
                values={[
                  { value: "female", label: "Female" },
                  { value: "male", label: "Male" }
                ]}
                selected={this.state.gender}
                name="gender"
              />
              <br />
              <label>Fav subject</label>
              <RadioGroup
                values={[
                  { value: "math", label: "Math" },
                  { value: "english", label: "English" }
                ]}
                selected={this.state.subject}
                name="subject"
              />

              <br />
              <br />
              <label>University</label>
              <select name="university" defaultValue={this.state.university}>
                <option>Select Your University</option>
                <option value="Karakoram International University">KIU</option>
                <option value="Aga Khan University">AKU</option>
                <option value="Ghulam Ishaq Khan University">GIK</option>
              </select>
              <br />
              <br />
              <CheckboxGroup
                values={["cricket", "football", "reading", "jumping", "crying"]}
                label="Hobbies"
                name="hobbies"
                selected={this.state.hobbies}
              />
              <br />
              
              <CheckboxGroup
                values={["The Power of NOw", "Think and Grow Rich", "Rich Dad Poor Dad", "The Untethered Soulr"]}
                label="Books"
                name="books"
                selected={this.state.books}
              />
              <br />

              <label>
                <input type="checkbox" value="1" name="agreement" />
                Accept the agree
              </label>
              <br />

              <button>Register Me</button>
            </form>
          </div>
        </div>
        <div>{this.printInfo()}</div>
      </div>
    );
  }
}
