let hash = require('object-hash');
class BlockChain {
  constructor() {

    // Create the chain
    this.chain = [];

    // Transactions
    this.currency_transactions = [];

  }

  addNewBlock(prevHash) {
    let block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.currency_transactions,
      hash: null,
      prevHash: prevHash,
    };

    block.hash = hash(block);

    // Add to the chain

    this.chain.push(block);
    this.currency_transactions = []
    return block;
  }

  addNewTransaction(sender, recipient, amount) {
    this.currency_transactions.push({ sender, recipient, amount,})
  }

  lastBlock() {
    return this.chain.slice(-1)[0];
  }

  isEmpty() {
    return this.chain.length === 0;
  }
}

module.exports = BlockChain;