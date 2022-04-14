import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './tab.module.css';
import Card from './Card'
import Card_2 from './Card-2'
// import { useTranslation } from 'next-i18next'

import Tabs from '@mui/material/Tabs';
import Button from '../Button/index3';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <>
      <div
        role="tabPanel"
        hidden={value !== index}
        id={`simpleTabpanel-${index}`}
        ariaLabelledby={`simpleTab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ marginBottom: "20px" }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className={styles["MuiTabs-indicatorSpan"]} /> }}
//   />
// )


// ({
//   '& .MuiTabs-indicator': {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',

//   },
//   '& .MuiTabs-indicatorSpan': {
//     maxWidth: 105,
//     width: '100%',


//   },

// });

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(32),
    '@media (max-width:910px)': {
      fontSize: '24px',
    },
    '@media (max-width:600px)': {
      fontSize: '20px',
    },
    marginRight: theme.spacing(0),
    padding: "0",
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',

    },
  }),
);

export default function CustomizedTabs() {
  // const { t } = useTranslation('header');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='container'>
        <Box className={styles['box']}>
          <span className={`gl_regular ${styles['tab_name']}`}>
            Работы
          </span>
          <Tabs className={styles['tabs']}
            value={value}
            onChange={handleChange}
            ariaLabel="visible arrows tabs example"
          >
            <StyledTab className={styles['tab']} label='Брендинг' />
            <StyledTab className={styles['tab']} label='UX/UI design' />
            <StyledTab className={styles['tab']} label='Packaging' />
          </Tabs>
        </Box>
        <Box sx={{
        }} className={styles['maps']}>
          <Box>
            <TabPanel value={value} index={0}>
              <div>
                <Card_2/>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                <Card/>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div>
                <Card/>
              </div>
            </TabPanel>
          </Box>
        </Box>
        <div className={styles['btn']}>
          <Button />
        </div>
      </div>

    </>
  );
}
