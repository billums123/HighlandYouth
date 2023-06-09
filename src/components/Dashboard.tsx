import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThisWeekEvent from "./ThisWeekEvent";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleNavigateToLogin}>
        {" "}
        Login
      </Button>
      <ThisWeekEvent />
    </div>
  );
}
