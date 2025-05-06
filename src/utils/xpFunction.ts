// Retorna o novo level e quanto XP sobra
export function calculateLevelAndXP(currentXP: number, currentLevel: number) {
  const base = 300
  const exp = 1.5
  let level = currentLevel
  let xp = currentXP

  while (xp >= xpToNextLevel(level, base, exp)) {
    xp -= xpToNextLevel(level, base, exp)
    level++
  }

  return { level, xp }
}

// Calcula o XP necessário para o próximo nível
export function xpToNextLevel(level: number, base: number, exp: number) {
  return Math.floor(base * Math.pow(level + 1, exp))
}
