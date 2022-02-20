import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";
import { SIGNUP_MUTATION } from "../../operations/mutations/authentication";
import {
  SignUpMutation,
  SignUpMutationVariables,
} from "../../generated/graphql";
import Dashboard from '../home'
import { Navigate } from "react-router-dom";
import { IS_LOGGED_IN } from "../../operations/queries/authentication";

interface Props {}

const Register: FC<Props> = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  const [signup, { loading, error }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SIGNUP_MUTATION);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  if (data.isLoggedIn) {
    return <Dashboard />;
  }


  const handleLogin: MouseEventHandler = (event) => {
    event.preventDefault();
    signup({
      variables: { ...formState },
      onCompleted: () => {
        console.log("signup complete");
        return <Navigate to={"/auth/login"} />;
      },
    });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <Box>
      <TextField
        value={formState.email}
        name="email"
        onChange={handleChange}
        label="email"
      />
      <TextField
        value={formState.password}
        type={"password"}
        name="password"
        onChange={handleChange}
        label="password"
      />
      <Button onClick={handleLogin}>Signup</Button>
    </Box>
  );
};

export default Register;
