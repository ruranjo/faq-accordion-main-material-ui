import { createTheme } from "@mui/material";
import { LIGHT_PINK } from "../../styles/variables";

 const theme = createTheme({
    palette: {
      background: {
        default: LIGHT_PINK, // Color de fondo personalizado
      },
    },
});

export default theme;