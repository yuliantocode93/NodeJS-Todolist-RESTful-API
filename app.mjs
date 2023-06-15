// import { application, json, response } from "express";
// import http, { Server, request } from "http";
// import {TodolistService} from "./todolist-service.mjs"

// const service = new TodolistService();
// const server = http.createServer((request, response) => {
    
//     response.setHeader("Content-Type,"application/json");

//     if(request.method === "GET"){
//         service.getTodolist(request, response);
//     }
// });

// server.listen(3000);






import express from "express";
import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const app = express();
const service = new TodolistService();
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "GET") {
    service.getTodolist(request, response);
  } else if (request.method === "POST") {
    service.createTodo(request, response);
  } else if (request.method === "PUT"){
    service.updateTodo(request, response);
  } else if ( request.method === "DELETE"){
    service.deleteTodo(request, response);
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

