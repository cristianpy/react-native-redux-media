import { API_IP, API_PORT, API_PROTOCOL } from '../constants';

const base64 = require('base-64');

const create = (token, name, description, images) => {
  console.log('token', token);
  console.log('name', name);
  console.log('desc', description);
  let headers = new Headers();
  headers.append("Authorization", "Basic " + base64.encode(token+":unused"));
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");  
  return fetch(`${API_PROTOCOL}://${API_IP}:${API_PORT}/api/projects`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: name,
        description: description,
        images: images      
      })
  });
}

const getProjects = (token) => {
  let headers = new Headers();
  headers.append("Authorization", "Basic " + base64.encode(token+":unused"));
  return fetch(`${API_PROTOCOL}://${API_IP}:${API_PORT}/api/projects`, {
      headers: headers
  });
}

export const projectService = {
  create,
  getProjects
}