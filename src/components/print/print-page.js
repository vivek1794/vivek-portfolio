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
  aboutMeInfo,
  experienceInfo,
  educationInfo,
  techInfo,
  communityInfo,
  researchInfo
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
    borderTop: `1px solid ${theme.palette.background.light}`,
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: "#f8fcfa", 
    padding: theme.spacing(2), 
    borderLeft: `2px solid ${theme.palette.green.main}`,
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
    color: theme.palette.green.main,
    marginTop: '8px',
  },
  inlineHeading: {
    display: "inline",
    color: theme.palette.text.main,
  },
  heading: {
    color: theme.palette.text.main,
  }

}));

const PrintPage = () => {
  const classes = useStyles();

  const { firstName, lastName, role } = myInfo;
  const { content } = aboutMeInfo;
  const { location, phone, website, email } = contactInfo;
  const { techs } = techInfo;
  const { experiences } = experienceInfo;
  const { educations } = educationInfo;
  const { items: communityItems } = communityInfo;
  const { items: researchItems } = researchInfo;

  return (
    <Grid container className={classes.container}>

      {/* Header */}
      <Grid item container className={classes.section}>
        <Grid item container direction="row">
          <Grid item>
            <Typography variant="h2"><span className={classNames(classes.noSpace, classes.sectionTitle)}>{firstName}</span> {lastName}</Typography>
            <Typography variant="h3">{role}</Typography>
            <Typography variant="overline">{location.displayName} <strong>|</strong> {phone.displayName} <strong>|</strong> {email.value} <strong>|</strong> {website.displayName} </Typography>
          </Grid>          
        </Grid>
        <Grid item className={classes.personalSummaryBlob}>
        <Typography variant="body2">{content}</Typography>
        </Grid>
      </Grid>

      { /* Experience */}
      <Grid item container className={classes.contentContainer}>
        <Grid item container className={classes.section}>
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Experiences</Typography>
          <Grid item container direction="column" className={classes.section}>
            {experiences.map(experience => {
              const { title, subtitle, caption, duration, content } = experience;

              return (
                <Grid item key={title} className={classes.section}>
                  <Grid item container justify="space-between">
                    <Typography variant="h5">{title} - {subtitle}</Typography>
                    <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{duration}</Typography>
                  </Grid>
                  <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{caption}</Typography>
                  <Typography variant="body1">{content}</Typography>
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
              const { title, subtitle, caption, duration, content } = education;

              return (
                <Grid item key={title} className={classes.section}>
                  <Grid item container justify="space-between">
                    <Typography variant="h5">{subtitle}</Typography>
                    <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{duration}</Typography>
                  </Grid>
                  <Typography variant="h6" className={classNames(classes.noSpace, classes.h6text)}>{title}, {caption}</Typography>
                  <Typography variant="body1">{content}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* Patents & Authored Works */}
      <Grid item container className={classes.contentContainer}>
        <Grid item className={classes.section} direction="column">
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>{researchInfo.title}</Typography>
          <ul>
          {researchItems.map(item => {
            return (
              <li key={item.title}>
                <Grid item className={classes.section}>
                  <Typography variant="h4" className={classNames(classes.noSpace, classes.inlineHeading)}>{item.title}: </Typography>
                  <Typography variant="body1" className={classes.inlineHeading}>{item.content}</Typography>
                </Grid>
              </li>
            );
          })}
          </ul>
        </Grid>
      </Grid>

      {/* Public Speaking & Community */}
      <Grid item container className={classes.contentContainer}>
        <Grid item className={classes.section} direction="column">
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Public Speaking & Community Leadership</Typography>
          <ul>
          {communityItems.map(item => {
            return (
              <li key={item.title}>
                <Grid item className={classes.section}>
                  <Typography variant="h4" className={classNames(classes.noSpace, classes.inlineHeading)}>{item.title} </Typography>
                  <Typography variant="body1" className={classes.inlineHeading}>{item.content}</Typography>
                </Grid>
              </li>
            );
          })}
          </ul>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid item container className={classes.contentContainer}>
        <Grid item className={classes.section}>
          <Typography variant="h3" className={classNames(classes.noSpace, classes.sectionTitle)}>Skills</Typography>
          {techs.map(tech => (
            <Chip key={tech} classes={{ root: classes.chip }} label={tech} variant="outlined" />
          ))}
        </Grid>
      </Grid>

    </Grid>
  );
}

export default PrintPage;
