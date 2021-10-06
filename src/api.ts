import axios from "axios";
import dotenv from "dotenv";
import { LaunchResponse } from "./types";

dotenv.config();

export const api = axios.create({
  baseURL: process.env.APP_BASE_URL,
});

function spaceXAPIRequest(request: string) {
  try {
    const response = api.get<LaunchResponse>(`/v4/launches/${request}`);
    return response;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

function spaceXAPIRequestList(request: string) {
  try {
    const response = api.get<LaunchResponse[]>(`/v4/launches/${request}`);
    return response;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export { spaceXAPIRequest, spaceXAPIRequestList };
