import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export default function ThisWeekEvent() {
  const getDate = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Upcoming Activity
        </Typography>
        <Divider />
        <Typography
          sx={{ fontSize: 16, mt: 1 }}
          color="text.secondary"
          gutterBottom
        >
          {`${getDate()}`}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {`Time: 7:00PM`}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {`Location: Toscana Clubhouse`}
        </Typography>
        <Typography variant="h5" component="div">
          Walleyball
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">RSVP</Button>
        <Button size="small">Add to Calendar</Button>
      </CardActions>
    </Card>
  );
}
