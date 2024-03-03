<body>
    <h1>ReactJS Starter Projects</h1>
    Welcome to the ReactJS Starter Projects repository! This repository contains 25 beginner-level projects to help
    youget started with ReactJS development.Each project is
    designed to introduce fundamental concepts of ReactJS and provide hands-on experience building React applications.
    <h2>Project Structure</h2>
    <pre>
        <code>
            ├── public/
            ├── src/
            │   ├── components/
            │   │   ├── accordion/.
            │   │   ├── random-color/.
            │   │   ├── star-rating/.
            │   │   └── ...
            │   ├── assets/
            │   ├── App.css
            │   ├── index.css
            │   ├── main.jsx
            │   ├── App.jsx
            │   
            ├── README.md
            ├── index.html
            ├── LICENSE
            ├── package.json
            └── package-lock.json
        </code>
    </pre>
    <br>
    <h2>Projects Included</h2>
    <br>
    <ul>
        <details>
            <summary>Project 1 : Accordion
            </summary>
            <br>
            <p> <strong>Description:</strong> The Accordion component is a user interface element that allows users to
                expand and collapse content sections by clicking on the accordion titles.It provides both single and
                multiple selection modes, enabling users to select one or multiple items at a time.
                <br>
                <strong>Concepts:</strong>
                <br>
                <em>State Management:</em> Utilizing React's useState hook to manage the state of selected items
                (selected for single selection mode and multiple for multi-selection mode).
                <br>
                <em>Event Handling:</em> Handling click events on the accordion titles to toggle item selection and
                enable
                multi-selection mode.
                <br>
                <em>Conditional Rendering:</em> Dynamically rendering content sections based on the selected items and
                the current
                selection mode.
                <br>
                <em>Component Styling:</em> Applying CSS classes dynamically to style selected items and indicate their
                active state.
                <br>
                <em>Component Composition:</em> Structuring the Accordion component with reusable title and content
                sections,
                enhancing modularity and reusability.
            </p>
        </details>
        <details>
            <summary>Project 2 : Random Background Change
            </summary>
            <br>
            <p> <strong>Description:</strong> The project is a simple color generator built using React. It allows users
                to create random colors in either HEX or RGB format. Users can click buttons to switch between the color
                formats and generate random colors accordingly.
                <br>
                <strong>Concepts:</strong>The project utilizes React Hooks, such as `useState`, to manage state
                variables and control the behavior of the color generator. It employs event handling and dynamic styling
                to allow users to toggle between HEX and RGB color formats and generate random colors with visual
                feedback.
            </p>
        </details>
        <details>
            <summary>Project 3 : Star Rating
            </summary>
            <br>
            <p> <strong>Description:</strong>The StarRating component renders a star rating system where users can hover
                over stars to preview their rating before clicking to select. It dynamically updates star icons based on
                user interactions, offering a visually intuitive rating experience.
                <br>
                <strong>Concepts:</strong><em><br>State Management with React Hooks (useState):</em>The component
                employs useState to manage the current rating and hover states, enabling real-time updates to star
                appearances in response to user interactions.<br>
                <em>Event Handling:</em>Event handlers such as handleClick, handleMouseEnter, and handleMouseLeave are
                implemented to respond to user actions, facilitating the selection and preview of star ratings.
            </p>
        </details>
        <details>
            <summary>Project 4 : Image Slider/Image Slider With Style
            </summary>
            <br>
            <p> <strong>Description:</strong>The Image Slider app is a React component that displays a slideshow of
                images.
                It allows users to navigate through the images using left and right arrows or by clicking on thumbnails
                at
                the bottom.
                <br>
                <strong>Concepts:</strong><em><br>
                    Slideshow Navigation:</em> Users can move to the previous or next image using arrow buttons.<br>
                <em>Thumbnail Navigation:</em> Thumbnails below the slideshow provide an overview of all images.
                Clicking on
                a thumbnail switches to that image. <br>
                <em>Dynamic Styling:</em> Thumbnails and the main image change appearance to indicate the current
                selection.
                Responsive Design: The app adapts to different screen sizes for a consistent user experience.
            </p>
        </details>
        <details>
            <summary>Project 5 : Load More Products
            </summary>
            <br>
            <p> <strong>Description:</strong>TThe "Load More Data" app is a simple web application that fetches product
                data from an external API and displays it in a paginated manner. The app loads products in batches of 20
                and allows users to load more products dynamically by clicking on a "Load More Products" button.
                <br>
                <strong>Concepts:</strong><em><br>
                    State Management: </em> The app utilizes React's state management capabilities to keep track of
                various aspects of the application, such as loading status, fetched products, pagination count, and
                button disabling.<br>
                <em>Data Fetching:</em> It fetches product data from a remote API using the fetchProducts() function.
                This function is triggered when the component mounts and whenever the pagination count changes. The
                fetched data is then stored in the component's state. <br>
                <em>Pagination:</em> The app implements pagination logic by incrementing the pagination count each time
                the "Load More Products" button is clicked. This count is used to determine the offset for fetching the
                next batch of products from the API.
                <em>UI Rendering: </em> The fetched product data is rendered dynamically in the UI using JSX. Each
                product is displayed as a card containing an image and a title. The "Load More Products" button is
                conditionally disabled when the maximum number of products (100 in this case) is reached.
                <em>Loading Indicator:</em> During data fetching, a loading indicator is displayed to inform users that
                data is being retrieved from the server. Once the data is fetched and rendered, the loading indicator
                disappears.
            </p>
        </details>
    </ul>
    <br>
    <h2>Getting Started</h2>
    To get started with these projects, clone the repository to your local machine:
    <br>
    <pre>
    <code style="background-color: antiquewhite;">
      git clone https://github.com/your-username/ReactJS-StarterProjects.git
    </code>
</pre>
    <br>
    <p>Navigate to the project directory and select the project you want to work on.</p>
    <br>
    <h2>Contributing</h2>
    <p>If you have ideas for additional projects or improvements to existing projects, contributions are welcome! Feel
        free to open an issue to discuss your ideas or submit a pull request with your changes.</p>
    <br>
    <h2>License</h2>
    <p>This repository is licensed under the MIT License. See the MIT licence file for details.</p>

</body>