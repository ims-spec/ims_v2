import {JSX} from "react";

interface ICheck {
    isLength: boolean;
    hasUppercase: boolean;
    hasNumber: boolean
}


export const ConditionsBlock = ({ isLength, hasUppercase, hasNumber  }: ICheck):JSX.Element => {
  // useEffect(() => {

  //   setIsChecked1(true)
  //   setIsChecked2(true)
  //   setIsChecked3(true)
  // }, []);

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          disabled
          checked={hasUppercase}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Uppercase letter
        </label>
      </div>
      {/*<div className="form-check">*/}
      {/*  <input*/}
      {/*    className="form-check-input"*/}
      {/*    type="checkbox"*/}
      {/*    name="flexRadioDefault"*/}
      {/*    id="flexRadioDefault2"*/}
      {/*    disabled*/}
      {/*    checked={hasNumber}*/}
      {/*  />*/}
      {/*  <label className="form-check-label" htmlFor="flexRadioDefault2">*/}
      {/*    Lowercase letter*/}
      {/*  </label>*/}
      {/*</div>*/}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          disabled
          checked={hasNumber}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Number
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="flexRadioDefault"
          id="flexRadioDefault4"
          disabled
          checked={isLength}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
        8 characters or more
        </label>
      </div>
    </div>
  );
};
