# UMS API Documentation

## Table of Contents
- <a href="#auth-module">Auth Module</a>
  - <a href="#register">Register User</a>
  - <a href="#login">Login User</a>
- <a href="#user-module">User Module</a>
  - <a href="#get-all-users">Get All Users</a>
  - <a href="#delete-user">Delete User</a>
  - <a href="#upload-profile-picture">Upload Profile Picture</a>
- <a href="#blog-module">Blog Module</a>
  - <a href="#get-all-blogs">Get All Blogs</a>
  - <a href="#create-blog">Create Blog</a>
  - <a href="#get-blog-details">Get Blog Details</a>

---

<h2 id="auth-module">📁 Auth Module</h2>

<h3 id="register">1. Register User</h3>

**Endpoint:** `POST {{base_url}}/auth/register`
<br>
**Description:** Registers a new user and sends a welcome email.

**Request Body** (`application/json`):
```json
{
    "userName": "mahmoud2",
    "email": "mahmoodjawad11112@gmail.com",
    "password": "123"
}
```

**Success Response (201 Created):**
```json
{
    "message": "user created successfully"
}
```

<br><hr><br>

<h3 id="login">2. Login User</h3>

**Endpoint:** `POST {{base_url}}/auth/login`
<br>
**Description:** Authenticates a user and returns a JWT token.

**Request Body** (`application/json`):
```json
{
    "email": "mahmoodjawad1111@gmail.com",
    "password": "123"
}
```

**Success Response (200 OK):**
```json
{
    "message": "login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5c... (JWT Token)"
}
```

**Error Responses:**
- `400 Bad Request`: Validation error or invalid password.
- `404 Not Found`: Invalid email.

<br><hr><br>

<h2 id="user-module">📁 User Module</h2>

<h3 id="get-all-users">1. Get All Users</h3>

**Endpoint:** `GET {{base_url}}/users`
<br>
**Description:** Retrieves a list of all registered users.

**Success Response (200 OK):**
```json
[
    {
        "id": 1,
        "username": "mahmoud2",
        "email": "mahmoodjawad11112@gmail.com"
    }
]
```

<br><hr><br>

<h3 id="delete-user">2. Delete User</h3>

**Endpoint:** `DELETE {{base_url}}/users/:id`
<br>
**Description:** Deletes a specific user by their ID. Requires authentication.

**Headers:**
| Key   | Value |
| ----- | ----- |
| token | `<JWT_TOKEN>` |

**URL Parameters:**
- `id`: The ID of the user to delete.

**Success Response (200 OK):**
```json
{
    "message": "user deleted successfully"
}
```

**Error Response (404 Not Found):**
```json
{
    "message": "user not found"
}
```

<br><hr><br>

<h3 id="upload-profile-picture">3. Upload Profile Picture</h3>

**Endpoint:** `PUT {{base_url}}/users/upload/:id`
<br>
**Description:** Uploads a profile picture for a targeted user.

**URL Parameters:**
- `id`: The ID of the user.

**Request Body (FormData):**
| Key   | Value   | Type |
| ----- | ------- | ---- |
| image | `<file>`| File |

**Success Response (200 OK):**<br>
*(Note: Route is defined, but logic is currently commented out in the controller)*
```json
{
    "message": "profile picture uploaded successfully",
    "profilePic": "https://secure_url_link..."
}
```

<br><hr><br>

<h2 id="blog-module">📁 Blog Module</h2>

<h3 id="get-all-blogs">1. Get All Blogs</h3>

**Endpoint:** `GET {{base_url}}/blogs/getAll/`
<br>
**Description:** Retrieves a list of all blogs, including their author details.

**Success Response (200 OK):**
```json
[
    {
        "id": 1,
        "title": "blog 1",
        "UserModel": {
            "id": 1,
            "username": "mahmoud2"
        }
    }
]
```

<br><hr><br>

<h3 id="create-blog">2. Create Blog</h3>

**Endpoint:** `POST {{base_url}}/blogs/create/`
<br>
**Description:** Creates a new blog post. Requires authentication.

**Headers:**
| Key   | Value |
| ----- | ----- |
| token | `<JWT_TOKEN>` |

**Request Body** (`application/json`):
```json
{
    "title": "blog 1",
    "description": "desc 1"
}
```

**Success Response (201 Created):**
```json
{
    "message": "blog created successfully",
    "blog": {
        "id": 1,
        "title": "blog 1",
        "description": "desc 1",
        "UserId": 1,
        "updatedAt": "2023-10-25T14:48:00.000Z",
        "createdAt": "2023-10-25T14:48:00.000Z"
    }
}
```

<br><hr><br>

<h3 id="get-blog-details">3. Get Blog Details</h3>

**Endpoint:** `GET {{base_url}}/blogs/getDetails/:id`
<br>
**Description:** Retrieves specific details of a blog by its ID.

**URL Parameters:**
- `id`: The ID of the blog.

**Success Response (200 OK):**
```json
{
    "message": "success",
    "blog": {
        "id": 1,
        "title": "blog 1",
        "description": "desc 1",
        "UserId": 1
    }
}
```

**Error Response (404 Not Found):**
```json
{
    "message": "blog not found"
}
```
