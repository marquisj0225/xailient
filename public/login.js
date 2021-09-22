var poolData = {
    UserPoolId : 'us-east-xxxx',
    ClientId : 'xxxxxxxxxxxxxxxxxx'
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var attributeList = [];

document.getElementById('login-form').onsubmit = function (event) {
    event.preventDefault();
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#pwd').value;
    var authenticationData = {
        Username: email, // your username here
        Password: password, // your password here
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);



    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username :email,
        Pool : userPool,
    };


    var cognitoUser =
        new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();
            window.localStorage.setItem('jwt', accessToken);
            alert('Logged in successfully');
            window.location.href = '/secure-page'
            },

        onFailure: function (err) {
            alert(err.message);
        },
    });
};


