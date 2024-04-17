import React , {useState} from 'react';
import { FAQS } from "@/app/models/StaticDataModel";
import Image from "next/image";
import { 
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button
  } from "@mui/material";
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Questions ({ 
    header, 
    poster, 
    queries, 
    image, 
    confirmation, 
    chatTeam, 
    buttonLabel 
}: FAQS) {
    const [expanded, setExpanded] = useState(Array(queries.length).fill(false));

    const expandAccordion = (index: number) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    }
    return (
        <>
            <div className="flex flex-col text-center p-10 gap-3">
                <Typography variant="h5" fontWeight="bold">{header}</Typography>
                <Typography color="textSecondary">{poster}</Typography>
            </div>
            <div className="lg:p-10">
                {queries.map((query, index) => (
                    <div key={index}>
                        <Accordion className="p-3 text-start">
                            <AccordionSummary
                                expandIcon={expanded[index] ? <RemoveCircleIcon sx={{ color: "#6941C6" }} /> : <AddCircleIcon sx={{ color: "#6941C6" }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                onClick={() => expandAccordion(index)}
                            >
                                <Typography fontWeight="bold">{query.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='w-11/12'>
                                <Typography>
                                    {query.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion> 
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3 p-5 items-center mt-10">
                <Image
                    src={image}
                    alt="I am Photo"
                    width={100}
                    height={100}
                />
                <Typography fontWeight="bold">{confirmation}</Typography>
                <Typography color="textSecondary">{chatTeam}</Typography>
                <Button 
                    variant="contained" 
                    sx={{ 
                        padding:"8px",
                        width:"130px", 
                        borderRadius:"8px",
                        backgroundColor:"#6941C6", 
                        textTransform: "none",
                        "&:hover": {
                            bgcolor: "#6941C6",
                        },
                    }}
                >
              {buttonLabel}
            </Button>
            </div>
        </>
    )
}