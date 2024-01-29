import { ProjectFetch } from "../../entities/Project";
import httpClient from "../HttpClient";

export async function getAll() {
  const { data } = await httpClient.get<ProjectFetch | null>("/projects");

  return data;
}
