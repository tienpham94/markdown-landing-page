import React, { useEffect } from "react";

import { useAuth } from "react-use-auth";
import Layout from "../components/layout";

const AuthCallbackPage = () => {
    const { handleAuthentication } = useAuth();
    useEffect(() => {
        handleAuthentication();
    }, []);

    return (
        <Layout>
            <h1>
                This is the auth callback page, you should be redirected
                immediately.
            </h1>
        </Layout>
    );
};

export default AuthCallbackPage;