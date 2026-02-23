import { useState, useEffect } from "react";
import { ListItem, Typography, List, ListItemText } from "@mui/material";

function App() {
  const title: string = "Welcome to Reactivities";
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/activities").then((response) =>
      response.json().then((data) => setActivities(data)),
    );
  }, []);

  return (
    <>
      <Typography variant="h3" style={{ color: "blue" }}>
        {title}
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
