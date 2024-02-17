import { createTheme } from "@mui/material";
import { WHITE } from "../../styles/variables";

 const theme = createTheme({
    palette: {
      background: {
        default: WHITE, // Color de fondo personalizado
      },
    },
});

export default theme;