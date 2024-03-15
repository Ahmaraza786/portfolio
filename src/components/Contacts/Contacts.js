import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FaLinkedinIn,
    FaGithub,
    FaMediumM,
} from 'react-icons/fa';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        // Your styles here
    }));
    
    const classes = useStyles();

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-details'>
                        <a href={`mailto:${contactsData.email}`} className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
                        </a>
                        <a href={`tel:${contactsData.phone}`} className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
                        </div>
                        <div className='socialmedia-icons'>
                            {socialsData.github && (
                                <a href={socialsData.github} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a href={socialsData.medium} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Your image here */}
        </div>
    );
}

export default Contacts;
