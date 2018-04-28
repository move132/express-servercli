var request=require('request');

module.exports = {
    index: function(req, res) {
    	console.log(req.body)
        /*do somethings*/
        var options = { 
            url:'https://sspai.com/api/v1/topics?offset=0&limit=220&include_total=false',
            json: true
        };
        request.get(options, (error, getResponse, body) => {
            if (body.error) {
                res.status(422).send(`Error with Data! Try again!`);
            } else { 
                res.send(body);
            }
        });
    },
    login: function(req, res){
    	console.log(req.body) 
        return   res.json(req.headers) 
    },
    logout: function(req, res){
        console.log(req.body,req.query)
        /*do somethings*/
    }
};