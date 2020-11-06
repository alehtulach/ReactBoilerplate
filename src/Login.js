import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button } from '@material-ui/core';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
    padding: 20px;
    margin: 100px auto;
    max-width: 40vw;
    min-width: 300px;
    Button {
        margin-bottom: 20px;
    }
`;

export const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleGoogleLogin = useCallback(async () => {
        const qParams = [
            `redirect_uri=http://localhost:3000/oauth_callback`,
            `scope=openid profile email`,
            `login_hint=otulach@gmail.com`,
            `prompt=consent`,
            `state=google`
        ].join("&");
        try {
            const response = await fetch(`/api/auth-url/google?${qParams}`);
            const url = await response.text();
            window.location.assign(url);
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <StyledCard>
            <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
                Login with Google
            </Button>
        </StyledCard>
    );
};
