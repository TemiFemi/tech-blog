const { Post
} = require('../models');

const postData = [
    {
        title: "FortOver is the future!",
        post_content: "Provides stats from video games “Fortnite” and Overwatch”. Users are able to compare stats with friends, as well as search stats for professional players as well.",
        user_id: 3
    },
    {
        title: "Marvelizer goes public!",
        post_content: "The MARVELizer is a web app that enables you to search for a Marvel character, view information and Giphys related to the character, and save favorite Giphys. The search feature queries the Marvel API for a character’s description and a thumbnail, and it uses the character name to query the Giphy API for the Giphys related to the character.",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2
    },
    {
        title: "Activity Selector!",
        post_content: "or our first group project, we were given the task of collaboratively creating an interactive webpage that will call on multiple APIs to create a functional, useful web application. Requirements were that we use a framework other than Bootstrap, deliver a polished UI, and be intuitive for the user to quickly understand the purpose of the site itself.",
        user_id: 5
    },
    {
        title: "Hoppeator!",
        post_content: "The Hoppeator is your one-stop shop to explore the world of beer. Our homepage features a short history of beer and we have pages to learn about the types of beer, search breweries and plan your beer crawl. You can save your favorite breweries and access them using the 'Favorites' page.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;