var testOutput={
  "contracts" : 
  {
    "BokkyPooBahsRedBlackTreeLibrary.sol:BokkyPooBahsRedBlackTreeLibrary" : 
    {
      "abi" : "[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820d7c0bc8464c635eebf705e690323845eb3f192f7b73b32d12d3d3fcab4e4e9ce0029"
    },
    "TestBokkyPooBahsRedBlackTree.sol:TestBokkyPooBahsRedBlackTree" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"insert\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"first\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"last\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"remove\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"getNode\",\"outputs\":[{\"name\":\"key\",\"type\":\"uint256\"},{\"name\":\"parent\",\"type\":\"uint256\"},{\"name\":\"left\",\"type\":\"uint256\"},{\"name\":\"right\",\"type\":\"uint256\"},{\"name\":\"red\",\"type\":\"bool\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"root\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "608060405234801561001057600080fd5b5061102e806100206000396000f3006080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631d834a1b811461007c5780633df4ddf41461009957806347799da8146100c05780634cc82215146100d55780634f0f4aa9146100ed578063ebf0c7171461013a575b600080fd5b34801561008857600080fd5b5061009760043560243561014f565b005b3480156100a557600080fd5b506100ae61017e565b60408051918252519081900360200190f35b3480156100cc57600080fd5b506100ae61018f565b3480156100e157600080fd5b5061009760043561019b565b3480156100f957600080fd5b506101056004356101c9565b6040805196875260208701959095528585019390935260608501919091521515608084015260a0830152519081900360c00190f35b34801561014657600080fd5b506100ae61024c565b81151561015b57600080fd5b61016c60008363ffffffff61025216565b60009182526002602052604090912055565b600061018a6000610350565b905090565b600061018a6000610397565b8015156101a757600080fd5b6101b860008263ffffffff6103d916565b600090815260026020526040812055565b6000806000806000806101da610fd7565b8715156101e657600080fd5b6101f760008963ffffffff61062116565b156102425761020d60008963ffffffff61067c16565b8051602080830151604080850151606086015160008f8152600290955291909320548d9c50939a509098509096509450925090505b5091939550919395565b60005490565b81546000905b801561029c5780915080831015610282576000908152600180850160205260409091200154610297565b60009081526001840160205260409020600201545b610258565b60408051608081018252838152600060208083018281528385018381526001606086018181528a86528b82019094529590932093518455519383019390935551600282015590516003909101805460ff191691151591909117905581151561030657828455610340565b818310156103295760008281526001808601602052604090912001839055610340565b600082815260018501602052604090206002018390555b61034a848461071f565b50505050565b80545b80158015906103745750600081815260018084016020526040909120015415155b15610392576000908152600180830160205260409091200154610353565b919050565b80545b80158015906103bb5750600081815260018301602052604090206002015415155b1561039257600090815260018201602052604090206002015461039a565b60008181526001808401602052604082200154819081908190158061040f57506000858152600187016020526040902060020154155b1561041c57849250610468565b600085815260018701602052604090206002015492505b600083815260018088016020526040909120015415610468576000928352600180870160205260409093209092015491610433565b60008381526001808801602052604090912001541561049c57600083815260018088016020526040909120015493506104b3565b600083815260018701602052604090206002015493505b60008381526001870160205260408082205486835291208190559150811561052757600082815260018088016020526040909120015483141561050b5760008281526001808801602052604090912001849055610522565b600082815260018701602052604090206002018490555b61052b565b8386555b50600082815260018601602052604090206003015460ff16158483146105b65761055686848761098c565b60008581526001878101602052604080832080830154878552828520938401819055845281842087905560028082015490840181905584529083208690556003908101549286905201805460ff191660ff90921615159190911790559193915b80156105c6576105c68685610a05565b505060008080526001948501602052604080822082815580870183905560028082018490556003918201805460ff19908116909155948452918320838155968701839055908601919091559390930180549093169092555050565b81546000905b8015610675578083141561063a57600191505b8083101561065b576000908152600180850160205260409091200154610670565b60009081526001840160205260409020600201545b610627565b5092915050565b610684610fd7565b82545b801561067557808314156106e457600083815260018086016020908152604092839020835160808101855281548152928101549183019190915260028101549282019290925260039091015460ff16151560608201529150610675565b8083101561070557600090815260018085016020526040909120015461071a565b60009081526001840160205260409020600201545b610687565b6000805b8354831480159061074d5750600083815260018501602052604080822054825290206003015460ff165b15610969575060008281526001808501602052604080832054808452818420548452922001548114156108715760008181526001850160205260408082205482528082206002015480835291206003015490925060ff16156107f7576000818152600180860160205260408083206003808201805460ff1990811690915587865283862082018054821690558254865292852001805490921690921790559082905254925061086c565b600081815260018501602052604090206002015483141561081f5780925061081f8484610e26565b50600082815260018085016020526040808320548084528184206003808201805460ff1990811690915582548752938620018054909316909317909155918290525461086c908590610f00565b610964565b6000818152600180860160205260408083205483528083209091015480835291206003015490925060ff16156108ef576000818152600180860160205260408083206003808201805460ff19908116909155878652838620820180548216905582548652928520018054909216909217905590829052549250610964565b6000818152600180860160205260409091200154831415610917578092506109178484610f00565b50600082815260018085016020526040808320548084528184206003808201805460ff19908116909155825487529386200180549093169093179091559182905254610964908590610e26565b610723565b50508154600090815260019092016020525060409020600301805460ff19169055565b60008181526001840160205260408082205484835291208190558015156109b55782845561034a565b60008181526001808601602052604090912001548214156109eb576000818152600180860160205260409091200183905561034a565b600090815260019390930160205250604090912060020155565b6000805b83548314801590610a2e5750600083815260018501602052604090206003015460ff16155b15610e0657506000828152600180850160205260408083205480845292200154831415610c2e5760008181526001850160205260408082206002015480835291206003015490925060ff1615610ad3576000828152600180860160205260408083206003908101805460ff19908116909155858552919093209092018054909216179055610abc8482610e26565b600081815260018501602052604090206002015491505b60008281526001808601602052604080832090910154825290206003015460ff16158015610b1e5750600082815260018501602052604080822060020154825290206003015460ff16155b15610b4b57600082815260018581016020526040909120600301805460ff19169091179055915081610c29565b600082815260018501602052604080822060020154825290206003015460ff161515610bca576000828152600180860160205260408083208083015484529083206003908101805460ff1990811690915593869052018054909216179055610bb38483610f00565b600081815260018501602052604090206002015491505b600081815260018501602052604080822060039081018054868552838520808401805460ff909316151560ff199384161790558254821690925560029091015484529190922090910180549091169055610c248482610e26565b835492505b610e01565b6000818152600180860160205260408083209091015480835291206003015490925060ff1615610cad576000828152600180860160205260408083206003908101805460ff19908116909155858552919093209092018054909216179055610c968482610f00565b600081815260018086016020526040909120015491505b600082815260018501602052604080822060020154825290206003015460ff16158015610cf8575060008281526001808601602052604080832090910154825290206003015460ff16155b15610d2557600082815260018581016020526040909120600301805460ff19169091179055915081610e01565b60008281526001808601602052604080832090910154825290206003015460ff161515610da657600082815260018086016020526040808320600281015484529083206003908101805460ff1990811690915593869052018054909216179055610d8f8483610e26565b600081815260018086016020526040909120015491505b60008181526001808601602052604080832060039081018054878652838620808401805460ff909316151560ff19938416179055825482169092559301548452922090910180549091169055610dfc8482610f00565b835492505b610a09565b50506000908152600190910160205260409020600301805460ff19169055565b600081815260018084016020526040808320600281018054915482865292852090930154938590529183905590918015610e6e57600081815260018601602052604090208490555b60008381526001860160205260409020829055811515610e9057828555610edd565b6000828152600180870160205260409091200154841415610ec65760008281526001808701602052604090912001839055610edd565b600082815260018601602052604090206002018390555b505060008181526001938401602052604080822090940183905591825291902055565b60008181526001808401602052604080832091820180549254838552918420600201549385905283905590918015610f4657600081815260018601602052604090208490555b60008381526001860160205260409020829055811515610f6857828555610fb5565b6000828152600186016020526040902060020154841415610f9e5760008281526001860160205260409020600201839055610fb5565b600082815260018087016020526040909120018390555b5050600081815260019093016020526040808420600201839055918352912055565b60806040519081016040528060008152602001600081526020016000815260200160001515815250905600a165627a7a7230582032b64feeee2f82282d5349d7965774e18dcd573103f0b3593ad53b6f6d71f5630029"
    }
  },
  "version" : "0.4.25+commit.59dbf8f1.Darwin.appleclang"
};
