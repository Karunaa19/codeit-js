
function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({
                    userId: 1,
                    name: 'John Doe',
                    age: 30,
                    email: 'john.doe@example.com'
                });
            } else {
                reject('User profile not found');
            }
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { postId: 1, content: 'Hello World!' },
                    { postId: 2, content: 'JavaScript is awesome!' }
                ]);
            } else {
                reject('User posts not found');
            }
        }, 1000);
    });
}


function getUserData(userId) {
    return Promise.all([fetchUserProfile(userId), fetchUserPosts(userId)])
        .then(([profile, posts]) => ({
            ...profile,
            posts: posts
        }))
        .catch(error => {
            throw new Error(error);
        });
}


function fetchUserData() {
    const userId = 1;
    const output = document.getElementById('output');
    output.textContent = 'Fetching data...';

    getUserData(userId)
        .then(data => {
            output.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            output.textContent = `Error: ${error.message}`;
        });
}
