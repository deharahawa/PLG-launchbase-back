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

router.get("/previous", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequest("latest");

  const launchResponse = formatSingleResponse(latestResponse);
  return response.send(launchResponse);
});

router.get("/next", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequest("next");

  const launchResponse = formatSingleResponse(latestResponse);
  return response.send(launchResponse);
});

router.get("/past", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequestList("past");

  const launchResponse = formatResponse(latestResponse);
  return response.send(launchResponse);
});

router.get("/upcoming", async (request, response) => {
  const { data: latestResponse } = await spaceXAPIRequestList("upcoming");

  const launchResponse = formatResponse(latestResponse);
  return response.send(launchResponse);
});

export { router };
