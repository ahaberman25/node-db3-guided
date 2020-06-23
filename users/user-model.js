const db = require("../data/config")

function findPostsByUserId(userId) {
    return db("posts as p")
        .innerJoin("users as u", "u.id", "p.user_id")
        .where("user_id", userId)
        .select("p.id", "p.contents", "u.username")
		
}

function findPostsByID(userId, postId) {
    return db("posts as p")
        .innerJoin("users as u", "u.id", "p.user_id")
        .where("p.user_id", userId)
        .where("p.id", postId)
        .first("p.id", "p.contents", "u.username")
}

module.exports = {
    findPostsByUserId,
    findPostsByID,
}