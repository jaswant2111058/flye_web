# GitHub Profile Viewer - React Project

Welcome to the GitHub Profile Viewer project! This React application allows users to fetch and display details of a GitHub profile, including repositories, using the GitHub API.

See Live [ fylejassi.com](https://fylejassi.onrender.com)

## Features

- Fetches and displays GitHub profile details.
- Lists repositories associated with the GitHub profile.

## Technologies Used

- React
- GitHub API (https://api.github.com/users)

## Setup Instructions

Follow these steps to set up the project locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/github-profile-viewer.git
cd github-profile-viewer
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed on your machine. Then, run:

```bash
npm install
```

### 3. Set up GitHub API Access (if more request need then usual)
If you want to more request per IP then follow step 3 and 4

To fetch data from the GitHub API, you need to set up a personal access token:

1. Go to your GitHub account settings.
2. Navigate to "Developer settings" > "Personal access tokens."
3. Generate a new token with the "read:user" and "user:email" scopes.
4. Copy the generated token.

### 4. Configure Environment Variables (if more request need then usual)

Create a `.env` file in the project root and add the following line:

```env
REACT_APP_GITHUB_TOKEN=your-github-token
```

Replace `your-github-token` with the personal access token you generated.

### 5. Run the Application

Now, you can run the React application locally:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the GitHub Profile Viewer.

## Additional Information

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Make sure to keep your personal access token confidential. Do not share it in public repositories.

Feel free to contribute, report issues, or provide feedback! Thank you for using the GitHub Profile Viewer.