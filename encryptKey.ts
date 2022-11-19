/* const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config(); */

import { ethers } from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!)

  const encryptedPrivateKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD!,
    process.env.PRIVATE_KEY!
  )
  fs.writeFileSync("./.encryptedKey.json", encryptedPrivateKey)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
