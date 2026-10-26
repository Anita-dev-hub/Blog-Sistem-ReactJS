# React – Project Functional Guide

## 1. Project Overview

**Application Name:** Blog System

**Application Category:** Blog Management System

The Blog System is a React web application that allows users to browse blog posts and access content-management functionality after authentication. It provides an interface for displaying articles, viewing individual posts, and managing blog content. Supabase is used for database access and user authentication.

## 2. User Access & Permissions

### Guest (Not Authenticated)

Public routes:

- `/` – Home page with recent posts and a featured-post carousel.
- `/blog` – Blog listing.
- `/blog/$id` – Individual blog post.
- `/about` – About page.
- `/contact` – Contact page.
- `/login` – Login page.

Guests can browse available blog posts, including titles, publication dates, categories, images, excerpts, and post content where available.

### Authenticated User

Additional routes:

- `/new` – Create a blog post.
- `/edit/$id` – Edit an existing blog post.

Authenticated users can create and edit posts. Deletion is available only if implemented in the application. Content-management operations should be protected by authentication and appropriate authorization rules.

## 3. Authentication & Session Handling

The application uses Supabase Auth to manage authentication and sessions.

The authentication provider checks the current session and shares authentication state through React Context.

The Supabase client is configured to support session persistence, automatic token refreshing, and session detection in the URL, where enabled in the client configuration.

Protected functionality should be accessible only to authenticated and authorized users.

## 4. Routing Structure

The application uses TanStack Router for client-side navigation.

Main routes:

- `/` – Home page.
- `/about` – About page.
- `/contact` – Contact page.
- `/login` – Login page.
- `/blog` – Blog listing.
- `/blog/$id` – Blog post details.
- `/new` – Create-post page.
- `/edit/$id` – Edit-post page.

Parameterized routes use post IDs to identify individual blog records. The application also includes error and not-found handling.

## 5. List → Details Flow

The home page displays recent blog posts and a featured-post carousel.

The blog listing can display:

- Post title.
- Publication date.
- Topic or category.
- Image.
- Excerpt or summary.

Posts are retrieved from Supabase using TanStack Query and ordered by creation date, newest first. The home page displays up to five posts in its main list when supported by the implementation.

Selecting a post opens its details page, where the application retrieves the relevant record using its ID.

## 6. Data Source & Backend

**Backend:** Supabase.

The application uses:

- Supabase Database to store and retrieve blog posts.
- Supabase Auth for authentication and session management.
- Supabase JavaScript client for backend communication.
- TanStack Query for asynchronous requests, caching, and server-state management.

The blog collection is stored in the `blogs` table.

The Supabase client is configured in `src/auth/client.js`, and blog data operations are defined in `src/lib/blog.js`, according to the project structure.

## 7. Data Operations (CRUD)

### Create

Authenticated users can create blog posts through the new-post page. Submitted data is sent to Supabase.

### Read

The application retrieves blog posts from the `blogs` table.

- `postsQuery` retrieves the list of posts.
- `postQuery(id)` retrieves an individual post.

TanStack Query manages requests and caches their results.

### Update

Authenticated users can edit an existing post using its ID. After a successful update, the relevant cached queries should be refreshed or invalidated.

### Delete

Deletion should be restricted to authorized users and implemented with appropriate error handling and query updates if the feature is available.

## 8. Forms & Validation

Forms include or may include:

- Login form.
- New blog post form.
- Edit blog post form.
- Contact form, if implemented.

Recommended validation rules:

- **Title:** Required and not whitespace-only.
- **Category:** Required if the application requires a category.
- **Post content:** Required and not whitespace-only.
- **Email:** Must use a valid email format where applicable.
- **Password:** Required for login.

Validation should prevent invalid submissions and provide understandable feedback.

## 9. React-Specific Techniques

### Hooks

- `useState` – Tracks the selected carousel slide.
- `useEffect` – Manages the carousel timer and cleans it up when necessary.
- `useSuspenseQuery` – Accesses blog data managed by TanStack Query.
- `useQueryClient` – Supports cache invalidation after data changes.
- `useRouter` – Supports router operations, including retrying after errors.

### Context API

`AuthProvider` shares authentication state across components.

`QueryClientProvider` makes the shared TanStack Query client available throughout the application.

### Component Styling

The application uses CSS classes for layout and presentation. The exact styling dependencies should be confirmed from the project's CSS files and `package.json`.

## 10. Typical User Flow

1. A visitor opens the home page and browses recent posts.
2. The visitor selects a post to view its details.
3. The visitor signs in to access content-management functionality.
4. The authenticated user creates a new post or edits an existing post.
5. After a successful operation, the updated content is displayed.

## 11. Error & Edge Case Handling

### Authentication Errors

Failed login attempts should display appropriate feedback. Protected pages should prevent unauthorized access.

### Network or Data Errors

TanStack Query manages asynchronous data requests. Errors should be handled by the application's error boundaries or relevant components.

### Empty or Missing Data

The application should handle an empty blog list, missing post IDs, unavailable records, and failed requests.

The not-found component should display a suitable message for unknown routes.

After successful content changes, relevant cached data should be updated or invalidated.
