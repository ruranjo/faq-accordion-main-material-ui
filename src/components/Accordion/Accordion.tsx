import React, { useState } from 'react'


import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { AccordionProps } from '../../interfaces/accordion.interface';
import { DARK_PURPLE, GRAYISH_PURPLE } from '../../styles/variables';
import { iconPlus, iconsMinus } from '../../utils/assets';

export interface Props {
    accordion: AccordionProps
}

const AccordionComponent:React.FC<Props> = ({accordion}) => {
  const [expanded, setExpanded] = useState(accordion.isAccordionOpen);

  const handleChange = () => {
    setExpanded(!expanded);
  };

    return (
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          sx={{color: DARK_PURPLE, fontWeight:'600'}}
          expandIcon={expanded ? <img src={iconsMinus} alt="" /> : <img src={iconPlus} alt="" /> }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {accordion.question}
        </AccordionSummary>
        <AccordionDetails sx={{color: GRAYISH_PURPLE, fontWeight:'500'}}>
          {accordion.answer}
        </AccordionDetails>
    </Accordion>
    );
}

export default AccordionComponent;