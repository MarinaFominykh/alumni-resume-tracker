import { Avatar, Box, ButtonBase, Grid, Typography } from "@mui/material";
interface CompanyIconProps {
  key: number;
  title: string;
  description: string;
  logo: string;
}
function CompanyIcon({ title, description, logo }: CompanyIconProps) {
  return (
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase>
            <Avatar sx={{ width: 72, height: 72 }} alt={title} src={logo} />
          </ButtonBase>
        </Grid>
        <Grid item sm container>
          <Grid item container direction="column">
            <Grid item >
              <Typography sx={{ width: 190 }} gutterBottom variant="subtitle1">
                {title}
              </Typography>
              <Typography
                overflow="hidden"
                textOverflow="ellipsis"
                sx={{ width: 190, height: 40 }}
                variant="body2"
                gutterBottom
                component="div"
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default CompanyIcon;
