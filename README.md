React – Project
Functional Guide
1. Project Overview

Application Name: Blog System

Application Category / Topic: Blog Management System

Main Purpose (2–4 sentences):

The Blog System is a web application developed with React that allows users to browse blog posts and access additional functionality after authentication. It provides a structured interface for displaying articles, viewing individual posts, and managing blog content. The application uses Supabase as its backend service for database access and user authentication. Its main purpose is to provide a simple and accessible platform for reading and managing blog content.

2. User Access & Permissions
Guest (Not Authenticated)

Available pages / routes:

/ – Home page displaying recent blog posts and a featured-post carousel.
/blog – Blog listing page.
/blog/$id – Individual blog post details.
/about – About page.
/contact – Contact page.
/login – Login page.

Public data shown:

Blog post titles.
Publication dates.
Topics or categories.
Post images and excerpts.
Full post content on the details page, depending on the implementation.
Authenticated User

Main sections / pages:

The public pages available to guests.
/new – Page for creating a new blog post.
/edit/$id – Page for editing an existing blog post.

Details pages:

Individual blog post pages identified by their IDs.
The editing page for an existing post.

Create / Edit / Delete actions:

Create a new blog post.
Edit an existing blog post.
Delete a blog post if the delete functionality is implemented and available in the user interface.

Content-management permissions should be restricted to authorized users according to the application's authentication and authorization logic.

3. Authentication & Session Handling
Authentication Flow
When the application loads, React renders the application and initializes the router and shared data providers.
The authentication provider checks the current Supabase authentication session.
The application determines whether the user is authenticated.
When login succeeds, Supabase returns an authenticated session and the application can access the user's identity and session information.
Authenticated users can access the functionality permitted by the application's route guards and authorization rules.
When the user logs out, the Supabase session is cleared and protected functionality should no longer be accessible.
Session Persistence
Supabase Auth is configured with persistSession: true.
Automatic token refreshing is enabled with autoRefreshToken: true.
detectSessionInUrl: true enables Supabase to detect supported authentication information in the URL.
The authentication state is shared through the application's AuthProvider and can be consumed by components that use its context.

Supabase manages session persistence, while React Context provides access to authentication state within the application.

4. Routing Structure
Route Guards Logic

The application uses TanStack Router for client-side navigation.

Public routes allow visitors to browse the blog and access general information. Routes for creating and editing posts are grouped under an authenticated route structure.

The application should verify authentication before allowing access to protected pages. Authorization checks should also ensure that users can perform only the content-management actions permitted to them.

Main Routes

The main top-level routes include:

/ – Home page.
/about – About page.
/contact – Contact page.
/login – Login page.
/blog – Blog listing page.
/blog/$id – Blog post details.
/new – Create-post page.
/edit/$id – Edit-post page.

The application also includes root-level error and not-found handling.

Nested & Parameterized Routes

The application uses nested routing to group content-management routes under an authenticated route structure.

Parameterized routes include:

/blog/$id – Identifies a specific blog post.
/edit/$id – Identifies the blog post being edited.

TanStack Router reads the route parameters and uses them to load the corresponding data.

5. List → Details Flow
Catalog / List Page

The home page displays recent blog posts and a featured-post carousel.

The blog listing can display multiple posts with information such as:

Post title.
Publication date.
Topic or category.
Image.
Excerpt or summary.

Posts are retrieved from Supabase through TanStack Query. The list is ordered by publication date in descending order, with the newest posts displayed first.

The home page shows up to five posts in its main list and provides a link to the full blog listing when more posts are available.

Details Page

Users navigate to an individual post by selecting a link associated with that post.

TanStack Router provides the navigation mechanism and the post ID through the parameterized URL.

The details page uses the ID to retrieve the relevant record from Supabase. The exact information displayed depends on the fields available in the database and the details-page implementation.

6. Data Source & Backend

Backend Type: Real backend service – Supabase.

The application uses:

Supabase Database for storing and retrieving blog posts.
Supabase Auth for user authentication and session management.
Supabase JavaScript client for communication between the React application and the backend.
TanStack Query for fetching, caching, and managing asynchronous server data.

