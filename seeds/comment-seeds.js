const { Comment
} = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing work, well done!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, incredible work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is incredible news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "You guys are doing amazing work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Incredible tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Useful tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
