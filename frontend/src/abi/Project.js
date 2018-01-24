const ProjectABI = `[{"constant":true,"inputs":[],"name":"weiBal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_staker","type":"address"},{"name":"_tokens","type":"uint256"},{"name":"_weiValue","type":"uint256"}],"name":"stakeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"weiCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextDeadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reputationCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalReputationStaked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_staker","type":"address"},{"name":"_reputation","type":"uint256"}],"name":"unstakeReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"taskRewards","outputs":[{"name":"weiReward","type":"uint256"},{"name":"reputationReward","type":"uint256"},{"name":"claimer","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timesUp","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_staker","type":"address"}],"name":"refundStaker","outputs":[{"name":"_refund","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_staker","type":"address"}],"name":"isStaker","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_staker","type":"address"},{"name":"_reputation","type":"uint256"}],"name":"stakeReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"calculateWeightOfAddress","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"stakedReputationBalances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_staker","type":"address"},{"name":"_tokens","type":"uint256"},{"name":"_validationState","type":"bool"}],"name":"validate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalTokensStaked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint256"},{"name":"_nextDeadline","type":"uint256"}],"name":"setState","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_taskHash","type":"bytes32"},{"name":"_weiVal","type":"uint256"},{"name":"_reputationVal","type":"uint256"},{"name":"_claimer","type":"address"}],"name":"claimTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_taskHash","type":"bytes32"},{"name":"_claimer","type":"address"}],"name":"claimTaskReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"isPassed","type":"bool"}],"name":"setValidationState","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"opposingValidator","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"stakedTokenBalances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalValidateNegative","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isStaked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_staker","type":"address"},{"name":"_tokens","type":"uint256"}],"name":"unstakeTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalValidateAffirmative","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"validators","outputs":[{"name":"status","type":"uint256"},{"name":"stake","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"validateReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_cost","type":"uint256"},{"name":"_costProportion","type":"uint256"},{"name":"_stakingPeriod","type":"uint256"},{"name":"_reputationRegistry","type":"address"},{"name":"_tokenRegistry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"staker","type":"address"},{"indexed":false,"name":"refund","type":"uint256"}],"name":"tokenRefund","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"staker","type":"address"},{"indexed":false,"name":"refund","type":"uint256"}],"name":"reputationRefund","type":"event"}]`

