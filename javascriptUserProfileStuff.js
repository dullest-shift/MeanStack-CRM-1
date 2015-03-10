
function doGetProfile(req,res) {
	collectPostData(req)//collects post data on the post stream
	.val(processJSONPostData) //.val is a synchronous step
	.val(function(sessionData){//.val is a synchronous step that get session id
		return sessionData.session_id;
	})
	.seq(validateSession)//asynchronous task that will fire another function that will recievce a sequence 
	.val(function(sessionID){//this will grab the userID if the session has been validated, if validation fails then err message will be thrown 
		return sessions[sessionID].user_id;
	})
	.seq(retrieveProfile)//asynchronous call that gets all the required user profile data
	.val(function(profileData){//synchronous call that sends the user info and sends it to the server
		res.end(JSON.stringify({
			profile: profileData
		}));
	})
	.or(function(err){
		res.end(jsonError(err));
	});
}