import { teams } from "./data";
import { Team } from "./types";

export function getAllTeams(): Team[] {
    return teams;
}

export function getTeamById(id: number): Team | undefined {
    return teams.find((team) => team.id === id);
}