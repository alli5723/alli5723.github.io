define({ "api": [
  {
    "type": "post",
    "url": "/events/{event_id}/dress-code",
    "title": "Create Dress Code Entity",
    "name": "CreateDressCode",
    "group": "DressCode",
    "description": "<p>Create a new DressCode entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"dressName\": \"DressCode name\",\n    \"color1\": \"Rose\",\n    \"color2\": \"Gold\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"dressName\": \"DressCode name\",\n     \"color1\": \"Rose\",\n     \"color2\": \"Gold\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-code"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/dress-code",
    "title": "Deletes all DressCodes",
    "name": "DeleteAllDressCode",
    "group": "DressCode",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted all dress-code associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-code"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/dress-code/{dress_code_id}",
    "title": "Delete Dress Code with ID",
    "name": "DeleteDressCode",
    "group": "DressCode",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "dress_code_id",
            "description": "<p>DressCode unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-code/{dress_code_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/dress-code/{dress_code_id}",
    "title": "Edit/Update Dress Code Entity.",
    "name": "EditDressCode",
    "group": "DressCode",
    "description": "<p>Modified DressCode entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "dress_code_id",
            "description": "<p>DressCode unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"dressName\": \"DressCode name\",\n    \"color1\": \"Rose\",\n    \"color2\": \"Gold\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"dressName\": \"DressCode name\",\n    \"color1\": \"Rose\",\n    \"color2\": \"Gold\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-code/{dress_code_id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/dress-code",
    "title": "List all Dress Code.",
    "name": "ListDressCodes",
    "group": "DressCode",
    "description": "<p>.Gets the all the DressCode entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"dressName\": \"DressCode name\",\n         \"color1\": \"Rose\",\n         \"color2\": \"Gold\"\n     },\n     ...\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"dressName\": \"DressCode name\",\n         \"color1\": \"Rose\",\n         \"color2\": \"Gold\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-code"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events",
    "title": "Create New Event",
    "name": "CreateEvent",
    "group": "Events",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n         \"extra\", \"extras\"\n     },\n     \"image\":{\n         \"name\": \"Image Name\"\n         \"url\": \"Image url\"\n     },\n     \"open\" : \"0\",\n     \"published\" : 0,\n     \"maxInvite\": 100,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"plannerId\": \"21regvjskdu85439w-qed\"\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{id}",
    "title": "Delete Event",
    "name": "DeleteEvent",
    "group": "Events",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{id}",
    "title": "Get Event details",
    "name": "GetEvent",
    "group": "Events",
    "description": "<p>The the event entity for the given ID.This endpoint should only be called with the Planner's authorization token</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100,\n     gifts:[\n         {\n             \"id\": \"5aaa41c8b854660004011b60\",\n             \"giftName\": \"First Planned Event\",\n             \"giftUrl\": \"http://hdvckpc.sdinv.com/pilskmvik/pojklmcvhj/pofdshk.png\"\n         }\n         ...\n     ],\n     programmes:[...],\n     meals:[...],\n     dressCodes:[...]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/list",
    "title": "List all events",
    "name": "ListEvent",
    "group": "Events",
    "description": "<p>This endpoint belongs to an admin user TBD</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n{\n     \"id\": \"5a9af36690326a363e622402\",\n\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted and editted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n },\n...\n{\n     \"id\": \"5a9af73990326a3743aa9f05\",\n\n     \"name\": \"Second Planned Event\",\n     \"details\": \"This is the second Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 1,\n     \"published\": 0,\n     \"maxInvite\": 100\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events",
    "title": "List all planner events",
    "name": "ListPlannerEvent",
    "group": "Events",
    "description": "<p>List all the events created by the authenticated user. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n     \"id\": \"5a9af36690326a363e622402\",\n\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted and editted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n },\n ...\n {\n     \"id\": \"5a9af73990326a3743aa9f05\",\n\n     \"name\": \"Second Planned Event\",\n     \"details\": \"This is the second Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 1,\n     \"published\": 0,\n     \"maxInvite\": 100\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events",
    "title": "Update Event details",
    "name": "UpdateEvent",
    "group": "Events",
    "description": "<p>This endpoint should only be called with the Planner's authorization token</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"image\":{\n         \"name\": \"Image Name\"\n         \"url\": \"Image url\"\n     },\n     \"open\" : \"0\",\n\n     \"published\" : \"0\",\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events/{event_id}/gifts",
    "title": "Create Gift Entity",
    "name": "CreateGift",
    "group": "Gift",
    "description": "<p>Create a new Gift entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"giftName\": \"Gift name\",\n     \"giftUrl\": \"Image url\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"giftName\": \"First Planned Event\",\n     \"giftUrl\": \"http://hdvckpc.sdinv.com/pilskmvik/pojklmcvhj/pofdshk.png\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/gifts",
    "title": "Deletes all Gifts",
    "name": "DeleteAllGift",
    "group": "Gift",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Successfully deleted all gifts associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/gifts/{gift_id}",
    "title": "Delete Gift with ID",
    "name": "DeleteGift",
    "group": "Gift",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "gift_id",
            "description": "<p>Gift unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts/{gift_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/gifts/{gift_id}",
    "title": "Edit/Update Gift Entity.",
    "name": "EditGift",
    "group": "Gift",
    "description": "<p>Modified Gift entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "gift_id",
            "description": "<p>Gift unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"giftName\": \"Image Name\",\n     \"giftUrl\": \"Image url\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"giftName\": \"First Planned Event\",\n     \"giftUrl\": \"This is the first Event I inserted into the Database\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts/{gift_id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/gifts",
    "title": "List all Gifts.",
    "name": "ListGifts",
    "group": "Gift",
    "description": "<p>.Gets the all the Gift entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n{\n     \"id\": \"5a9af36690326a363e622402\",\n     \"giftName\": \"gift1\",\n     \"giftUrl\": \"gift1 url\",\n },\n...\n{\n     \"id\": \"5a9af73990326a3743aa9f05\",\n     \"name\": \"gift2\",\n     \"details\": \"gift 2 url\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts"
      }
    ]
  },
  {
    "type": "post",
    "url": "/guests",
    "title": "Create New Guest",
    "name": "CreateGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"New\",\n    \"lastName\": \"York\",\n    \"phoneNumber\": \"56781061\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n      \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phoneNumber\": \"56781061\",\n     \"email\": \"olamide@gmail.com\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests"
      }
    ]
  },
  {
    "type": "put",
    "url": "/guest",
    "title": "Create New Guest",
    "name": "CreateGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n\"firstName\": \"New\",\n\"lastName\": \"York\",\n\"phoneNumber\": \"56781061\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n\"id\": \"5aaa4795b854660004011b61\",\n\"firstName\": \"New\",\n\"lastName\": \"York\",\n\"phoneNumber\": \"56781061\",\n\"email\": \"olamide@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guest"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/planner",
    "title": "Delete Guest",
    "name": "DeleteGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n\"message\": \"Successfully deleted User\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "get",
    "url": "/guest/list",
    "title": "List all guests",
    "name": "ListGuest",
    "group": "Guest",
    "description": "<p>This endpoint belongs to an admin user TBD</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>guest unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[{\n     \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phoneNumber\": \"56781061\",\n     \"email\": \"olamide@gmail.com\",\n     \"accountId\": null\n },\n ...\n{\n     \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phoneNumber\": \"56781061\",\n     \"email\": \"olamide@gmail.com\",\n     \"accountId\": null\n }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guest/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/guest/invitation",
    "title": "Guest Invitations",
    "name": "ListGuestInvites",
    "group": "Guest",
    "description": "<p>List all events a guest is invited to</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"guest\": {\n         \"id\": \"5a9af36690326a363e622402\",\n         \"firstName\": \"New\",\n         \"lastName\": \"York\",\n         \"phoneNumber\": \"56781061\",\n         \"email\": \"olamide@gmail.com\",\n         \"accountId\": null\n         },\n    \"invitations\": [\n     {\n         \"id\": \"5aaa50224ffaf845a7c5162d\",\n         \"name\": null,\n         \"phoneNumber\": null,\n         \"email\": null,\n         \"eventid\": \"5a9af36690326a363e622402\",\n         \"attending\": 0\n     },\n     {\n         \"id\": \"5aaa51764ffaf84b7438010f\",\n         \"name\": \"New Yorker\",\n         \"phoneNumber\": \"56781061\",\n         \"email\": \"olamide@gmail.com\",\n         \"eventid\": \"5a9af36690326a363e622402\",\n         \"attending\": 0\n     }\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guest/invitation"
      }
    ]
  },
  {
    "type": "get",
    "url": "/guest/{id}",
    "title": "View guest details",
    "name": "ViewGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>guest unique ID.</p>"
          }
        ]
      }
    },
    "description": "<p>This endpoint belongs to an admin user TBD</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phoneNumber\": \"56781061\",\n\"email\": \"olamide@gmail.com\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guest/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/invitation/events/{event_id}",
    "title": "Create New Invitation",
    "name": "CreateInvitation",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>guest name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>guest phone number(either phone or email should be provided for sending out notification).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>guest email address(either phone or email should be provided for sending out notification).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Event ID to invite guest to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[{\n   \"name\": \"New Yorker\",\n   \"phoneNumber\": \"56781061\",\n   \"email\": \"olamide@gmail.com\"\n   },\n   ...\n   {\n   \"name\": \"New Yorker\",\n   \"phoneNumber\": \"56781061\",\n   \"email\": \"olamide@gmail.com\"\n   }\n   ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa51764ffaf84b7438010f\",\n    \"name\": \"New Yorker\",\n    \"phoneNumber\": \"56781061\",\n    \"email\": \"olamide@gmail.com\",\n    \"eventid\": \"5a9af36690326a363e622402\",\n    \"attending\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitation/events/{event_id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/invitation/events",
    "title": "Create New Invitation",
    "name": "CreateInvitation",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>guest name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>guest phone number(either phone or email should be provided for sending out notification).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>guest email address(either phone or email should be provided for sending out notification).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Event ID to invite guest to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[{\n   \"name\": \"New Yorker\",\n   \"phoneNumber\": \"56781061\",\n   \"email\": \"olamide@gmail.com\",\n   \"eventid\": \"5a9af36690326a363e622402\"\n   },\n   ...\n   {\n   \"name\": \"New Yorker\",\n   \"phoneNumber\": \"56781061\",\n   \"email\": \"olamide@gmail.com\",\n   \"eventid\": \"5a9af36690326a363e622402\"\n   }\n   ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa51764ffaf84b7438010f\",\n    \"name\": \"New Yorker\",\n    \"phoneNumber\": \"56781061\",\n    \"email\": \"olamide@gmail.com\",\n    \"eventid\": \"5a9af36690326a363e622402\",\n    \"attending\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitation/events"
      }
    ]
  },
  {
    "type": "post",
    "url": "/invitation/rsvp",
    "title": "RSVP to an event",
    "name": "InvitationRSVP",
    "group": "Invitations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "description": "<p>This endpoint is to be used to signify a guests interest in attending or not attending an event. 0 Signifies not attending and 1 signifies attending.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"id\": \"5aaa51764ffaf84b7438010f\",\n           \"name\": \"New Yorker\",\n           \"phoneNumber\": \"56781061\",\n           \"email\": \"olamide@gmail.com\",\n           \"eventid\": \"5a9af36690326a363e622402\",\n           \"attending\": 1\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitation/rsvp"
      }
    ]
  },
  {
    "type": "get",
    "url": "/invitation/",
    "title": "All invitations",
    "name": "ViewAllInvitation",
    "group": "Invitations",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[{\n        \"id\": \"5aaa51764ffaf84b7438010f\",\n        \"name\": \"New Yorker\",\n        \"phoneNumber\": \"56781061\",\n        \"email\": \"olamide@gmail.com\",\n        \"eventid\": \"5a9af36690326a363e622402\",\n        \"attending\": 0\n        }\n        ...\n        {\n        \"id\": \"5aaa51764ffaf84b7438010f\",\n        \"name\": \"New Yorker\",\n        \"phoneNumber\": \"56781061\",\n        \"email\": \"olamide@gmail.com\",\n        \"eventid\": \"5a9af36690326a363e622402\",\n        \"attending\": 0\n        }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitation/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/invitation/list/event/{id}",
    "title": "All invitations for an event",
    "name": "ViewEventInvitation",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event IDs to view invitations for.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[{\n        \"id\": \"5aaa51764ffaf84b7438010f\",\n        \"name\": \"New Yorker\",\n        \"phoneNumber\": \"56781061\",\n        \"email\": \"olamide@gmail.com\",\n        \"eventid\": \"5a9af36690326a363e622402\",\n        \"attending\": 0\n        }\n        ...\n        {\n            \"id\": \"5aaa51764ffaf84b7438010f\",\n            \"name\": \"New Yorker\",\n            \"phoneNumber\": \"56781061\",\n            \"email\": \"olamide@gmail.com\",\n            \"eventid\": \"5a9af36690326a363e622402\",\n            \"attending\": 0\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitation/list/event/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/invitation/list/guest/{guest}",
    "title": "Single guest invitations",
    "name": "ViewGuestInvitation",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guest",
            "description": "<p>Guest phone or email to view invites.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[{\n            \"id\": \"5aaa51764ffaf84b7438010f\",\n            \"name\": \"New Yorker\",\n            \"phoneNumber\": \"56781061\",\n            \"email\": \"olamide@gmail.com\",\n            \"eventid\": \"5a9af36690326a363e622402\",\n            \"attending\": 0\n            }\n        ...\n        {\n        \"id\": \"5aaa51764ffaf84b7438010f\",\n        \"name\": \"New Yorker\",\n        \"phoneNumber\": \"56781061\",\n        \"email\": \"olamide@gmail.com\",\n        \"eventid\": \"5a9af36690326a363e622402\",\n        \"attending\": 0\n        }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitation/list/guest/{guest}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/invitation/view/{id}",
    "title": "View invitation details",
    "name": "ViewInvitation",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Invitation ID to view.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n            \"id\": \"5aaa51764ffaf84b7438010f\",\n            \"name\": \"New Yorker\",\n            \"phoneNumber\": \"56781061\",\n            \"email\": \"olamide@gmail.com\",\n            \"eventid\": \"5a9af36690326a363e622402\",\n            \"attending\": 0\n            }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitation/view/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events/{event_id}/meal",
    "title": "Create Meal Entity",
    "name": "CreateMeal",
    "group": "Meal",
    "description": "<p>Create a new Meal entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"type\": \"type\",\n    \"meal_name\": \"name\",\n    \"interest\": \"interest\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"type\": \"type\",\n     \"meal_name\": \"name\",\n     \"interest\": \"interest\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meal"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/meal",
    "title": "Deletes all Meal",
    "name": "DeleteAllMeal",
    "group": "Meal",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted all gifts associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meal"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/meal/{meal_id}",
    "title": "Delete Meal with ID",
    "name": "DeleteMeal",
    "group": "Meal",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "meal_id",
            "description": "<p>Meal unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event Meal with id {meal_id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meal/{meal_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/gifts/{meal_id}",
    "title": "Edit/Update Meal Entity.",
    "name": "EditMeal",
    "group": "Meal",
    "description": "<p>Modified Meal entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "meal_id",
            "description": "<p>Meal unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"type\": \"type\",\n    \"meal_name\": \"name\",\n    \"interest\": \"interest\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"giftName\": \"First Planned Event\",\n    \"giftUrl\": \"This is the first Event I inserted into the Database\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts/{meal_id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/meal",
    "title": "List all Meals.",
    "name": "ListMeal",
    "group": "Meal",
    "description": "<p>Gets the all the Meal entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"type\": \"type0\",\n         \"meal_name\": \"name0\",\n         \"interest\": \"interest0\"\n     },\n     ...\n     {\n         \"id\": \"5aaa41c8bwefffffd3434344\",\n         \"type\": \"type1\",\n         \"meal_name\": \"name1\",\n         \"interest\": \"interest1\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meal"
      }
    ]
  },
  {
    "type": "post",
    "url": "/planner",
    "title": "Create New Planner",
    "name": "CreatePlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"planner@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaf62b84ffaf87e05dada37\",\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"planner@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\",\n     \"roles\": [\n         {\n             name: \"ROLE_USER\"\n         },\n         ....\n         {\n             name: \"ROLE_PLANNER\"\n         }\n     ],\n     \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/planner",
    "title": "Delete Planner",
    "name": "DeletePlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n\"message\": \"Successfully deleted User\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "post",
    "url": "/planner",
    "title": "Update/Edit Planner",
    "name": "UpdatePlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n\"firstName\": \"first\",\n\"lastName\": \"last\",\n\"email\": \"planner@example.com\"\n\"phone\" : \"+1234567890\",\n\"description\" : \"Description\",\n\"address\" : \"Company Address\",\n\"companyName\" : \"Company Name\",\n\"dob\" : \"31-12-1990\",\n\"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n\"id\": \"5aaf62b84ffaf87e05dada37\",\n\"firstName\": \"first\",\n\"lastName\": \"last\",\n\"email\": \"planner@example.com\"\n\"phone\" : \"+1234567890\",\n\"description\" : \"Description\",\n\"address\" : \"Company Address\",\n\"companyName\" : \"Company Name\",\n\"dob\" : \"31-12-1990\",\n\"sex\" : \"F\",\n\"roles\": [\n{\nname: \"ROLE_USER\"\n},\n....\n{\nname: \"ROLE_PLANNER\"\n}\n],\n\"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "get",
    "url": "/planner",
    "title": "Get Planner details",
    "name": "ViewPlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ],
        "Custom Response Header": [
          {
            "group": "Custom Response Header",
            "type": "Number",
            "optional": false,
            "field": "X-mxEvent-profile-code",
            "description": "<p>Status code about the profile.<br> 110: Indicates that the user with the authorization token as has been registered on the platform to another user role. But not as an event planner. Also an HTTP Status of 204 is returned.<br> 120: Indicates the user has incomplete profile information an may require update.</p>"
          },
          {
            "group": "Custom Response Header",
            "type": "String",
            "optional": false,
            "field": "X-mxEvent-profile-msg",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaf62b84ffaf87e05dada37\",\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"planner@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\",\n     \"roles\": [\n         {\n             name: \"ROLE_USER\"\n         },\n         ....\n         {\n             name: \"ROLE_PLANNER\"\n         }\n     ],\n     \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events/{event_id}/programme",
    "title": "Create Programme Entity",
    "name": "CreateProgramme",
    "group": "Programme",
    "description": "<p>Create a new Programme entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"title\": \"Programme name\",\n    \"time\": \"10:15\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"title\": \"Programme name\",\n     \"time\": \"10:15\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programme"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/programme",
    "title": "Deletes all Programmes",
    "name": "DeleteAllProgramme",
    "group": "Programme",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted all programmes associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programme"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/programme/{programme_id}",
    "title": "Delete Programme with ID",
    "name": "DeleteProgramme",
    "group": "Programme",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "programme_id",
            "description": "<p>Programme unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programme/{programme_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/programme/{programme_id}",
    "title": "Edit/Update Programme Entity.",
    "name": "EditProgramme",
    "group": "Programme",
    "description": "<p>Modified Programme entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "programme_id",
            "description": "<p>Programme unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"title\": \"Cut Cake\",\n    \"time\": \"10:15\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"title\": \"Cut Cake\",\n    \"time\": \"10:15\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programme/{programme_id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/programme",
    "title": "List all Programmes.",
    "name": "ListProgrammes",
    "group": "Programme",
    "description": "<p>.Gets the all the Programme entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"title\": \"Programme name\",\n         \"time\": \"10:15\"\n     },\n     ...\n     {\n         \"id\": \"5a9af73990326a3743aa9f05\",\n         \"title\": \"Programme name\",\n         \"time\": \"10:15\"\n }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programme"
      }
    ]
  },
  {
    "type": "post",
    "url": "/vendor",
    "title": "Create New Vendor",
    "name": "CreateVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaf62b84ffaf87e05dada37\",\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\",\n    \"roles\": [\n        {\n            name: \"ROLE_USER\"\n        },\n        ....\n        {\n             name: \"ROLE_PLANNER\"\n        }\n    ],\n    \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendor"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/vendor",
    "title": "Delete Vendor",
    "name": "DeleteVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted User\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendor"
      }
    ]
  },
  {
    "type": "post",
    "url": "/vendor",
    "title": "Update/Edit Vendor",
    "name": "UpdateVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaf62b84ffaf87e05dada37\",\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\",\n    \"roles\": [\n        {\n            name: \"ROLE_USER\"\n        },\n        ....\n        {\n            name: \"ROLE_VENDOR\"\n        }\n    ],\n    \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendor"
      }
    ]
  },
  {
    "type": "get",
    "url": "/vendor",
    "title": "Get Vendor details",
    "name": "ViewVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ],
        "Custom Response Header": [
          {
            "group": "Custom Response Header",
            "type": "Number",
            "optional": false,
            "field": "X-mxEvent-profile-code",
            "description": "<p>Status code about the profile.<br> 110: Indicates that the user with the authorization token as has been registered on the platform to another user role. But not as an event vendor. Also an HTTP Status of 204 is returned.<br> 120: Indicates the user has incomplete profile information an may require update.</p>"
          },
          {
            "group": "Custom Response Header",
            "type": "String",
            "optional": false,
            "field": "X-mxEvent-profile-msg",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaf62b84ffaf87e05dada37\",\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"vendor@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\",\n     \"roles\": [\n         {\n             name: \"ROLE_USER\"\n         },\n         ...\n         {\n             name: \"ROLE_VENDOR\"\n         }\n     ],\n     \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/tmoro/Project/event_api/src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendor"
      }
    ]
  }
] });
