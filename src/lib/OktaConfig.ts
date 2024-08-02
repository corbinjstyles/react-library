export const oktaConfig = {
    clientId: '0oaiomlncnIJcFPuY5d7',
    issuer: 'https://dev-91938660.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile','email'],
    pkce: true,
    disableHttpsCheck: true,
    
}