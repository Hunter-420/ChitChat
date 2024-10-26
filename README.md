# ChitChat - Real Time Messaging System

## Table of Contents
1. [Introduction](#introduction)
2. [Used Technologies](#used-technologies)
3. [Core Features](#core-features)
4. [Live Demo](#live-demo)
5. [Source Code](#source-code)
6. [Building Process Step By Step](#building-process)

## Introduction
ChitChat empowers users to create custom usernames and facilitates easy search functionalities, allowing users to initiate conversations effortlessly. The platform supports both private and group chats. The project utilizes a modern tech stack, including Next.js, Apollo GraphQL, Chakra UI, Node.js, MongoDB, and Prisma, to build a scalable and responsive application. Each technology has been carefully selected to ensure high performance and a seamless user experience. The implementation process follows a structured approach, guiding users from setting up the project to deploying a fully functional messaging system.

## Used Technologies
- Next.js
- Apollo GraphQL
- Chakra UI
- Node.js
- MongoDB
- Prisma

## Core Features
1. Users can create custom usernames.
2. Users can search for users to create conversations.
3. Private one-on-one conversations.
4. Group conversations with many participants.
5. Dot indication for which messages are opened or unread.
6. Users can leave or delete conversations.
7. Ability to edit participants in a particular conversation (either add or remove users).

## Live Demo
Check out the live demo of ChitChat [here](https://chitchat.khanalnischal.com.np).

## Source Code
Access the source code on GitHub: [github.com/hunter420/ChitChat](https://github.com/hunter420/ChitChat).

## Building Process Step By Step
1. **Setup Next.js Project**  
   - [x] Follow the [Next.js installation guide](https://nextjs.org/docs/getting-started/installation)  
   - [x] Create your Next.js application:
     ```bash
     npx create-next-app@latest chitchat
     cd chitchat
     ```

2. **Authentication Setup**  
   - [x] Install [NextAuth](https://authjs.dev/getting-started/installation)
     ```bash
     npm install next-auth@beta
     ```  
   - [x] Set up the [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=YOUR_PROJECT_ID) for OAuth 2.0 credentials.

3. **Prisma Adapter**  
   - [x] Install & Setup [Prisma](https://authjs.dev/getting-started/adapters/prisma)
     ```bash
     npm install @prisma/client @auth/prisma-adapter
     npm install prisma --save-dev
     npx prisma init
     ```  

4. **MongoDB Database**  
   - [x] Create your [MongoDB Database](https://www.mongodb.com/resources/products/fundamentals/create-database).  
   - [x] Update your `.env` file with the MongoDB connection string.

5. **User Management**  
   - [x] Implement user creation logic using NextAuth with the Google Provider.  

6. **Chakra UI Setup**  
   - [x] Install Chakra UI:
     ```bash
     npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
     ```  
   - [x] Wrap your application with `ChakraProvider` in `layout.tsx`.

7. **Custom Usernames**  
   - [x] Create components to allow users to set and update their usernames.  
   - [x] Use SSR with `getSession` for fetching user data.

8. **Apollo GraphQL Setup**  
   - [ ] Install Apollo Client:
     ```bash
     npm install @apollo/client graphql
     ```  
   - [ ] Set up Apollo Client in `_app.js` or a dedicated Apollo provider component.

9. **Backend Development**  
   - [ ] Create an Apollo Server using Node.js:
     ```bash
     npm install apollo-server-micro
     ```  

10. **GraphQL Schema Design**  
    - [ ] Define GraphQL schemas for users, conversations, and messages.  
    - [ ] Implement type definitions and resolvers for queries and mutations.

11. **Implement Queries and Mutations**  
    - [ ] Create necessary queries for fetching user data and conversations.  
    - [ ] Implement mutations for creating users, starting conversations, and sending messages.

12. **Real-time Messaging**  
    - [ ] Add WebSocket support for real-time messaging.  
    - [ ] Use subscriptions in Apollo to handle real-time updates for conversations and messages.

13. **Testing and Deployment**  
    - [ ] Test all functionalities locally.  
    - [ ] Deploy your application using Vercel or another hosting platform.

14. **Setup**  
    - [ ] Create a user-friendly setup guide for new users.

15. **Environment Variables**  
    - [ ] Document all necessary environment variables.

16. **Error Handling**  
    - [ ] Implement error handling for API requests.

17. **User Interface**  
    - [ ] Design an intuitive user interface with Chakra UI components.

18. **State Management**  
    - [ ] Set up state management with Apollo Client.

19. **Responsive Design**  
    - [ ] Ensure the application is responsive for mobile and desktop views.

20. **User Profile Page**  
    - [ ] Create a user profile page for managing account settings.

21. **Message History**  
    - [ ] Implement a feature to view message history.

22. **Notification System**  
    - [ ] Add a notification system for new messages and events.

23. **Search Functionality**  
    - [ ] Implement search functionality for conversations and messages.

24. **User Blocking**  
    - [ ] Allow users to block other users.

25. **Admin Panel**  
    - [ ] Create an admin panel for managing users and conversations.

26. **File Uploads**  
    - [ ] Implement functionality for file uploads in messages.

27. **Chatbots**  
    - [ ] Integrate chatbots for automated responses.

28. **Localization**  
    - [ ] Add support for multiple languages.

29. **Analytics**  
    - [ ] Integrate analytics for user engagement tracking.

30. **User Feedback**  
    - [ ] Implement a feedback system for users to report issues.

31. **Accessibility**  
    - [ ] Ensure the application is accessible to all users.

32. **Security Measures**  
    - [ ] Implement security measures to protect user data.

33. **Testing Framework**  
    - [ ] Set up a testing framework for unit and integration tests.

34. **CI/CD Pipeline**  
    - [ ] Create a CI/CD pipeline for automated deployments.

35. **Documentation**  
    - [ ] Write comprehensive documentation for developers.

36. **Community Support**  
    - [ ] Establish community support channels (e.g., Discord, Slack).

37. **Performance Optimization**  
    - [ ] Optimize performance for faster load times.

38. **Custom Themes**  
    - [ ] Allow users to select custom themes.

39. **Emoji Support**  
    - [ ] Integrate emoji support in messages.

40. **Read Receipts**  
    - [ ] Implement read receipts for messages.

41. **Pinned Messages**  
    - [ ] Allow users to pin important messages.

42. **Group Management**  
    - [ ] Enable group management features for admins.

43. **Tagging System**  
    - [ ] Implement a tagging system for conversations.

44. **Archiving Chats**  
    - [ ] Allow users to archive old chats.

45. **Data Export**  
    - [ ] Provide functionality for users to export their chat data.

46. **Two-Factor Authentication**  
    - [ ] Implement two-factor authentication for enhanced security.

47. **Activity Logs**  
    - [ ] Maintain activity logs for user actions.

48. **Integration with Other Services**  
    - [ ] Explore integrations with other messaging platforms.

49. **User Onboarding**  
    - [ ] Create an onboarding process for new users.

50. **Offline Mode**  
    - [ ] Allow users to access messages offline.

51. **Voice and Video Calls**  
    - [ ] Integrate voice and video call functionality.

52. **Custom Notifications**  
    - [ ] Allow users to customize notification preferences.

53. **Rate Limiting**  
    - [ ] Implement rate limiting to prevent abuse.

54. **Content Moderation**  
    - [ ] Set up content moderation tools for user-generated content.

55. **API Rate Limiting**  
    - [ ] Implement API rate limiting for external requests.

56. **Continuous Improvement**  
    - [ ] Establish a feedback loop for continuous feature improvements.
