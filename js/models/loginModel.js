LoginModel = Backbone.Model.extend({
    defaults: {
        status: '',
    },
    initialize: function(){
    },
    verifyInformation: function(username, password){
        var _self = this;
        var method = 'verifyInformation';
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {method: method,
                   username: username,
                   password: password},
            success: function(data){
                _self.set('status', jQuery.parseJSON(data));
            }
        });
    },
});