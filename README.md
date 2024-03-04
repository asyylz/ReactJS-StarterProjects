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
        <details>
            <summary>Project 6 : Tree View
            </summary>
            <br>
            <p> <strong>Description:</strong>
                The tree view component manages the display state of its child items using useState, allowing users to
                expand or collapse menu sections dynamically. It employs event handling to toggle the visibility of
                child items based on user interactions, enhancing navigation flexibility and user experience.
                <br>
                <strong>Concepts:</strong><br>
                <em>useState Hook:</em> Manages the state for controlling the visibility of child menu items, enabling
                dynamic expansion and collapse functionality.<br>
                <em>Toggle Visibility:</em>Allows users to toggle the visibility of child menu items by clicking on the
                expand/collapse icon, providing an intuitive user interface for navigation.<br>
                <em>Conditional Rendering:</em>Conditionally renders child menu items based on their visibility state,
                optimizing performance by rendering only the necessary components.<br>
                <em>Event Handling:</em> Utilizes event handling to capture user clicks on the expand/collapse icon and
                update the visibility state accordingly, ensuring responsive behavior.<br>
                <em>Flexbox Layout:</em>
                Utilizes flexbox layout to arrange menu item elements horizontally with a specified gap, enhancing the
                visual presentation and alignment of menu components.
            </p>
        </details>
        <details>
            <summary>Project 7 : QR Code Generator
            </summary>
            <br>
            <p> <strong>Description:</strong>The QR Code Generator is a simple React component that allows users to
                input text and generate a corresponding QR code. It utilizes the react-qr-code library to dynamically
                create QR codes based on user input.
                <br>
                <strong>Concepts:</strong><br>
                <em>useState Hook:</em> Manages state for input text (input) and generated QR code (qrCode),
                enabling dynamic UI updates.<br>
                <em>Input Handling:</em> Users input text in the provided field, updating the input state.<br>
                <em>QR Code Generation:</em> Upon clicking "Generate", the handleGenerateQrcode function sets the
                qrCode state based on the input.<br>
                <em>Conditional Rendering:</em> Disables the "Generate" button if the input field is empty or
                contains only whitespace.<br>
                <em>Displaying the QR Code:</em> Utilizes the QRCode component to display the generated QR code
                dynamically.
            </p>
        </details>
         <details>
            <summary>Project 8 : Light Dark Theme Toggle
            </summary>
            <br>
            <p> <strong>Description:</strong>The Light Dark Theme Toggle App is a React application that enables users
                to switch between light and dark themes for enhanced readability and customization. It leverages
                localstorage to persist the selected theme across sessions, providing a seamless and personalized user
                experience.<br>
                <strong>Concepts:</strong><br>
                <em>Theme Toggling:</em> Users can conveniently toggle between light and dark themes using a simple
                button click, allowing for quick customization of the application's appearance.<br>
                <em>Local Storage Management:</em> The app utilizes the useLocalStorage custom hook to manage theme
                preferences in local storage, ensuring that the chosen theme persists across browser sessions.<br>
                <em>User Interface Enhancement:</em> By offering theme customization options, the app enhances user
                experience by allowing users to tailor the application's appearance to their preferences, thereby
                improving readability and reducing eye strain.<br>
            </p>
        </details>
        <details>
            <summary>Project 9 : Custom Scroll Indicator
            </summary>
            <br>
            <p> <strong>Description:</strong>The Scroll Indicator component is designed to display a custom scroll indicator along with fetched data from a specified URL. It provides users with visual feedback on their scrolling progress within a webpage while also loading and displaying data asynchronously.<br>
            <strong>Concepts:</strong><br>
            <em>useState: </em>Manages state variables such as data, loading, errorMessage, and scrollPercentage.<br>
            <em>Asynchronous Data Fetching:</em>Uses the fetch API to retrieve data asynchronously from a specified URL.<br>
            <em>Scroll Event Handling:</em>Detects scroll events on the window and calculates the scroll percentage to update the progress bar. <br>
            <em>Conditional Rendering:</em>Conditionally renders loading messages, error messages, and fetched data based on the component's state.<br>
            <em> CSS Styling:</em> Utilizes CSS styles to create custom scroll indicators and layout for the component's UI elements.<br>
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
