import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingComponent = () => {
    return (
        <div>
            <Container fixed>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <CircularProgress />
                </Grid>
            </Container>
            
        </div>
    );
};

export default LoadingComponent;