The blog collection is stored in the blogs table in Supabase.

The frontend communicates with Supabase through the client configured in src/auth/client.js.

7. Data Operations (CRUD)
Create (POST)

Authenticated users can create new blog posts through the new-post page.

The form collects the relevant post information and submits it to the backend. A successful operation should make the new post available in the blog listing.

The exact fields and database insert implementation depend on the current post form and create-page code.

Read (GET)

Blog posts are retrieved from the blogs table in Supabase.

The postsQuery function in src/lib/blog.js retrieves all posts and orders them by created_at in descending order.

The postQuery(id) function retrieves an individual post using its ID.

TanStack Query manages the asynchronous requests and caches their results.

Update (PUT/PATCH)

Authenticated users can open the editing page for a specific post.

The post ID is supplied through the route parameter. The application retrieves the existing record, allows the user to modify its fields, and submits the changes to Supabase.

After a successful update, the relevant cached queries should be invalidated or updated so the interface displays the latest data.

Delete

If implemented, deleting a post should be available only to authorized users.

The application should identify the post by its ID, request deletion from Supabase, handle any returned errors, and update the relevant queries after successful deletion.

The availability and exact implementation of this operation must be verified in the current project code.

8. Forms & Validation
Forms Used

The application includes or is expected to include:

Login form.
New blog post form.
Edit blog post form.
Contact form, if implemented as a working form.
Validation Rules

The following are recommended validation rules for the blog forms. The actual rules should be confirmed against the implemented form components.

1. Title

Required.
Must not contain only whitespace.

2. Topic / Category

Required if the application requires every post to have a topic.
Must contain a valid category value.

3. Post Content

Required.
Must not contain only whitespace.

4. Email Address

Required for login or contact forms, as applicable.
Must follow a valid email format.

5. Password

Required for login.
Any registration-specific password-length or complexity rules should match the implemented authentication requirements.

Validation should prevent invalid form submissions and provide understandable feedback to users.

9. React-Specific Techniques
Hooks & Component Lifecycle

The application uses React functional components and hooks.

useState

Used in the home-page carousel to track the currently selected slide.

useEffect

Used to start and clean up the carousel's automatic slide timer.
The timer is cleared when the effect is cleaned up, such as when the component unmounts or its dependencies change.

useSuspenseQuery

Used to access blog data retrieved through TanStack Query.

useQueryClient

Can be used by content-management components to invalidate or update cached queries after data changes.

useRouter

Used by the root error component to invalidate the router and retry rendering after an error.
Context API

The application uses React Context through AuthProvider to share authentication state.

Components that need authentication information can consume the authentication context instead of independently maintaining their own session state.

QueryClientProvider makes the shared TanStack Query client available to components throughout the routed application.

Component Styling

The application uses CSS classes for layout and visual presentation. The provided components contain utility-style classes and Bootstrap-style classes, including carousel and button classes.

The exact styling system should be confirmed by inspecting the project's CSS files and installed styling dependencies.

10. Typical User Flow
A visitor opens the home page and browses recent blog posts.
The visitor selects a post to view its details.
If authentication is required for content management, the visitor opens the login page and signs in.
The authenticated user opens the new-post page or selects an existing post to edit it.
After submitting changes successfully, the user returns to the blog and views the updated content.
11. Error & Edge Case Handling
Authentication Errors

The application uses Supabase Auth to manage authentication sessions. Failed authentication attempts should display an appropriate message, and protected pages should prevent unauthorized access.

Network or Data Errors

TanStack Query manages asynchronous data retrieval. Errors thrown by Supabase requests can be propagated to the application's route error boundary.

The root route includes an error component that displays an error message and provides a retry action and a link to the home page.

Empty or Missing Data States

The home page displays a message when no blog posts are available.

The application should also handle missing post IDs, unavailable records, and failed data requests without attempting to render invalid data.

A not-found component displays a 404 message when a requested page does not exist or cannot be matched by the router.

The interface should provide clear feedback when an operation fails and should refresh or invalidate cached data after successful content changes.
