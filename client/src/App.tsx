import { useState, useEffect } from "react";
import { ListItem, Typography, List, ListItemText } from "@mui/material";
import axios from "axios";

function App() {
  const title: string = "Welcome to Reactivities";
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
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
