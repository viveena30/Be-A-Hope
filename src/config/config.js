var config = {
  contractAddress: "KT1XZefDhAGvGrDVouN9oYEuM3utnbK8Kxmw", 
  // (bilkul ni chal raha)
  
  // contractAddress: "KT1Rbj2tqk5gMP6cQDT6JG9U3NVpA5sFyLyK",
  //  (working perfectly fine)

  // contractAddress: "KT1HHiZzntTHgWWbHCEK9zehwEU5TTY9G1YY",
  //  (not working properly)
  get API_URL() {
    return `https://api.ithacanet.tzkt.io/v1/contracts/${this.contractAddress}`;
  },
  API_URL_Project: "https://api.ithacanet.tzkt.io/v1/contracts/",
};

export default config;
