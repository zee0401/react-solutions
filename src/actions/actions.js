import { redirect } from "react-router-dom";

export async function userFormAction({ request }) {
  const formData = await request.formData();

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    dob: formData.get("dob"),
    gender: formData.get("gender"),
    qualification: formData.get("qualification"),
    maritalStatus: formData.get("maritalStatus"),
    address: formData.get("address"),
  };

  console.log("Form Submitted Data:", data);

  return redirect("/thank-you");
}
