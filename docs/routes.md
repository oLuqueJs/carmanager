# API Routes Documentation

> Base URL: `http//:localhost:8080`

## Car Routes

### GET `/cars`
- **Description:** Fetch all cars
- **Auth Required:** No
- **Headers:**
    - `Content-Type: application/json`
- **Query Params:** No

#### Response: `200 OK`
```json
[
  {
    "id": "6397877e-cb32-4c51-b7e2-afd550e4d3f7",
    "brand": "Honda",
    "model": "s2000",
    "year": 2006,
    "color": "red",
    "price": 25000,
    "createdAt": "2025-06-17T14:43:37.160Z",
    "updatedAt": "2025-06-17T14:43:37.160Z"
  },
  ...
]
```

#### Errors:
- `500 Internal Server Error`
- `404 Not Found`

---

### GET `/car/:id`
- **Description:** Fetch a car by ID
- **Auth Required:** No
- **Headers:**
    - `Content-Type: application/json`
- **Params:**
    - `id`: string -- required

#### ✅ Response: `200 OK`
```json
{
    "id": "88fb5fd4-00a0-484d-8b47-0ae4b16a5857",
    "brand": "Volkswagen",
    "model": "Golf",
    "year": 2024,
    "color": "silver",
    "price": 23000,
    "createdAt": "2025-06-17T15:21:35.160Z",
    "updatedAt": "2025-06-17T15:21:35.160Z"
  }
```

#### Errors:
- `500 Internal Server Error`
- `404 Not Found`

---

### POST `/cars`
- **Description:** Create a new car
- **Auth Required:** No
- **Headers:**
    - `Content-Type: application/json`
#### Body:
```json
{
    "brand": "Toyota",
    "model": "Sprinter Trueno AE86",
    "year": 1987,
    "color": "white",
    "price": 12000
}
```
#### ✅ Response: `201 CREATED`
```json
{
	"id": "a1308226-6ab7-479f-becf-dbb0909af64b",
	"brand": "Toyota",
	"model": "Sprinter Trueno AE86",
	"year": 1987,
	"color": "white",
	"price": 12000,
	"createdAt": "2025-06-17T17:39:24.404Z",
	"updatedAt": "2025-06-17T17:39:24.405Z"
}
```

#### Errors:
- `500 Internal Server Error`
- `404 Not Found`

---

### PUT `/cars/:id`
- **Description:** Update an existing car by ID
- **Auth Required:** No
- **Headers:**
    - `Content-Type: application/json`
- **Params:**
    - `id`: string -- required
#### ✅ Response: `200 OK`
```json
{
	"id": "a1308226-6ab7-479f-becf-dbb0909af64b",
	"brand": "Toyota",
	"model": "Sprinter Trueno AE86",
	"year": 1987,
	"color": "white",
	"price": 12000,
	"createdAt": "2025-06-17T17:39:24.404Z",
	"updatedAt": "2025-06-17T17:39:24.405Z"
}
```

#### Errors:
- `500 Internal Server Error`
- `404 Not Found`

---

### DELETE `/cars/:id`
- **Description:** Delete an existing car by ID
- **Auth Required:** No
- **Headers:**
    - `Content-Type: application/json`
- **Params:**
    - `id`: string -- required
#### ✅ Response: `204 NO CONTENT`


#### Errors:
- `500 Internal Server Error`
- `404 Not Found`

---