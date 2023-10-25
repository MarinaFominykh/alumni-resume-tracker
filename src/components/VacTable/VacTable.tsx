import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  title: string,
  description: string,
  city: string,
  date: string,
  experience: string,
  format: string,
  amount: number
) {
  return { title, description, city, date, experience, format, amount };
}

const rows = [
  createData(
    "Junior UX/UI Designer",
    "Департамент технологий",
    "22.10.2023",
    "Москва",
    "От 1 года",
    "Удалённо",
    63
  ),
  createData(
    "Middle Frontend-разработчик",
    "Департамент технологий",
    "17.09.2023",
    "Москва",
    "От 1 года",
    "Удалённо",
    52
  ),
  createData(
    "Backend разработчик",
    "Департамент технологий",
    "17.09.2023",
    "Москва",
    "От 1 года",
    "Удалённо",
    104
  ),
  createData(
    "Frontend",
    "Департамент технологий",
    "07.09.2023",
    "Москва",
    "От 1 года",
    "Удалённо",
    48
  ),
  createData(
    "Frontend",
    "Департамент технологий",
    "01.08.2023",
    "Москва",
    "От 1 года",
    "Удалённо",
    39
  ),
];

export default function VacTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="right">Опыт</TableCell>
            <TableCell align="right">Формат</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.amount}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.title}
                {row.description}{row.date}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.experience}</TableCell>
              <TableCell align="right">{row.format}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
