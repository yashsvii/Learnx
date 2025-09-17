

# Project Description 📝
StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. <br/>
The platform is built using the **MERN stack**, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.


<h2>Explanation Video 📺 - [ https://www.youtube.com/watch?v=UP-kqPs4dJ8 ]</h2>
<hr/>

<h2>Live link 🌍📡 - [  [https://learn-x-phi.vercel.app/ ] ]</h2>
<hr/>






## Table of Contents


| Section                 | Description                                  |
|-------------------------|----------------------------------------------|
| [learnx Aim](#studynotion-aim-)        | 📚 Overview of Learnx's goals            |
| [Tech Stack](#tech-stack-)             | 💻🔧 Technologies used in the project         |
| [System Architecture](#system-architecture-)    | 🏰 Overview of the system architecture      |
| [Architecture Diagram](#architecture-diagram-)   | 🏗️ Diagram illustrating the architecture   |
| [Schema](#schema-)                  | 🗂 Explanation of data schemas used          |
| [React Hooks](#react-hooks-)            | 🎣 Overview of React Hooks utilized          |
| [React Library](#react-library-)         | ⚛️📚 Overview of React Libraries used        |
| [Screen Preview](#screen-preview-)         | 🖥️ Screen Preview        |






## Learnx Aim 📚 
<br/>
1️⃣ A seamless and interactive learning experience for students, making education more accessible and engaging.<br/>
2️⃣ A platform for instructors to showcase their expertise and connect with learners across the globe.<br/>

<br/>
<br/>



## Tech Stack 💻🔧 

## Frontend 🎨 : 
<code title="React.js"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/react%20ogo.png"></code>
<code title="Vite"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/Vitejs-logo.png"></code>
<code title="Redux.js"><img height="35" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/redux-logo.png"></code>
<code title="css"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/css%20logo.png"></code>
<code title="Tailwind css"><img height="35" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/tailwind%20css%20logo.png"></code>


## Backend ⚙️ :
<code title="Nodejs"><img height="50" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/nodejs-logo.png"></code>
<code title="Express"><img height="70" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/express%20logo.png"></code>


## Database 🛢️ :
<code title="Mongodb"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/mongodb%20logo.png"></code>

## Cloudinary Integration ☁️
<code title="Mongodb"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/cloudinary-logo.jpg"></code>

<hr/>




## System Architecture 🏰
<br/>
☝ The Learnx ed-tech platform consists of three main components:  <br/>
The front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

🎨 Front-end  <br/>
The front end of the platform is built using ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces also **Loading Skeleton**, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

⚙️ Back-end  <br/>
The back end of the platform is built using NodeJS and ExpressJS, which are popular frameworks for building scalable and robust server-side applications. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.

🛢️ Database  <br/>
The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data, which is useful for storing course content such as videos, images, and PDFs. The database stores the course content, user data, and other relevant information related to the platform.



## Architecture Diagram 🏗️
<br/>
Here is a high-level diagram that illustrates the architecture of the  Learnx ed-tech platform:
<img width='60%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Architecture%20Diagram.png' />


<hr/>

#### The front end of  Learnx has all the necessary pages that an ed-tech platform should have. Some of these pages are: 

For Students:
- **Homepage 🏠:** A brief introduction to the platform with links to the course list and user details and random background.
- **Course List 📚:** A list of all the courses available on the platform, along with their descriptions and ratings.
- **Wishlist 💡:** Displays all the courses that a student has added to their wishlist.
- **Cart Checkout 🛒 :** Allows the user to complete course purchases.
- **Course Content 🎓:** Presents the course content for a particular course, including videos and related material.
- **User Details 👤:** Provides details about the student's account, including their name, email, and other relevant information.
- **User Edit Details ✏️:** Allows students to edit their account details.

For Instructors:
- **Dashboard 📊:** Offers an overview of the instructor's courses, along with ratings and feedback for each course.
- **Insights 📈:** Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
- **Course Management Pages 🛠️:** Enables instructors to create, update, and delete courses, as well as manage course content and pricing.
- **View and Edit Profile Details 👀:** Allows instructors to view and edit their account details.



### Back-end ⚙️

The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

#### Back-end Features

- **User Authentication and Authorization 🔐:** Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
- **Course Management 🛠️:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
- **Payment Integration 💳:** Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.
- **Cloud-based Media Management ☁️ :** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
- **Markdown Formatting ✍️:** Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.



#### Data Models and Database Schema

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

- **Student Schema 🧑‍🎓:** Includes fields such as name, email, password, and course details for each student.
- **Instructor Schema 👩‍🏫:** Includes fields such as name, email, password, and course details for each instructor.
- **Course Schema 📚:** Includes fields such as course name, description, instructor details, and media content.


### Database 🛢️
The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.

## Schema 📋
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Schema.png' />

<hr/>


## React Hooks 🎣

Utilized several React hooks for efficient state management and dynamic behavior:

- `useState`
- `useEffect`
- `useDispatch`
- `useParams`
- `useSelector`
- `useLocation`
- `useNavigate`
- `useRef`
- `useForm`
- `useDropzone`
- `Custom-Hook`

<br/>

## 📚 **React Library**:

- 🚀 **Lazy Loading**: Enhance performance by lazily loading images using the react-lazy-load-image library.
- 📊 **Chart.js:**  Versatile charting library for creating interactive and visually appealing charts.
- 🎭**Framer Motion:**  Animation library for React, providing smooth and expressive motion.
- 📁 **React Dropzone:**  Drag-and-drop file uploader for React applications.
- 🍞 **React Hot Toast:**  Elegant and customizable toast notifications for React applications.
- 🔢 **React OTP Input:**  Input component for one-time password entry in React forms.
- 📊 **React Super Responsive Table:**  Highly responsive and feature-rich table component for React.
- 🔄 **Swiper:**  Modern touch slider for mobile and desktop browsers.
- 🖋️ **React Type Animation:**  Simple and configurable typing animation component for React.
- 🎥 **Video React:**  React-based video player for building rich multimedia experiences in web applications.



##  🖥️ Screen Preview :

# Random Home Page Background 🏠 
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/home3.png' />
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/home4.png' />

# About Page
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/about.png' />

# Contact Page
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/contact.png' />

# Forgot passwornd
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/forgot%20pass.png' />

# Dashboard
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/dashboard.png' />

# Edit Profile
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/edit%20profile.png' />


# Add Course
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/add%20course.png' />

# Edit Course
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/edit%20course.png' />

# Course Details 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/course%20details1.png' />

# Course Details 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/course%20details2.png' />

# Add Review
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/add%20review.png' />

# Cart1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/cart1.png' />




# Enrolled Courses 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/enrolled%20courses1.png' />

# Enrolled Courses 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/enrolled%20courses2.png' />

# Instructor Data 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/instrctor%20data1.png' />

# Instructor Data 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/instrctor%20data2.png' />

# My Courses 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/myCourses1.png' />

# My Courses 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/myCourses2.png' />

# View Courses 1
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/view%20course1.png' />

# View Courses 2
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/view%20course2.png' />


# Delete Account
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/delete%20account.png' />

# Footer
<img width='100%' src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/footer.png' />













 
