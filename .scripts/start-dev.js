import { execSync } from "node:child_process";

const arg = process.argv[2];
if (!arg) {
  console.error("Informe o path do arquivo. Ex: npm run start:dev pages/index.vue");
  process.exit(1);
}

execSync(`qt link src/${arg} && qt dev src/${arg}`, { stdio: "inherit" });
