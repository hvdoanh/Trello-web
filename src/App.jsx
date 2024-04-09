import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr />

      <h1>Vite + React</h1>
      <Typography variant="body2" color="text.secondary">
        Text typograyphy
      </Typography>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
