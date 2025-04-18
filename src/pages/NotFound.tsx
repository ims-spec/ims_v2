
import { 
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Link } from "react-router-dom"; // или Next.js Link, если используете Next.js

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const NotFound = ({ role }: { role: string }) => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <ErrorOutlineIcon 
          sx={{ 
            fontSize: isMobile ? 80 : 120, 
            color: theme.palette.error.main 
          }} 
        />
      </Box>

      <Typography 
        variant={isMobile ? "h4" : "h2"} 
        gutterBottom 
        sx={{ fontWeight: "bold" }}
      >
        404 - Страница не найдена
      </Typography>

      <Typography 
        variant="body1" 
        color="text.secondary" 
        sx={{ mb: 4, fontSize: isMobile ? "1rem" : "1.2rem" }}
      >
        Упс! Похоже, такой страницы не существует. | {role}
      </Typography>

      <Button
        component={Link}
        to="/" // или href="/" для Next.js
        variant="contained"
        size="large"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          textTransform: "none",
          fontSize: "1.1rem"
        }}
      >
        Вернуться на главную
      </Button>
    </Container>
  );
};
