import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { useFormikContext } from 'formik';

const FormComponent = ({ openForm, setOpenForm}) => {
    const names=["Crime","Drama"];
    const [selectedGenre, setSelectedGenre] = useState([]);
    const {
        setFieldValue,
        handleChange,
        errors,
        touched,
        handleSubmit,
      } = useFormikContext();
   

    const renderForm = () => {
        return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField  label="Title" 
                    id="title" name="title" onChange={handleChange} 
                    />
                    {touched.title && errors.title ? (<div style={{ color: "red"}}>{errors.title}</div>) : null}
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Year" 
                    id="year" name="year" onChange={handleChange} 
                    />
                    {touched.year && errors.year ? (<div style={{ color:"red"}}>{errors.year}</div>) : null}
                </Grid>
                <Grid item xs={4}>
                <InputLabel >Genre</InputLabel>
                    <Select
                        multiple
                        onChange={(e) => { 
                            setSelectedGenre(e.target.value);
                            setFieldValue('genres', e.target.value);
                        }}
                        name='genres'
                        id='genres'
                        value={selectedGenre}
                        input={<Input />}
                    >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                    {touched.genres && errors.genres ? (<div style={{ color:"red"}}>{errors.genres}</div>) : null}
                </Grid>

                <Grid item xs={4}>
                    <TextField label="Content Rating" type="number"
                        id="contentRating" name="contentRating" onChange={handleChange} 
                    />
                {touched.contentRating && errors.contentRating ? (<div style={{ color:"red"}}>{errors.contentRating}</div>) : null}
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Release Date" type="date"
                        id="releaseDate" name="releaseDate" onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    {touched.releaseDate && errors.releaseDate ? (<div style={{ color:"red"}}>{errors.releaseDate}</div>) : null}
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Original Title" 
                    id="originalTitle" name="originalTitle" onChange={handleChange}
                    />
                    {touched.originalTitle && errors.originalTitle ? (<div style={{ color:"red"}}>{errors.originalTitle}</div>) : null}
                </Grid>

                <Grid item>
                    <TextareaAutosize  
                        placeholder="Storyline" 
                        style={{ minWidth: "500px", minHeight: "100px" }}
                        id="storyline" name="storyline" onChange={handleChange}
                        
                    />
                    {touched.storyline && errors.storyline ? (<div style={{ color:"red"}}>{errors.storyline}</div>) : null}
                </Grid>                
            </Grid>
            {/* <Button type="submit" value="Submit/> */}
        </form>
        );
    };
    const handleClose = () => setOpenForm(false);
  return (
    <Container maxWidth="md">
    <Dialog  
        open={openForm} 
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'md'}
    >
        <DialogTitle>Add New Movie</DialogTitle>
        <DialogContent>
            { renderForm()}
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} variant="contained">
                Cancel
            </Button>
            <Button color="primary" onClick={() => handleSubmit()} variant="contained">
                Submit
            </Button>
        </DialogActions>
    </Dialog>
    </Container>
  );
}

export default FormComponent;
