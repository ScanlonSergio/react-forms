import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
      value: enteredFirstName,
      isValid: enteredFirstNameIsValid,
      hasError: firstNameHasError,
      valueChangedHandler: firstNameChangedHandler,
      inputBlurHandler: firstNameBlurHandler,
      reset: resetFirstName 
    } = useInput(value => value.trim() !== '');

    const {
      value: enteredLastName,
      isValid: enteredLastNameIsValid,
      hasError: lastNameHasError,
      valueChangedHandler: lastNameChangedHandler,
      inputBlurHandler: lastNameBlurHandler,
      reset: resetLastName 
    } = useInput(value => value.trim() !== '');

    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailHasError,
      valueChangedHandler: emailChangedHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmail 
    } = useInput(value => value.includes('@'));

    let formIsValid = false;
    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(!formIsValid) {
          return;
        };
        resetFirstName();
        resetLastName();
        resetEmail();
    }

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' 
                           id='fname' 
                           value={enteredFirstName}
                           onChange={firstNameChangedHandler}
                           onBlur={firstNameBlurHandler}/>
                    {firstNameHasError && <p className="error-text">Please enter first name.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' 
                           id='lname'
                           value={enteredLastName}
                           onChange={lastNameChangedHandler}
                           onBlur={lastNameBlurHandler}/>
                    {lastNameHasError && <p className="error-text">Please enter last name.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='email' 
                       id='email' 
                       value={enteredEmail}
                       onChange={emailChangedHandler}
                       onBlur={emailBlurHandler}/>
                {emailHasError && <p className="error-text">Please enter valid email.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
      );
  };
  
  export default BasicForm;
  