import { SkillFetch } from "../../entities/Skill";
import httpClient from "../HttpClient";

export async function getAll() {
  const { data } = await httpClient.get<SkillFetch | null>("/skills");

  return data;
}
