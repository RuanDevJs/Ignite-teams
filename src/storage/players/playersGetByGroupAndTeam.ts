import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGrupAndTeam(group: string, team: string) {
  const players = await playersGetByGroup(group);
  return players.filter(player => player.team === team);
}
