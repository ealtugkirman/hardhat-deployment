async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", 0x8E5cE080cE334d94aB7e9bbB71B75b9207829a0C);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("BEP20Token"); //Replace with name of your smart contract
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
