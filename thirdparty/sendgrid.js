const apikey="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";
var helper = require('sendgrid').mail;
var fromEmail = new helper.Email('tidymaster@gmail.com');

module.exports.unamepasssend=function(userdata,callback){
        var toEmail = new helper.Email(userdata.email);
        var subject = 'TIDYMASTER';
        var content = new helper.Content('text/plain', 'This is system genarated username and password for you. username: Usename: '+userdata.username+" password: "+userdata.password);
        var mail = new helper.Mail(fromEmail, subject, toEmail, content);
        var sg = require('sendgrid')(apikey);
        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });
        sg.API(request, function (error, response) {
        if (error) {
            callback(error);
        }else{
            //console.log(response)
            callback(null,response);
        }
            
        });
}
