import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

export default function Login() {
  const [loginText, setLoginText] = useState<string>("");
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/");
  };

  const handleUpdateLoginText = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setLoginText(e.target.value);
  };
  return (
    <Card sx={{ minWidth: 275, p: 2 }}>
      <Typography variant="h5" component="div">
        Login
      </Typography>
      <CardContent>
        <TextField
          onChange={handleUpdateLoginText}
          label="Login ID"
          variant="outlined"
        />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          disabled={!loginText.length}
          onClick={handleClickLogin}
          size="small"
        >
          Login
        </Button>
      </CardActions>
    </Card>
  );
}
