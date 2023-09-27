export const dynamic = 'force-dynamic'

import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    ClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

function authenticateUser(email, password, callbacks) {
    const authenticationDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
    });

    const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, callbacks);
}

function initiateForgotPassword(email, callbacks) {
    const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool,
    });

    cognitoUser.forgotPassword({
        
        onSuccess: function() {
            console.log("internal succes")
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess();
            }
        },
        onFailure: function(err) {
            console.log("internal failure")
            if (callbacks && callbacks.onFailure) {
                callbacks.onFailure(err);
            }
        },
        inputVerificationCode: function(data) {
            console.log("internal inputVerificationCode")
            if (callbacks && callbacks.inputVerificationCode) {
                callbacks.inputVerificationCode(data);
            }
        }
    });
}

function confirmPassword(email, verificationCode, newPassword, callbacks) {
    const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool,
    });

    cognitoUser.confirmPassword(verificationCode, newPassword, {
        onSuccess() {
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess();
            }
        },
        onFailure(err) {
            if (callbacks && callbacks.onFailure) {
                callbacks.onFailure(err);
            }
        }
    });
}

function getJWTToken() {
    return new Promise((resolve, reject) => {
        const currentUser = userPool.getCurrentUser();

        if (!currentUser) {
            reject('No current user');
            return;
        }

        currentUser.getSession((err, session) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(session.getIdToken().getJwtToken());
        });
    });
}

function getCurrentUser() {
    return userPool.getCurrentUser()
}

function isUserLoggedIn() {
    return Boolean(getCurrentUser());
}

function logUserOut() {
    const currentUser = getCurrentUser();

    if (currentUser) {
        currentUser.signOut();
    }
}

export {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails,
    initiateForgotPassword,
    confirmPassword,
    userPool,
    authenticateUser,
    getJWTToken,
    isUserLoggedIn,
    logUserOut,
    getCurrentUser,
    
};