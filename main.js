let BlockChain = require('./blockchain/blockChain');
let hash = require('object-hash');

let blockChain = new BlockChain();

let PROOF = 1560;

let validateProof = (proof) => {
  let guessHash = hash(proof);
  console.log('Hashing: ', guessHash);
  return guessHash === hash(PROOF);
}

let proofOrWork = () => {
  let proof = 0;

  while (true) {
    if (!validateProof(proof)){
      proof++;
    } else {
      break;
    }
  }

  return proof;
}

if (proofOrWork() == PROOF) {
  blockChain.addNewTransaction('Eduardo', 'John Doe', 200);
  let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
  blockChain.addNewBlock(prevHash);
}

console.log('Chain : ',blockChain.chain);