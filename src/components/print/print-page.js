import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';

import {
  myInfo,
  contactInfo,
  skillInfo,
  experienceInfo,
  educationInfo,
  awardInfo
} from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    height: '100vh',
    display: 'none',

    '@media print': {
      display: 'flex'
    }
  },
  contentContainer: {
    borderTop: `1px solid ${theme.palette.grey.light}`
  },
  aboutContainer: {
    borderRight: `1px solid ${theme.palette.grey.light}`,
    padding: '16px 0'
  },
  infoContainer: {
    padding: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(1),
    width: '100%',
    backgroundColor: theme.palette.grey.dark,
    height: '2px'
  },
  section: {
    padding: '8px 0'
  },
  noSpace: {
    margin: 0,
    padding: 0
  },
  chip: {
    marginRight: 4,
    marginLeft: 4,
    height: 24
  }
}));

const PrintPage = () => {
  const classes = useStyles();

  const { firstName, lastName, role } = myInfo;
  const { location, phone, website, email } = contactInfo;
  const { skills } = skillInfo;
  const { experiences } = experienceInfo;
  const { educations } = educationInfo;
  const { awards } = awardInfo;

  return (
    <Grid container className={classes.container}>

      <Grid item container className={classes.section}>
        <Grid item>
          <Typography variant="h2">{firstName} {lastName}</Typography>
          <Typography variant="h3">{role}</Typography>
        </Grid>
      </Grid>

      <Grid item container className={classes.contentContainer}>

        <Grid item container xs={4} direction="column" className={classes.aboutContainer}>
          <Grid item className={classes.section}>
            <Typography variant="h3">Info</Typography>
            <Grid item container direction="column" className={classes.section}>
              <Grid item>
                <Typography variant="h5">Address</Typography>
                <Typography variant="h6" className={classes.noSpace}>{location.value}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Phone</Typography>
                <Typography variant="h6" className={classes.noSpace}>{phone.displayName}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Email</Typography>
                <Typography variant="h6" className={classes.noSpace}>{email.value}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Website</Typography>
                <Typography variant="h6" className={classes.noSpace}>{website.displayName}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.section}>
            <Typography variant="h3">Skills</Typography>
            {skills.map(skill => (
              <Chip key={skill.title} classes={{ root: classes.chip }} label={skill.title} variant="outlined" />
            ))}
          </Grid>

          <Grid item className={classes.section}>
            <Typography variant="h3">Education</Typography>
            {educations.map(education => {
              const { title, subtitle, caption, duration } = education;

              return (
              <Grid item key={title} className={classes.section}>
                <Typography variant="h5">{subtitle}</Typography>
                <Typography variant="h6" className={classes.noSpace}>{title}, {caption}</Typography>
                <Typography variant="h6" className={classes.noSpace}>{duration}</Typography>
              </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item container xs={8} direction="column" className={classes.infoContainer}>

          <Grid item container className={classes.section}>
            <Typography variant="h3">Experiences</Typography>
            <Grid item container direction="column" className={classes.section}>
              {experiences.map(experience => {
                const { title, subtitle, caption, duration, shortContent } = experience;

                return (
                  <Grid item key={title}>
                    <Grid item container justify="space-between">
                      <Typography variant="h5">{subtitle}</Typography>
                      <Typography variant="h6" className={classes.noSpace}>{duration}</Typography>
                    </Grid>       
                    <Typography variant="h6" className={classes.noSpace}>{title}, {caption}</Typography>
                    <Typography variant="body1">{shortContent}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          
          <Grid item container className={classes.section}>
            <Typography variant="h3">Awards and Achievements</Typography>
            <Grid item xs={12}>
              <List disablePadding>
                {awards.map(award => {
                  const { title, content } = award;

                  return (
                    <ListItem classes={{ root: classes.noSpace }} key={title}>
                      <ListItemIcon>
                        <StarsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={title}
                        secondary={content || null}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
}

export default PrintPage;
