import { FormEvent, ChangeEvent, useState } from "react";
import styled from "styled-components";
import errorImg from "/images/icon-error.svg";

interface FormDataType {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

interface FormDataValidType {
  fNameValid: boolean;
  lNameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
}

export default function FormComponent() {
  const [formData, setFormData] = useState<FormDataType>({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [arrayData, setArrayData] = useState<FormDataType[]>([]);
  const [formDataValid, setFormDataValid] = useState<FormDataValidType>({
    fNameValid: false,
    lNameValid: false,
    emailValid: false,
    passwordValid: false,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  console.log(typeof !formData.fName.trim());
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormDataValid((prevState) => ({
      ...prevState,
      fNameValid: !formData.fName.trim(),
      lNameValid: !formData.lName.trim(),
      emailValid: !formData.email.trim(),
      passwordValid: !formData.password.trim(),
    }));

    const isValid =
      !formData.fName.trim() ||
      !formData.lName.trim() ||
      !formData.email.trim() ||
      !formData.password.trim();

    if (!isValid) {
      setArrayData([...arrayData, formData]);
      setFormData({ fName: "", lName: "", email: "", password: "" });
    }
  };
  console.log(typeof formDataValid.fNameValid);
  console.log(arrayData);
  return (
    <FormDiv onSubmit={handleSubmit}>
      <InputWrrapper formdatavaliderror={formDataValid.fNameValid}>
        <input
          type="text"
          id="fName"
          name="fName"
          placeholder={formDataValid.fNameValid ? "" : "First Name"}
          value={formData?.fName}
          onChange={handleInputChange}
          onKeyDown={() =>
            setFormDataValid((prev) => ({
              ...prev,
              fNameValid: false,
            }))
          }
        ></input>
        {formDataValid.fNameValid ? (
          <img className="errorsImg" src={errorImg}></img>
        ) : (
          ""
        )}
        <span className="errorMassage">
          {formDataValid.fNameValid ? "First Name cannot be empty" : ""}
        </span>
      </InputWrrapper>
      <InputWrrapper formdatavaliderror={formDataValid.lNameValid}>
        <input
          type="text"
          id="lName"
          name="lName"
          placeholder={formDataValid.lNameValid ? "" : "Last Name"}
          value={formData?.lName}
          onChange={handleInputChange}
          onKeyDown={() =>
            setFormDataValid((prev) => ({
              ...prev,
              lNameValid: false,
            }))
          }
        ></input>
        {formDataValid.lNameValid ? (
          <img className="errorsImg" src={errorImg}></img>
        ) : (
          ""
        )}
        <span className="errorMassage">
          {formDataValid.lNameValid ? "Last Name cannot be empty" : ""}
        </span>
      </InputWrrapper>
      <InputWrrapper formdatavaliderror={formDataValid.emailValid}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={
            formDataValid.emailValid ? "email@example.com" : "Email Address"
          }
          value={formData?.email}
          onChange={handleInputChange}
          onKeyDown={() =>
            setFormDataValid((prev) => ({
              ...prev,
              emailValid: false,
            }))
          }
        ></input>
        {formDataValid.emailValid ? (
          <img className="errorsImg" src={errorImg}></img>
        ) : (
          ""
        )}
        <span className="errorMassage">
          {formDataValid.emailValid ? "Looks like this is not an email" : ""}
        </span>
      </InputWrrapper>
      <InputWrrapper formdatavaliderror={formDataValid.passwordValid}>
        <input
          type="password"
          id="password"
          name="password"
          placeholder={formDataValid.passwordValid ? "" : "Password"}
          value={formData?.password}
          onChange={handleInputChange}
          onKeyDown={() =>
            setFormDataValid((prev) => ({
              ...prev,
              passwordValid: false,
            }))
          }
        ></input>
        {formDataValid.passwordValid ? (
          <img className="errorsImg" src={errorImg}></img>
        ) : (
          ""
        )}
        <span className="errorMassage">
          {formDataValid.passwordValid ? "Password cannot be empty" : ""}
        </span>
      </InputWrrapper>
      <button id="subbmit">CLAIM YOUR FREE TRIAL</button>
      <p>
        By clicking the button, you are agreeing to our
        <a href="">
          <span> Terms and Services</span>
        </a>
      </p>
    </FormDiv>
  );
}

const FormDiv = styled.form`
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.1469);
  border-radius: 1rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  #subbmit {
    background-color: rgba(56, 204, 139, 1);
    width: 100%;
    height: 5.6rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.0909) inset;
    color: rgba(255, 255, 255, 1);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.6rem;
    text-align: center;
    margin-bottom: 0.8rem;
    cursor: pointer;
  }
  & > p {
    width: 24.9rem;
    color: rgba(186, 183, 212, 1);
    font-family: Poppins;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2.1rem;
    text-align: center;
    margin-bottom: 0 !important;

    @media (min-width: 1440px) {
      width: 100%;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    span {
      font-weight: 700;
      color: #ff7979;
    }
  }
`;

interface formdatavaliderrorType {
  formdatavaliderror: boolean;
}

const InputWrrapper = styled.div<formdatavaliderrorType>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3px;
  position: relative;

  input {
    width: 100%;
    height: 5.6rem;
    padding: 2rem 1.5rem;
    border: ${(props) =>
      props.formdatavaliderror
        ? "1px solid rgba(255, 121, 121, 1)"
        : "1px solid rgba(222, 222, 222, 1)"};
    border-radius: 1rem;
    color: rgba(61, 59, 72, 1);
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: 0.25px;
    text-align: left;
    outline: none;

    &::placeholder {
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.6rem;
      letter-spacing: 0.25px;
      text-align: left;
      color: ${(props) =>
        props.formdatavaliderror
          ? "rgba(255, 121, 121, 1)"
          : "rgba(61, 59, 72, 0.564)"};
    }
  }
  .errorMassage {
    color: red;
    text-align: right;
    font-style: italic;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.65rem;
  }
  .errorsImg {
    position: absolute;
    right: 10px;
    top: 40%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;
