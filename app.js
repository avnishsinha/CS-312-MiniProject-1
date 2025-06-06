// CS-312 MiniProject-1 - Blog Web Application
// Developed by: Avnish Sinha

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize express app
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
// Set the views directory path
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data (body-parser)
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files like CSS from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for posts (since no database is used)
let posts = [];
let categories = ["Tech", "Lifestyle", "Education"]; // Bonus feature categories

// Home route - Displays all posts, with optional category filtering
app.get('/', (req, res) => {
    const selectedCategory = req.query.category; // get category from query param if any
    let filteredPosts = posts;
    
    // Filter posts if a category is selected
    if (selectedCategory) {
        filteredPosts = posts.filter(post => post.category === selectedCategory);
    }

    // Render home.ejs and pass required data
    res.render('home', { posts: filteredPosts, categories, selectedCategory });
});

// Route to render the form for creating a new post
app.get('/new', (req, res) => {
    res.render('new', { categories });
});

// Handle submission of new post form
app.post('/new', (req, res) => {
    const { title, content, author, category } = req.body;

    // Create a new post object
    const newPost = {
        id: Date.now().toString(),  // generate unique ID using timestamp
        title,
        content,
        author,
        category,
        createdAt: new Date().toLocaleString()  // store current date/time
    };

    posts.push(newPost); // add post to in-memory array

    res.redirect('/'); // redirect back to homepage after post creation
});

// Route to render edit form for an existing post
app.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.redirect('/'); // if post not found, redirect home
    res.render('edit', { post, categories });
});

// Handle submission of edited post
app.post('/edit/:id', (req, res) => {
    const { title, content, author, category } = req.body;
    const postIndex = posts.findIndex(p => p.id === req.params.id);

    if (postIndex === -1) return res.redirect('/');

    // Update the post at the found index
    posts[postIndex] = {
        ...posts[postIndex],  // retain existing fields like createdAt, id
        title,
        content,
        author,
        category
    };

    res.redirect('/');
});

// Handle deletion of a post
app.post('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id); // remove the post
    res.redirect('/');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
