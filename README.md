# Netflix-GPT

- create react app
- configured Tailwindcss
- Header
- Routing Of App
- Sign In/ Sign Up
- Form Validation
- useRef:

  - useState: For most use cases, useState is preferred due to its ability to handle real-time updates, validation, and control over the UI.
    You can easily validate inputs and provide real-time feedback as the user types.
  - useRef: When you want minimal re-renders and performance is a concern (for example, in very large forms or complex UIs), useRef can be used, but it's less common in typical form-handling scenarios.

- Authentication (using Firebase)

- Deployment of project using Google Firebase

  - install firebse CLI -> sudo npm install -g firebase-tools
  - Firebase Login -> firebase login
  - Initilize Firebase -> firebase init, then select first Hosting
    -What do you want to use as your public directory? build
    -? Configure as a single-page app (rewrite all urls to /index.html)? No
    -Set up automatic builds and deploys with GitHub? No
  - Deploy command -> firebase deploy

- Implemented Sign In user Api
- Created Redux store with userSlice

# Formik - to build forms in React easily
