const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.createdAt = new Date().getTime();
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toLocaleTimeString();
            resolve();
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: NO POSTS AVAILABLE");
            }
        }, 1000);
    });
}

async function main() {
    await createPost({ title: "Post One", body: "This is Post One" });
    await updateLastUserActivityTime();
    await createPost({ title: "Post Two", body: "This is Post Two" });
    await updateLastUserActivityTime();
    console.log("Posts created:", posts);
    console.log("Last Activity Time:", lastActivityTime);

    try {
        const deletedPost = await deletePost();
        console.log("Deleted Post:", deletedPost);
    } catch (error) {
        console.error(error);
    }

    console.log("Posts created:", posts);
    console.log("Last Activity Time:", lastActivityTime);
}

main();
