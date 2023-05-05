function getUser(id) {
    if(id <= 0) {
        return null;
    }

    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}


// The optional chaining operator implicitly checks if the user is not null or undefined before attempting to access the user.profile

let user = getUser(2);
let profile = user ?. profile;


let user = getUser(-1);
let avatar = user ?. profile ?. avatar;


// Combining with the nullish coalescing operator
// If you want to assign a default profile to the user, you can combine the optional chaining operator (?.) with the nullish coalescing operator (??) as follows

let defaultProfile =  { default: '/default.png', language: 'English'};
let user = getUser(2);
let profile = user ?. profile ?? defaultProfile;



// Using optional chaining operator with function calls
let file = {
    read() {
        return 'file content';
    },
    write(content) {
        console.log(`Writing ${content} to file...`);
        return true;
    }
};

// If you call a method that doesn’t exist in the file object, you’ll get a TypeError
let compressedData = file.compress();

// However, if you use the optional chaining operator with the method call, the expression will return undefined instead of throwing an error
let compressedData = file.compress?.();


// The following illustrates the syntax for using the optional chaining operator with a function or method call
functionName ?. (args)


function getUser(id, callback) {
    let user = {
        id: id,
        username: 'admin'
    };

    callback ?. (user);

    return user;
}
