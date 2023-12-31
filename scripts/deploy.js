const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "TokenMaster"
  const SYMBOL = "TM"

  const TokenMaster = await ethers.getContractFactory("DigiQuip")
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL)
  await tokenMaster.deployed()

  console.log(`Deployed TokenMaster Contract at: ${tokenMaster.address}\n`)

  const occasions = [
   {
    name: "Cricket Fever in Pune",
    cost: tokens(2),
    tickets: 50,
    date: "Apr 15",
    time: "7:00 PM IST",
    location: "Shivaji Cricket Stadium - Pune, India"
  },
  {
    name: "Pune Tech Meetup",
    cost: tokens(0.5),
    tickets: 0,
    date: "Apr 20",
    time: "6:30 PM IST",
    location: "Tech Hub - Pimpri-Chinchwad, India"
  },
  {
    name: "Yoga in the Park",
    cost: tokens(0.2),
    tickets: 75,
    date: "Apr 25",
    time: "8:00 AM IST",
    location: "Aundh Park - Pune, India"
  },
  {
    name: "Pune Food Festival",
    cost: tokens(1),
    tickets: 150,
    date: "May 5",
    time: "12:00 PM IST",
    location: "City Center - Pune, India"
  },
  {
    name: "Local Art Exhibition",
    cost: tokens(0.3),
    tickets: 80,
    date: "May 10",
    time: "4:00 PM IST",
    location: "Art Gallery - Pimpri-Chinchwad, India"
  }
  ]

  for (var i = 0; i < 5; i++) {
    const transaction = await tokenMaster.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});