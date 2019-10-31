var poolData = {
    UserPoolId : 'us-east-2_q3sXEka31',
    ClientId : '2uqla22oeu7mvp4mcoscp9l9ho'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var attributeList = [];


document.getElementById('signup-form').onsubmit = function (event) {
    event.preventDefault();
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#pwd').value;
    var name = document.querySelector('#name').value;


    var dataEmail = {
        Name : 'email',
        Value : email
    };
    var dataGender = {
        Name:'gender',
        value:gender
    };
  

    var username  = email;


    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    userPool.signUp(username, password, attributeList, null, function(err, result){
    if (err) {
        console.error(err);
        alert(err.message);
        return;
    }
    let cognitoUser = result.user;
    console.log(cognitoUser);
    alert('User Created, please login now');
    window.location.href = '/'
});

};