const ProjectBytecode = `0x60606040526001600c60006101000a81548160ff021916908315150217905550341561002a57600080fd5b60405160a08061213f83398101604052808051906020019091908051906020019091908051906020019091908051906020019091908051906020019091905050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600681905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663027c89776000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156101c157600080fd5b6102c65a03f115156101d257600080fd5b5050506040518051905084026007819055506001600381905550826005819055505050505050611f38806102076000396000f300606060405260043610610175576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063065d5d0a146101775780630cff8e8f146101a057806312ff35bc146101eb578063205179841461021457806336df7df71461023d5780633a50fb7c146102665780633c79fe741461028f5780633d230451146102d15780635bec71db146103465780635c352318146103735780636f1e8533146103c05780637f306ba1146104115780638be1c84e146104535780639b6856e6146104a05780639e2550bd146104ed578063b0e31b2d1461053a578063b9d77bfc14610563578063bb38bbb81461058f578063c19d93fb146105e7578063cccee33514610610578063d91ce99c1461066a578063da16fe8d1461068f578063dca62c60146106bc578063e24e8a6a14610709578063e3323aba14610732578063e89a173e1461075f578063ed9bbff5146107b5578063fa52c7d8146107de578063fb92bdd814610832575b005b341561018257600080fd5b61018a61085b565b6040518082815260200191505060405180910390f35b34156101ab57600080fd5b6101e9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091908035906020019091905050610861565b005b34156101f657600080fd5b6101fe610941565b6040518082815260200191505060405180910390f35b341561021f57600080fd5b610227610947565b6040518082815260200191505060405180910390f35b341561024857600080fd5b61025061094d565b6040518082815260200191505060405180910390f35b341561027157600080fd5b610279610953565b6040518082815260200191505060405180910390f35b341561029a57600080fd5b6102cf600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610959565b005b34156102dc57600080fd5b6102f6600480803560001916906020019091905050610b02565b604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b341561035157600080fd5b610359610b4c565b604051808215151515815260200191505060405180910390f35b341561037e57600080fd5b6103aa600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b58565b6040518082815260200191505060405180910390f35b34156103cb57600080fd5b6103f7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610cfc565b604051808215151515815260200191505060405180910390f35b341561041c57600080fd5b610451600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d91565b005b341561045e57600080fd5b61048a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eef565b6040518082815260200191505060405180910390f35b34156104ab57600080fd5b6104d7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611006565b6040518082815260200191505060405180910390f35b34156104f857600080fd5b610538600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091908035151590602001909190505061101e565b005b341561054557600080fd5b61054d6111b9565b6040518082815260200191505060405180910390f35b341561056e57600080fd5b61058d60048080359060200190919080359060200190919050506111bf565b005b341561059a57600080fd5b6105e560048080356000191690602001909190803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061122d565b005b34156105f257600080fd5b6105fa61137a565b6040518082815260200191505060405180910390f35b341561061b57600080fd5b61065460048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611380565b6040518082815260200191505060405180910390f35b341561067557600080fd5b61068d600480803515159060200190919050506115d3565b005b341561069a57600080fd5b6106a261168f565b604051808215151515815260200191505060405180910390f35b34156106c757600080fd5b6106f3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506116a2565b6040518082815260200191505060405180910390f35b341561071457600080fd5b61071c6116ba565b6040518082815260200191505060405180910390f35b341561073d57600080fd5b6107456116c0565b604051808215151515815260200191505060405180910390f35b341561076a57600080fd5b61079f600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506116df565b6040518082815260200191505060405180910390f35b34156107c057600080fd5b6107c86118b4565b6040518082815260200191505060405180910390f35b34156107e957600080fd5b610815600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118ba565b604051808381526020018281526020019250505060405180910390f35b341561083d57600080fd5b6108456118de565b6040518082815260200191505060405180910390f35b60045481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108bc57600080fd5b6001806003541415156108ce57600080fd5b82600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550826008600082825401925050819055508160046000828254019250508190555050505050565b60065481565b60055481565b60075481565b60095481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109b557600080fd5b6001806003541415156109c757600080fd5b600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403108015610a95575081600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b1515610aa057600080fd5b81600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600960008282540392505081905550505050565b60116020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b60006005544211905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610c025750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610c0d57600080fd5b60076003541480610c2057506008600354145b1515610c2b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610c9057610c89826118e4565b9050610cf7565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610cf657610cef826119fc565b9050610cf7565b5b919050565b600080600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541180610d8a57506000600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054115b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ded57600080fd5b600180600354141515610dff57600080fd5b600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401111515610e8d57600080fd5b81600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600960008282540192505081905550505050565b6000806000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f5057600080fd5b610f9d600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546009546002611b07565b9150610fec600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546008546002611b07565b90506002818301811515610ffc57fe5b0492505050919050565b600b6020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561107957600080fd5b60058060035414151561108b57600080fd5b60008311151561109a57600080fd5b6001151582151514156111285760408051908101604052806001815260200184815250600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015590505082600f600082825401925050819055506111b3565b6000151582151514156111b25760408051908101604052806000815260200184815250600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010155905050826010600082825401925050819055505b5b50505050565b60085481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561121b57600080fd5b81600381905550806005819055505050565b600060048060035414151561124157600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561129d57600080fd5b600060116000886000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561130057600080fd5b6011600087600019166000191681526020019081526020016000209150828260020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848260000181905550838260010181905550505050505050565b60035481565b60008060008060078060035414151561139857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113f457600080fd5b8573ffffffffffffffffffffffffffffffffffffffff1660116000896000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561146c57600080fd5b6011600088600019166000191681526020019081526020016000209350836000015492508360010154915060008460020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008460000181905550600084600101819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b10bbaab87856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15156115b257600080fd5b6102c65a03f115156115c357600080fd5b5050508194505050505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561162f57600080fd5b801561164b57601054600d819055506000601081905550611665565b611653611b3a565b600f54600d819055506000600f819055505b6000600d54141561168c576000600c60006101000a81548160ff0219169083151502179055505b50565b600c60009054906101000a900460ff1681565b600a6020528060005260406000206000915090505481565b60105481565b6000600454600654111580156116da575060095460075411155b905090565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173d57600080fd5b60018060035414151561174f57600080fd5b600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484600a60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540310801561181d575083600a60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b151561182857600080fd5b6004546008548581151561183857fe5b0402915083600a60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508360086000828254039250508190555081600460008282540392505081905550819250505092915050565b600f5481565b600e6020528060005260406000206000915090508060000154908060010154905082565b600d5481565b600080600060085414151561197b57600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b61198483611c97565b810190507f911db51ed2e298250d30776745397b1001763f5bf87e73dddcf540c7142989528382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a180915050919050565b6000806000600954141515611a9357600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b7fc46427cbd80d2d6a4c9423ad6dd4e81f6a0c6481577b754775e7ac40605b6af48382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a180915050919050565b60008060018301600a0a85029050600a60058583811515611b2457fe5b0401811515611b2f57fe5b049150509392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636d1b229d6008546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b1515611bcb57600080fd5b6102c65a03f11515611bdc57600080fd5b505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639c6c34396009546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b1515611c7157600080fd5b6102c65a03f11515611c8257600080fd5b50505060006008819055506000600981905550565b600080600080601054141580611cb057506000600f5414155b15611f0257600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015482019150600860035414611d1157600f54905080611d18565b6010549050805b5060011515600c60009054906101000a900460ff1615151415611d905780600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600d5402811515611d8657fe5b0482019150611eb9565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bdbff2f18583600e60008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015460065402811515611e1f57fe5b046040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515611ea457600080fd5b6102c65a03f11515611eb557600080fd5b5050505b6000600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505b81925050509190505600a165627a7a7230582002e621d6294e51c1e32dc42db063607c0fe58c6f642d3dff032f2c60a8cf80a50029`


module.exports = {
  ProjectABI,
  ProjectBytecode
}
