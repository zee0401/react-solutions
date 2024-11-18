import { Form } from "react-router-dom";

const UserForm = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>User Registration Form</h2>
      <Form method="post" action="/submit-form">
        {/* First Name */}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" required />
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" required />{" "}
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" required /> Other
            </label>
          </div>
        </div>

        {/* Qualification */}
        <div>
          <label>Qualification:</label>
          <select name="qualification" required>
            <option value="" disabled>
              Select your qualification
            </option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </div>

        {/* Marital Status */}
        <div>
          <label>Marital Status:</label>
          <select name="maritalStatus" required>
            <option value="" disabled>
              Select marital status
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label>Address:</label>
          <textarea name="address" placeholder="Enter your address" required />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
