import {Button, Card, CardContent, Grid2, TextField, Typography} from '@mui/material'
import {useState, useEffect} from 'react'

export default function TaskForm() {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleSubmit = e => {
        e.preventDefault();

        console.log(task);
    }

    const handleChange = e => 
        setTask({...task, [e.target.name]: e.target.value})
    

  return (

    <Grid2 
        container 
        direction='column' 
        alignItems='center' 
        justifyContent='center'
    >
        <Grid2 item xs={3}>
            <Card 
                sx={{mt: 5}}
                style={{
                    backgroundColor: '#1e272e',
                    padding: '1rem'
                }}
            >
                <Typography variant='5' textAlign='center' color='white'>Create task</Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>

                        <TextField
                            variant='filled'
                            label='Escribe el titulo'
                            sx={{
                                display: 'block',
                                margin: '.5rem 0'
                            }}
                            name = "title"
                            onChange={handleChange}
                            inputProps={{style: {color: "white"}}}
                            InputLabelProps={{style: {color: "white"}}}
                        />

                        <TextField
                            variant='filled'
                            label='Descripción'
                            multiline
                            rows={4}
                            sx={{
                                display: 'block',
                                margin: '.5rem 0'
                            }}
                            name = "description"
                            onChange={handleChange}
                            inputProps={{style: {color: "white"}}}
                            InputLabelProps={{style: {color: "white"}}}
                        />

                        <Button variant='contained' color='primary' type='submit'>
                            Save
                        </Button>
                    </form>



                </CardContent>
            </Card>
        </Grid2>
    </Grid2>

  )
}
