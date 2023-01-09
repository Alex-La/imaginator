export const isAuthorized = (token: string) => token === "xyz123"

export function randIntExcep(min: number, max: number, exp: number[]) {
  let n: number
  while (true) {
    n = Math.floor(Math.random() * (max - min + 1)) + min
    if (exp.indexOf(n) < 0) return n
  }
}
