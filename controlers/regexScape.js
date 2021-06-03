export default function regexScape(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '') 
}
