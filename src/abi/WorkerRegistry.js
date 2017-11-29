export const WorkerRegistryAddress = '0xeec918d74c746167564401103096d45bbd494b74'
export const WorkerRegistryABI = `[{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"}],"name":"refundStaker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"},{"name":"_tokens","type":"uint256"},{"name":"_wei","type":"uint256"}],"name":"rewardWorker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"},{"name":"_tokens","type":"uint256"},{"name":"_secretHash","type":"bytes32"},{"name":"_prevPollID","type":"uint256"}],"name":"voteCommit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"},{"name":"_tokens","type":"uint256"}],"name":"burnTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"},{"name":"_voteOption","type":"uint256"},{"name":"_salt","type":"uint256"}],"name":"voteReveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalFreeWorkerTokenSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"refundVotingTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalWorkerTokenSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"}],"name":"completeTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenHolderRegistry","type":"address"},{"name":"_plcrVoting","type":"address"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"},{"name":"_tokens","type":"uint256"}],"name":"unstakeToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectId","type":"uint256"},{"name":"_tokens","type":"uint256"}],"name":"stakeToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]`
export const WorkerRegistryBytecode = `0x6060604052341561000f57600080fd5b61184f8061001e6000396000f3006060604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630d2efe3f146100d55780631aa3a008146100f85780632251daa91461010d57806364dbf873146101225780637d6bd25c146101575780638e81c64d146101995780638ee9ad32146101c5578063934383f3146101fa5780639ab6767314610223578063a1bad6e114610246578063e1e295581461026f578063f09a401614610292578063ffa7a4a3146102ea578063ffab4bd914610316575b600080fd5b34156100e057600080fd5b6100f66004808035906020019091905050610342565b005b341561010357600080fd5b61010b61051c565b005b341561011857600080fd5b6101206105b1565b005b341561012d57600080fd5b61015560048080359060200190919080359060200190919080359060200190919050506105b3565b005b341561016257600080fd5b610197600480803590602001909190803590602001909190803560001916906020019091908035906020019091905050610823565b005b34156101a457600080fd5b6101c36004808035906020019091908035906020019091905050610e41565b005b34156101d057600080fd5b6101f86004808035906020019091908035906020019091908035906020019091905050610f41565b005b341561020557600080fd5b61020d6110b2565b6040518082815260200191505060405180910390f35b341561022e57600080fd5b61024460048080359060200190919050506110b8565b005b341561025157600080fd5b6102596111f0565b6040518082815260200191505060405180910390f35b341561027a57600080fd5b61029060048080359060200190919050506111f6565b005b341561029d57600080fd5b6102e8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611328565b005b34156102f557600080fd5b6103146004808035906020019091908035906020019091905050611437565b005b341561032157600080fd5b6103406004808035906020019091908035906020019091905050611606565b005b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ca3e9b8846000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156103dd57600080fd5b6102c65a03f115156103ee57600080fd5b5050506040518051905091508173ffffffffffffffffffffffffffffffffffffffff16635c352318336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561049d57600080fd5b6102c65a03f115156104ae57600080fd5b5050506040518051905090508060046000828254019250508190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414151561056a57600080fd5b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ca3e9b8866000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561064e57600080fd5b6102c65a03f1151561065f57600080fd5b5050506040518051905091508173ffffffffffffffffffffffffffffffffffffffff1663e96f11a93386866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050602060405180830381600087803b151561071e57600080fd5b6102c65a03f1151561072f57600080fd5b505050604051805190509050600081111561081c576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630e11959533836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561080757600080fd5b6102c65a03f1151561081857600080fd5b5050505b5050505050565b60008060006001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411151561087657600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639facbedd886000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561090e57600080fd5b6102c65a03f1151561091f57600080fd5b5050506040518051905092506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166326d2ce676000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156109b857600080fd5b6102c65a03f115156109c957600080fd5b505050604051805190509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636b2d95d4336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610a9a57600080fd5b6102c65a03f11515610aab57600080fd5b50505060405180519050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166387c6bb9c336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610b7a57600080fd5b6102c65a03f11515610b8b57600080fd5b5050506040518051905003905085811015610d4057808603600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610bf15750818711155b8015610bfd5750600087115b1515610c0857600080fd5b85600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555085600460008282540392505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c5fa801b338389036040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515610d2b57600080fd5b6102c65a03f11515610d3c57600080fd5b5050505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635e28fd5e3385888a896040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001846000191660001916815260200183815260200182815260200195505050505050600060405180830381600087803b1515610e2457600080fd5b6102c65a03f11515610e3557600080fd5b50505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ca3e9b8846000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610ef057600080fd5b6102c65a03f11515610f0157600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff16141515610f2d57600080fd5b806003600082825403925050819055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639facbedd856000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610fdb57600080fd5b6102c65a03f11515610fec57600080fd5b505050604051805190509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b11d8bb88285856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018381526020018281526020019350505050600060405180830381600087803b151561109857600080fd5b6102c65a03f115156110a957600080fd5b50505050505050565b60045481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef348e4033836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561117c57600080fd5b6102c65a03f1151561118d57600080fd5b50505080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508060046000828254019250508190555050565b60035481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ca3e9b8836000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561129057600080fd5b6102c65a03f115156112a157600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff166343bb8db56040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561131057600080fd5b6102c65a03f1151561132157600080fd5b5050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156113a757506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15156113b257600080fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ca3e9b8846000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156114d157600080fd5b6102c65a03f115156114e257600080fd5b50505060405180519050905081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816004600082825401925050819055508073ffffffffffffffffffffffffffffffffffffffff1663fe12c92a83336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156115ed57600080fd5b6102c65a03f115156115fe57600080fd5b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ca3e9b8846000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156116a057600080fd5b6102c65a03f115156116b157600080fd5b50505060405180519050905081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561170b57600080fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816004600082825403925050819055508073ffffffffffffffffffffffffffffffffffffffff16630475722183336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b151561180a57600080fd5b6102c65a03f1151561181b57600080fd5b5050505050505600a165627a7a72305820350be6385bb366a22161091f0397a442097781438a2db431fbf80c479f1372720029`
