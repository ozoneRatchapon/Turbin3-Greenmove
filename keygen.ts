import { Keypair } from "@solana/web3.js";

// Generate a new keypair
let kp = Keypair.generate();

console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
// 4cfaZBHP12GVjKSe1c9zoME5MHffh4LJWkV25tGwj1vN
console.log(`To save your wallet, copy and paste the output of the following into a JSON file: [${kp.secretKey}]`);