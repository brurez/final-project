import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { usePetitionCreateMutation } from "../generated/graphql";
import useCurrentUser from "../hooks/useCurrentUser";
import { Form } from "../lib/Form";
import useMessage from "../hooks/useMessage";
import { useRouter } from "next/router";
import { PostAdd } from "@mui/icons-material";
import { PetitionForm } from "../components/PetitionForm";

export default function PetitionCreatePage() {
  const [petitionCreate] = usePetitionCreateMutation();
  const { currentUser, isLoggedIn } = useCurrentUser();
  const { showErrorMessage, showSuccessMessage } = useMessage();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  });
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const petitionInput: any = Form.serialize(event.currentTarget);
    petitionCreate({ variables: { input: { petitionInput } } })
      .then((response) => {
        // @ts-ignore
        const { petition } = response.data?.petitionCreate;
        console.log(petition);
        showSuccessMessage("Petition created successfully");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        showErrorMessage(err.message);
      });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <PostAdd />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create Petition
      </Typography>
      <PetitionForm onSubmit={handleSubmit} action="Publish petition" />
    </Box>
  );
}
