import React from 'react';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  Avatar,
  makeStyles,
  Chip
} from '@material-ui/core';
import AvatarLogo from '../../assets/avatar.jpg';

import {
  myInfo,
  contactInfo,
  socialLinksInfo,
  aboutMeInfo,
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
  avatarIcon: {
    height: 100, 
    width: 100
  },
  personalSummaryBlob: {
    marginTop: 8,
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
  const { content } = aboutMeInfo;
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


      {/* Header */}
      <Grid item container className={classes.section}>
        <Grid item container direction="row">
          <Grid item justify='space-between' xs={2}>
            <Avatar
            src={AvatarLogo}
            style={classes.avatarIcon}
            />
          </Grid>
          <Grid item>
            <Typography variant="h2"><span className={classNames(classes.noSpace, classes.sectionTitle)}>{firstName}</span> {lastName}</Typography>
            <Typography variant="h3">{role}</Typography>
            <Typography variant="overline">{location.displayName} <strong>|</strong> {phone.displayName} <strong>|</strong> {email.value} <strong>|</strong> {website.displayName} </Typography>
          </Grid>          
        </Grid>
        <Grid item style={classes.personalSummaryBlob}>
        <Typography variant="body2">{content}</Typography>
        </Grid>
      </Grid>

      { /* Experience */}
      <Grid item container className={classes.contentContainer}>
        <Grid item container className={classes.section}>
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Experiences</Typography>
          <Grid item container direction="column" className={classes.section}>
            {experiences.map(experience => {
              const { title, subtitle, caption, duration, shortContent } = experience;

              return (
                <Grid item key={title} className={classes.section}>
                  <Grid item container justify="space-between">
                    <Typography variant="h5">{title} - {subtitle}</Typography>
                    <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{duration}</Typography>
                  </Grid>
                  <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{caption}</Typography>
                  <Typography variant="body1">{shortContent}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* Education */}
      <Grid item container className={classes.contentContainer}>
        <Grid item container className={classes.section}>
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Education</Typography>
          <Grid item container direction="column" className={classes.section}>
            {educations.map(education => {
              const { title, subtitle, caption, duration, shortContent } = education;

              return (
                <Grid item key={title} className={classes.section}>
                  <Grid item container justify="space-between">
                    <Typography variant="h5">{subtitle}</Typography>
                    <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{duration}</Typography>
                  </Grid>
                  <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{title}, {caption}</Typography>
                  <Typography variant="body1">{shortContent}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* Community */}
      <Grid item container className={classes.contentContainer}>
        <Grid item className={classes.section} xs={4} direction="column">
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Public Speaking</Typography>
          {talks.map(talk => {
            return (
              <Grid item key={talk.title} className={classes.section}>
                <Typography variant="h5">{talk.title}</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{talk.content}</Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid item className={classes.section} xs={4}>
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Events Organized</Typography>
          {events.map(event => {
            return (
              <Grid item key={event.title} className={classes.section}>
                <Typography variant="h5">{event.title}</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{event.content}</Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid item className={classes.section} xs={4}>
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Certifications</Typography>
          {awards.map(award => {
            const { title, content } = award;
            return (
              <Grid item key={title} className={classes.section}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{content}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>


      {/* Skills */}
      <Grid item container className={classes.contentContainer}>
        <Grid item className={classes.section}>
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Skills</Typography>
          {skills.map(skill => (
            <Chip key={skill.title} classes={{ root: classes.chip }} label={skill.title} variant="outlined" />
          ))}
          {techs.map(tech => (
            <Chip key={tech} classes={{ root: classes.chip }} label={tech} variant="outlined" />
          ))}
        </Grid>


      </Grid>


    </Grid>
  );
}

export default PrintPage;
