import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const unConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  //! These are the local states
  const [ loading, setLoading ] = useState(false)
  const [ apiError, setApiError ] = useState(false)

  //! These are side effects
  useEffect(() => {
    if (user !== null){
      navigate('profile')
    }
  }, [ user, navigate])

  //! These are Event Handlers
  const onSubmit = async ({ username }) => {
    setLoading(true)
    const [error, userResponse] = await loginUser(username)
    if (error !== null){
      setApiError(error)
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse)
      setUser(userResponse)
    }
    setLoading(false)

  };

  return (
    <> <div>
      <h4 class="textCenter">To Login, Please type in your name:</h4>
      <form class="textCenter" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" {...register("username", unConfig)}></input>
        </div>
        <p></p>
        <button class="button-24" type="submit" disabled={ loading } >Continue</button>

        { loading && <p>Logging in...</p>}
        { apiError && <p>{ apiError }</p>}
        
      </form>
      <div className="centered">
      <img className="gifScale" src={process.env.PUBLIC_URL + '/images/pikachuWave.gif'} alt="Pikachu is Waving"/>
      </div>
      </div>
    </>
  );
};

export default LoginForm;