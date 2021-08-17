import React from 'react';
import classNames from 'classnames';
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
  awardInfo,
  techInfo,
  talksInfo,
  volunteerInfo
} from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    display: 'none',

    '@media print': {
      display: 'flex'
    }
  },
  contentContainer: {
    borderTop: `1px solid ${theme.palette.background.light}`
  },
  aboutContainer: {
    borderRight: `1px solid ${theme.palette.background.light}`,
    padding: '16px 0'
  },
  infoContainer: {
    padding: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(1),
    width: '100%',
    backgroundColor: theme.palette.background.dark,
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
    margin: '8px 8px 8px 0',
    height: 24
  },
  h6text: {
    color: theme.palette.text.main,
    fontSize: '12px'
  },
  sectionTitle: {
    color: theme.palette.green.main
  }
}));

const PrintPage = () => {
  const classes = useStyles();

  const { firstName, lastName, role } = myInfo;
  const { location, phone, website, email } = contactInfo;
  const { skills } = skillInfo;
  const { techs } = techInfo;
  const { experiences } = experienceInfo;
  const { educations } = educationInfo;
  const { awards } = awardInfo;
  const { talks } = talksInfo;
  const { events } = volunteerInfo;

  return (
    <Grid container className={classes.container}>

      <Grid item container className={classes.section}>
        <Grid item>
          <Typography variant="h2"><span className={classNames(classes.noSpace,classes.sectionTitle)}>{firstName}</span> {lastName}</Typography>
          <Typography variant="h3">{role}</Typography>
        </Grid>
      </Grid>

      <Grid item container className={classes.contentContainer}>

        <Grid item container xs={4} direction="column" className={classes.aboutContainer}>
          <Grid item className={classes.section}>
            <Typography variant="h3" className={classNames(classes.noSpace,classes.sectionTitle)}>Info</Typography>
            <Grid item container direction="column" className={classes.section}>
              <Grid item>
                <Typography variant="h5">Address</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{location.displayName}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Phone</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{phone.displayName}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Email</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{email.value}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Website</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{website.displayName}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.section}>
            <Typography variant="h3" className={classNames(classes.noSpace,classes.sectionTitle)}>Education</Typography>
            {educations.map(education => {
              const { title, subtitle, caption, duration } = education;

              return (
              <Grid item key={title} className={classes.section}>
                <Typography variant="h5">{subtitle}</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{title}, {caption}</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{duration}</Typography>
              </Grid>
              );
            })}
          </Grid>

          <Grid item className={classes.section}>
            <Typography variant="h3" className={classNames(classes.noSpace,classes.sectionTitle)}>Public Speaking</Typography>
            {talks.map(talk => {
              return (
              <Grid item key={talk.title} className={classes.section}>
                <Typography variant="h5">{talk.title}</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{talk.content}</Typography>
              </Grid>
              );
            })}
          </Grid>

          <Grid item className={classes.section}>
            <Typography variant="h3" className={classNames(classes.noSpace,classes.sectionTitle)}>Events Organized</Typography>
            {events.map(event => {
              return (
              <Grid item key={event.title} className={classes.section}>
                <Typography variant="h5">{event.title}</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{event.content}</Typography>
              </Grid>
              );
            })}
          </Grid>

          <Grid item className={classes.section}>
            <Typography variant="h3" className={classNames(classes.noSpace,classes.sectionTitle)}>Skills</Typography>
            {skills.map(skill => (
              <Chip key={skill.title} classes={{ root: classes.chip }} label={skill.title} variant="outlined" />
            ))}
             {techs.map(tech => (
              <Chip key={tech} classes={{ root: classes.chip }} label={tech} variant="outlined" />
            ))}
          </Grid>

          
        </Grid>

        <Grid item container xs={8} direction="column" className={classes.infoContainer}>

          <Grid item container className={classes.section}>
            <Typography variant="h3" className={classNames(classes.noSpace,classes.sectionTitle)}>Experiences</Typography>
            <Grid item container direction="column" className={classes.section}>
              {experiences.map(experience => {
                const { title, subtitle, caption, duration, shortContent } = experience;

                return (
                  <Grid item key={title} className={classes.section}>
                    <Grid item container justify="space-between">
                      <Typography variant="h5">{subtitle}</Typography>
                      <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{duration}</Typography>
                    </Grid>       
                    <Typography variant="h6" className={classNames(classes.noSpace,classes.h6text)}>{title}, {caption}</Typography>
                    <Typography variant="body1">{shortContent}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          
          <Grid item container className={classes.section}>
            <Typography variant="h3" className={classNames(classes.noSpace,classes.sectionTitle)}>Certifications</Typography>
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
