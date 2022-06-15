const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const puniaViision = await hre.ethers.getContractFactory("PuniaViision");
  const PuniaViision = await puniaViision.deploy();

  await PuniaViision.deployed();

  console.log("$PUNIA has been deployed to:", PuniaViision.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });