const TokenRegistryAddress = '0x9fbda871d559710256a2502a2517b794b482db40'
// RINKEBY
// const TokenRegistryAddress = '0x972f75a35f24b1a736e48e60a499f59ee62ce531'

const TokenRegistryABI = `[{"constant":false,"inputs":[{"name":"_distributeToken","type":"address"},{"name":"_reputationRegistry","type":"address"},{"name":"_projectRegistry","type":"address"},{"name":"_plcrVoting","type":"address"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_voteOption","type":"uint256"},{"name":"_salt","type":"uint256"}],"name":"voteReveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"}],"name":"refundProposer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"}],"name":"refundStaker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"burnTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_cost","type":"uint256"},{"name":"_stakingPeriod","type":"uint256"}],"name":"proposeProject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_tokens","type":"uint256"}],"name":"stakeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_tokens","type":"uint256"},{"name":"_secretHash","type":"bytes32"},{"name":"_prevPollID","type":"uint256"}],"name":"voteCommit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"refundVotingTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_tokens","type":"uint256"},{"name":"_validationState","type":"bool"}],"name":"validate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_destination","type":"address"},{"name":"_weiVal","type":"uint256"}],"name":"transferWeiReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_validator","type":"address"},{"name":"_reward","type":"uint256"}],"name":"rewardValidator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_tokens","type":"uint256"}],"name":"unstakeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"projectAddress","type":"address"},{"indexed":false,"name":"projectCost","type":"uint256"},{"indexed":false,"name":"proposerStake","type":"uint256"}],"name":"ProjectCreated","type":"event"}]`

const TokenRegistryBytecode = `0x606060405260146004556064600555341561001957600080fd5b613016806100286000396000f3006060604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306552ff3146100c757806311264a111461015d5780634012c2a2146101a85780635c352318146101e15780636d1b229d1461021a578063734501171461023d57806379a83f5a1461026957806380bf87ba146102ab5780639ab67673146103035780639e2550bd14610326578063b10bbaab14610373578063bdbff2f1146103b5578063e89a173e146103f7575b005b34156100d257600080fd5b61015b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610439565b005b341561016857600080fd5b6101a6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091908035906020019091905050610654565b005b34156101b357600080fd5b6101df600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506107eb565b005b34156101ec57600080fd5b610218600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610be7565b005b341561022557600080fd5b61023b6004808035906020019091905050610f51565b005b341561024857600080fd5b61026760048080359060200190919080359060200190919050506110e5565b005b341561027457600080fd5b6102a9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506115b9565b005b34156102b657600080fd5b610301600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803560001916906020019091908035906020019091905050611cb6565b005b341561030e57600080fd5b610324600480803590602001909190505061232b565b005b341561033157600080fd5b610371600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803515159060200190919050506124ef565b005b341561037e57600080fd5b6103b3600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061278d565b005b34156103c057600080fd5b6103f5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050612956565b005b341561040257600080fd5b610437600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050612d33565b005b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156104b8575060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b80156104fc57506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b801561054057506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561054b57600080fd5b83600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b11d8bb8600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9866000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561075657600080fd5b6102c65a03f1151561076757600080fd5b5050506040518051905084846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018381526020018281526020019350505050600060405180830381600087803b15156107d257600080fd5b6102c65a03f115156107e357600080fd5b505050505050565b6107f3612fc3565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fbe811a2846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15156108cf57600080fd5b6102c65a03f115156108e057600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff1614151561090c57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634012c2a2836000604051604001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506040805180830381600087803b15156109d057600080fd5b6102c65a03f115156109e157600080fd5b505050604051806040016040529050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663283760fa33836001600281101515610a3e57fe5b60200201516000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1515610ad057600080fd5b6102c65a03f11515610ae157600080fd5b5050506040518051905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9d46d74336064846000600281101515610b3c57fe5b6020020151811515610b4a57fe5b046040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515610bcf57600080fd5b6102c65a03f11515610be057600080fd5b5050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16635c352318336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610c8d57600080fd5b6102c65a03f11515610c9e57600080fd5b505050604051805190509150600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663283760fa33846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1515610d7757600080fd5b6102c65a03f11515610d8857600080fd5b5050506040518051905050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610e5757600080fd5b6102c65a03f11515610e6857600080fd5b505050604051805190509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635737619833836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515610f3857600080fd5b6102c65a03f11515610f4957600080fd5b505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561101757600080fd5b6102c65a03f1151561102857600080fd5b5050506040518051905011151561103e57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c68826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15156110ce57600080fd5b6102c65a03f115156110df57600080fd5b50505050565b600080600083421080156110f95750600085115b151561110457600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639d1b464a6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561119257600080fd5b6102c65a03f115156111a357600080fd5b50505060405180519050858115156111b757fe5b0492506001600454848115156111c957fe5b0401925082600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561129357600080fd5b6102c65a03f115156112a457600080fd5b50505060405180519050101515156112bb57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663065d5d0a6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561134957600080fd5b6102c65a03f1151561135a57600080fd5b505050604051805190508581151561136e57fe5b049150600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639e88fd8133856000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561143e57600080fd5b6102c65a03f1151561144f57600080fd5b5050506040518051905050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631dc82b0286848688336000604051602001526040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b151561153f57600080fd5b6102c65a03f1151561155057600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff167f142e33e8ca08dd930acf904a42633a4d41d34f15ccb4bd31bee212de71def2e78685604051808381526020018281526020019250505060405180910390a25050505050565b600080600080600080600087600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561168a57600080fd5b6102c65a03f1151561169b57600080fd5b50505060405180519050101515156116b257600080fd5b88965060018773ffffffffffffffffffffffffffffffffffffffff1663c19d93fb6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561172357600080fd5b6102c65a03f1151561173457600080fd5b5050506040518051905014151561174a57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639d1b464a6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156117d857600080fd5b6102c65a03f115156117e957600080fd5b5050506040518051905095508673ffffffffffffffffffffffffffffffffffffffff1663065d5d0a6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561186157600080fd5b6102c65a03f1151561187257600080fd5b505050604051805190508773ffffffffffffffffffffffffffffffffffffffff166312ff35bc6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156118e857600080fd5b6102c65a03f115156118f957600080fd5b5050506040518051905003945060008511151561191557600080fd5b878602935084841192508261192a578361192c565b845b9150826119395787611949565b6001868681151561194657fe5b04015b90508873ffffffffffffffffffffffffffffffffffffffff16630cff8e8f3383856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050600060405180830381600087803b15156119f557600080fd5b6102c65a03f11515611a0657600080fd5b505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9d46d748a846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515611acd57600080fd5b6102c65a03f11515611ade57600080fd5b505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639e88fd8133836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1515611bae57600080fd5b6102c65a03f11515611bbf57600080fd5b5050506040518051905050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a2f368e98a6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515611c8f57600080fd5b6102c65a03f11515611ca057600080fd5b5050506040518051905050505050505050505050565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515611d7d57600080fd5b6102c65a03f11515611d8e57600080fd5b50505060405180519050915060008214151515611daa57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636b2d95d4336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515611e6f57600080fd5b6102c65a03f11515611e8057600080fd5b50505060405180519050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b930294336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515611f4f57600080fd5b6102c65a03f11515611f6057600080fd5b505050604051805190500390508481101561222b57808503600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561203d57600080fd5b6102c65a03f1151561204e57600080fd5b505050604051805190501015151561206557600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639e88fd81338388036000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561213457600080fd5b6102c65a03f1151561214557600080fd5b5050506040518051905050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c5fa801b338388036040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561221657600080fd5b6102c65a03f1151561222757600080fd5b5050505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635e28fd5e33848789886040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001846000191660001916815260200183815260200182815260200195505050505050600060405180830381600087803b151561230f57600080fd5b6102c65a03f1151561232057600080fd5b505050505050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef348e4033836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15156123ef57600080fd5b6102c65a03f1151561240057600080fd5b505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663283760fa33836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156124d057600080fd5b6102c65a03f115156124e157600080fd5b505050604051805190505050565b81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15156125b557600080fd5b6102c65a03f115156125c657600080fd5b50505060405180519050101515156125dd57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639e88fd8133846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156126aa57600080fd5b6102c65a03f115156126bb57600080fd5b50505060405180519050508273ffffffffffffffffffffffffffffffffffffffff16639e2550bd3384846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001821515151581526020019350505050600060405180830381600087803b151561277457600080fd5b6102c65a03f1151561278557600080fd5b505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561285357600080fd5b6102c65a03f1151561286457600080fd5b5050506040518051905011151561287a57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9d46d7483836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561293e57600080fd5b6102c65a03f1151561294f57600080fd5b5050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515612a1c57600080fd5b6102c65a03f11515612a2d57600080fd5b50505060405180519050111515612a4357600080fd5b60073373ffffffffffffffffffffffffffffffffffffffff1663c19d93fb6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1515612ab157600080fd5b6102c65a03f11515612ac257600080fd5b505050604051805190501480612b5e575060093373ffffffffffffffffffffffffffffffffffffffff1663c19d93fb6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1515612b4157600080fd5b6102c65a03f11515612b5257600080fd5b50505060405180519050145b1515612b6957600080fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515612c2f57600080fd5b6102c65a03f11515612c4057600080fd5b5050506040518051905014151515612c5757600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9d46d7483836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515612d1b57600080fd5b6102c65a03f11515612d2c57600080fd5b5050505050565b60008273ffffffffffffffffffffffffffffffffffffffff1663e89a173e33846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1515612de057600080fd5b6102c65a03f11515612df157600080fd5b505050604051805190509050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9d46d7433836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515612ec157600080fd5b6102c65a03f11515612ed257600080fd5b505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663283760fa33846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1515612fa257600080fd5b6102c65a03f11515612fb357600080fd5b5050506040518051905050505050565b60408051908101604052806002905b6000815260200190600190039081612fd257905050905600a165627a7a72305820892af1caa406d79f66d74c0bc675827eb8c716bbe40c5ebe7530c610136c05450029`

module.exports = {
  TokenRegistryAddress,
  TokenRegistryABI,
  TokenRegistryBytecode
}
