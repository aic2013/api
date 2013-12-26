define({ api: [
  {
    "type": "get",
    "url": "/config/connection_types",
    "title": "Available Connection Types",
    "name": "GetConnectionTypes",
    "group": "Configuration",
    "description": "Fetches all available connection types to use in other request.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "connection_types",
            "optional": false,
            "description": "List of connection types with."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"connection_types\": [\n    {\n      \"key\": \"follows\",\n      \"value\": \"Follows\",\n    }, {\n      \"key\": \"retweets\",\n      \"value\": \"Retweets\"\n    }\n  ]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/config.js"
  },
  {
    "type": "get",
    "url": "/users/suggestions",
    "title": "Topic Suggestions",
    "name": "GetUserSuggestions",
    "group": "Users",
    "description": "Fetches all users matching different filter parameters. This is for filtering by variety and influence (sorted by most influential users first)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "field": "connection_types",
            "defaultValue": "all",
            "optional": true,
            "description": "List of types to consider"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "min_range",
            "defaultValue": "0.0",
            "optional": true,
            "description": "Minimum topic variety"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "max_range",
            "defaultValue": "1.0",
            "optional": true,
            "description": "Maximum topic variety"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "page",
            "defaultValue": "0",
            "optional": true,
            "description": "Page for pagination"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "users",
            "optional": false,
            "description": "List of users matching criteria."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    X-Total: 42\n    X-Total-Pages: 5\n    X-Page: 3\n    X-Per-Page: 10\n    {\n      \"users\": [\n        {\n          \"id\": \"12345\",\n          \"favorite_count\": 12,\n          \"friend_count\": 32,\n          \"follower_count\": 18,\n          \"status_count\": 10,\n          \"listed_count\": 20,\n          \"name\": \"Max Mustermann\",\n          \"screenName\": \"maxm\",\n          \"language\": \"de\"\n        }\n      ]\n    }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/users.js"
  },
  {
    "type": "get",
    "url": "/users/topics",
    "title": "Topic Interests",
    "name": "GetUserTopics",
    "group": "Users",
    "description": "Fetches all users interested in a given topic or set of topics.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "field": "topics",
            "optional": false,
            "description": "List of topic names"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "depth",
            "defaultValue": "2",
            "optional": true,
            "description": "List of nodes between the topic and the user"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "page",
            "defaultValue": "0",
            "optional": true,
            "description": "Page for pagination"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "users",
            "optional": false,
            "description": "List of users matching criteria."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    X-Total: 42\n    X-Total-Pages: 5\n    X-Page: 3\n    X-Per-Page: 10\n    {\n      \"users\": [\n        {\n          \"id\": \"12345\",\n          \"favorite_count\": 12,\n          \"friend_count\": 32,\n          \"follower_count\": 18,\n          \"status_count\": 10,\n          \"listed_count\": 20,\n          \"name\": \"Max Mustermann\",\n          \"screenName\": \"maxm\",\n          \"language\": \"de\"\n        }\n      ]\n    }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/users.js"
  }
] });