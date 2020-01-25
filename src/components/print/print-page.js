import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
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

import ProgressBar from '../common/progress-bar';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    // display: 'none',

    '@media print': {
      display: 'flex'
    }
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
  item: {
    padding: '4px 0'
  },
  noSpace: {
    margin: 0,
    padding: 0
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

      <Grid item container justify="space-between">
        <Grid item>
          <Typography variant="h3">{firstName} {lastName}</Typography>
          <Typography variant="subtitle2">{location.value}</Typography>
          <Typography variant="subtitle2">{phone.displayName}</Typography>
        </Grid>
        <Grid item>
          <Typography align="right" variant="h3">{role}</Typography>
          <Typography align="right" variant="subtitle2">{website.displayName}</Typography>
          <Typography align="right" variant="subtitle2">{email.value}</Typography>
        </Grid>
      </Grid>

      <Grid item container>
        <Divider light classes={{ root: classes.divider }} />
      </Grid>

      <Grid item container className={classes.section}>
        <Typography variant="h3">Skills</Typography>
        <Grid item container>
          {skills.map(skill => (
            <Grid item key={skill.title} xs={6} className={classes.section}>
              <ProgressBar name={skill.title} value={skill.value} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item container className={classes.section}>
        <Typography variant="h3">Experiences</Typography>
        {experiences.map(experience => {
          const { title, subtitle, caption, duration, shortContent } = experience;

          return (
            <Grid item key={title} xs={12} className={classes.section}>
              <Typography variant="h5">{subtitle}</Typography>
              <Typography variant="h6" className={classes.noSpace}>{title}, {caption}</Typography>
              <Typography variant="h6" className={classes.noSpace}>{duration}</Typography>
              <Typography variant="body1">{shortContent}</Typography>
            </Grid>
          );
        })}
      </Grid>

      <Grid item container className={classes.section}>
        <Typography variant="h3">Education</Typography>
        {educations.map(experience => {
          const { title, subtitle, caption, duration, shortContent } = experience;

          return (
            <Grid item key={title} xs={12} className={classes.section}>
              <Typography variant="h5">{subtitle}</Typography>
              <Typography variant="h6" className={classes.noSpace}>{title}, {caption}</Typography>
              <Typography variant="h6" className={classes.noSpace}>{duration}</Typography>
              <Typography variant="body1">{shortContent}</Typography>
            </Grid>
          );
        })}
      </Grid>

      <Grid item container className={classes.section}>
        <Typography variant="h3">Awards and Achievements</Typography>
        <Grid item xs={12}>
          <List disablePadding>
            {awards.map(award => {
              const { title, content } = award;

              return (
                <ListItem classes={{ root: classes.item }} key={title}>
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
  );
}

export default PrintPage;
