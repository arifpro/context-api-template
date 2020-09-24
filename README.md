# context-api-template
This is a personal used template to understand the `context api`.

<br/><br/>

## Structure of the app

```
*
│
└─── public
|          |
|          └─── favicon.ico
|          └─── index.html
|          └─── manifest.json
│
└─── src
|       |
|       └─── components
|       |              |
|       |              └─── Parent1
|       |              |           |
|       |              |           └─── Child1P1
|       |              |           |            |
|       |              |           |            └─── SubChild1P1
|       |              |           |            |               |
|       |              |           |            |               └─── Sub1Child1P1.js
|       |              |           |            |               └─── Sub2Child1P1.js
|       |              |           |            |
|       |              |           |            └─── Child1P1.js
|       |              |           |
|       |              |           └─── Parent1.js
|       |              |
|       |              └─── Parent2
|       |                          |
|       |                          └─── Child1P2
|       |                          |            |
|       |                          |            └─── Child1P2.js
|       |                          |
|       |                          └─── Parent2.js
|       |
|       └─── img
|       |       |
|       |       └─── logo.jpg
|       |
|       └─── state
|       |         |
|       |         └─── reducer.js
|       |         └─── StateProvider.js
|       |
|       └─── App.js
|       └─── index.css
|       └─── index.js
│
└─── .gitignore
└─── LICENSE
└─── package.json
└─── README.md
└─── yarn.lock
```
