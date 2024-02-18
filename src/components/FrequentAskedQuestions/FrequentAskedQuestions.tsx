import React from 'react'
import { faqs } from '../../utils/data';
import { Accordion } from '../Accordion';
import { Box, SxProps, Typography } from '@mui/material';
import { DARK_PURPLE, FONT_FAMILY, WHITE } from '../../styles/variables';
import { iconStart } from '../../utils/assets';


export interface styledFrequentAskedQuestions {
    mainContainer: SxProps;
    sectionContainer: SxProps;
    title: SxProps;
    textHeader: SxProps;
}
  
  const frequentAskedQuestionsStyle: styledFrequentAskedQuestions = {
    mainContainer:{
      //border:'1px solid red',
      position:'relative',
      top:'15%',
      backgroundColor:WHITE,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:'5rem',
      width:'50%',
      margin:0,
      borderRadius:'20px',
      padding:'2rem',
      height:'auto',
      paddingTop:'2rem',
      gap:2,
      '@media screen and (max-width: 880px)': {
        position:'relative',
        top:'15%',
        width:'80%',
      },
    },
    sectionContainer:{
        //border:'1px solid green', 
        
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        width:'100%',
        '@media screen and (max-width: 880px)': {
            width:'80%',
        },
    },
    title:{
      //border:'1px solid black',
      display:'flex',
      justifyContent:'center',
      textAlign:'center',
      fontSize:'4rem',
      color: DARK_PURPLE,
      fontWeight:'600 !important',
      fontFamily: FONT_FAMILY + ' !important',
      '@media screen and (max-width: 880px)': {
        justifyContent:'center',
        textAlign:'center',
        fontSize:'2.5rem',
      },
    },
    textHeader:{
        width:'100%',
        //border:'1px solid black',
        display:'flex',
        justifyContent:'flex-start',
        gap:5
    },
    
    
  }


const FrequentAskedQuestions:React.FC<{}> = () => {
    return (
        <Box sx={frequentAskedQuestionsStyle.mainContainer}>
          <Box sx={frequentAskedQuestionsStyle.textHeader}>
                <img src={iconStart} alt="" />
                <Typography variant='h2' sx={frequentAskedQuestionsStyle.title}>
                  FAQs
                </Typography>
          </Box>
          <Box sx={frequentAskedQuestionsStyle.sectionContainer}>
            
              {faqs.map((d, i) => (
                <Accordion accordion={d} key={i}/>
              ))}
            
          </Box>
        </Box>
    );
}

export default FrequentAskedQuestions