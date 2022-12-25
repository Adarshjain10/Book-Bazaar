export const oktaConfig = {
    clientId: '0oa7qv72ke536fyTd5d7',
    issuer: 'https://dev-12664384.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}