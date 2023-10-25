import { Button, Container, Typography, createSvgIcon } from "@mui/material";

function Vacancies() {
  // const vacanciesStyles = {
  //   button: {
  //     // mainColor: '#1D6BF3'
  //     mainColor: 'white'

  //   }
  //   }

  // И потом на кнопку вешаешь sx={{ vacanciesStyles.button}}

  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );
  return (
    <Container>
      <Typography variant="h1">Мои вакансии</Typography>
      {/* <Button variant="contained" sx={{bgcolor: vacanciesStyles.button.mainColor}}> */}
      <Button variant="contained">
        <PlusIcon></PlusIcon>
        <Typography variant="button">Новая Вакансия</Typography>
      </Button>
    </Container>
  );
}

export default Vacancies;
