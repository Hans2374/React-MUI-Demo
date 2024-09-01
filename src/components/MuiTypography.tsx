import { Typography } from "@mui/material"

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            <Typography variant='subtitle1'>Sub title 1</Typography>
            <Typography variant='subtitle2'>Sub title 2</Typography>

            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sequi necessitatibus odit tenetur ipsa eius blanditiis aliquid repellat porro sint dolore fugiat, itaque, libero dolor suscipit id rerum voluptates incidunt.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur maxime ad error accusantium cupiditate tempora? Vero perspiciatis voluptatibus ipsa repellendus facilis quia ut nihil dolore. Fuga deserunt dolores minus!</Typography>
        </div>
    )
}
