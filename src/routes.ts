import { Router } from "express";
import { spaceXAPIRequest, spaceXAPIRequestList } from "./api";
import { Launch, LaunchResponse } from "./types";

const router = Router();

function formatSingleResponse(data: LaunchResponse): Launch {
  return {
    id: data.id,
    success: data.success,
    details: data.details,
    name: data.name,
    date: data.date_utc,
  };
}

function formatResponse(data: LaunchResponse[]): Launch[] {
  return data.map((data) => ({
    id: data.id,
    success: data.success,
    details: data.details,
    name: data.name,
    date: data.date_utc,
  }));
}

const baseServerUrl = process.env.APP_SERVER_URL;

router.get(baseServerUrl + "/api/previous", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequest("latest");

  const launchResponse = formatSingleResponse(latestResponse);
  response.header("Access-Control-Allow-Origin", "*");
  return response.send(launchResponse);
});

router.get(baseServerUrl + "/api/next", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequest("next");

  const launchResponse = formatSingleResponse(latestResponse);
  response.header("Access-Control-Allow-Origin", "*");
  return response.send(launchResponse);
});

router.get(baseServerUrl + "/api/past", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequestList("past");

  const launchResponse = formatResponse(latestResponse);
  response.header("Access-Control-Allow-Origin", "*");
  return response.send(launchResponse);
});

router.get(baseServerUrl + "/api/upcoming", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequestList("upcoming");

  const launchResponse = formatResponse(latestResponse);
  response.header("Access-Control-Allow-Origin", "*");
  return response.send(launchResponse);
});

export { router };
