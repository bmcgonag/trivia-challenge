import { HTTP } from 'meteor/http';
import { check } from 'meteor/check';
import { Questions } from '../imports/api/questions.js';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'importFrom.opentdb' (APICallUrl) {
        check(APICallUrl, String);

        if(!this.userId) {
            throw new Meteor.Error('User is not authorized.');
        }

        const apiResult = HTTP.call('GET', APICallUrl);
        // console.log(apiResult);

        Meteor.call('importQuestions', apiResult, function(err, resultAPICall) {
            if (err) {
                // console.log("Error calling import after API call: " + err);
            } else {
                // console.log("Import Call after API Call All Good!");
            }
        });
    },
    'changeUserPass' (userId) {
        check(userId, String);

        if(!this.userId) {
            throw new Meteor.Error('User is not authorized.');
        }

        Accounts.setPassword(userId, "password1234");
    },
});
