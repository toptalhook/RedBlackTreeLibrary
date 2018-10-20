var testOutput={
  "contracts" : 
  {
    "BokkyPooBahsRedBlackTreeLibrary.sol:BokkyPooBahsRedBlackTreeLibrary" : 
    {
      "abi" : "[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058200e3525bc3e3c0f4d6de74ba9f02e1ca6006a22c11e01131c4b322f818e53d47c0029"
    },
    "TestBokkyPooBahsRedBlackTreeRaw.sol:TestBokkyPooBahsRedBlackTreeRaw" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"prev\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"first\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"last\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"remove\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"parent\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"getNode\",\"outputs\":[{\"name\":\"key\",\"type\":\"uint256\"},{\"name\":\"parent\",\"type\":\"uint256\"},{\"name\":\"left\",\"type\":\"uint256\"},{\"name\":\"right\",\"type\":\"uint256\"},{\"name\":\"red\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"exists\",\"outputs\":[{\"name\":\"_exists\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"sibling\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"uncle\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"insert\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"grandparent\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"root\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"next\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "608060405234801561001057600080fd5b50611422806100206000396000f3006080604052600436106100c45763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633567121481146100c95780633df4ddf4146100f357806347799da8146101085780634cc822151461011d5780634eaa9d22146101375780634f0f4aa91461014f5780634f558e791461019457806365e92143146101c057806383af31b9146101d857806390b5561d146101f0578063c0a4d38f14610208578063ebf0c71714610220578063edd004e514610235575b600080fd5b3480156100d557600080fd5b506100e160043561024d565b60408051918252519081900360200190f35b3480156100ff57600080fd5b506100e1610265565b34801561011457600080fd5b506100e1610276565b34801561012957600080fd5b50610135600435610282565b005b34801561014357600080fd5b506100e1600435610296565b34801561015b57600080fd5b506101676004356102a8565b60408051958652602086019490945284840192909252606084015215156080830152519081900360a00190f35b3480156101a057600080fd5b506101ac6004356102d0565b604080519115158252519081900360200190f35b3480156101cc57600080fd5b506100e16004356102e2565b3480156101e457600080fd5b506100e16004356102f4565b3480156101fc57600080fd5b50610135600435610306565b34801561021457600080fd5b506100e1600435610317565b34801561022c57600080fd5b506100e1610329565b34801561024157600080fd5b506100e160043561032f565b600061025f818363ffffffff61034116565b92915050565b600061027160006103e0565b905090565b60006102716000610427565b61029360008263ffffffff61046916565b50565b600061025f818363ffffffff61069216565b6000808080806102be818763ffffffff6106b616565b939a9299509097509550909350915050565b600061025f818363ffffffff61078f16565b600061025f818363ffffffff6107f716565b600061025f818363ffffffff61086f16565b61029360008263ffffffff6108b816565b600061025f818363ffffffff6109c716565b60005490565b600061025f818363ffffffff610a0616565b600081151561034f57600080fd5b60008281526001808501602052604090912001541561038e576000828152600180850160205260409091200154610387908490610a9e565b905061025f565b5060008181526001830160205260409020545b80158015906103c25750600081815260018085016020526040909120015482145b1561025f5760008181526001840160205260409020549091506103a1565b80545b80158015906104045750600081815260018084016020526040909120015415155b156104225760009081526001808301602052604090912001546103e3565b919050565b80545b801580159061044b5750600081815260018301602052604090206002015415155b1561042257600090815260018201602052604090206002015461042a565b600080808084151561047a57600080fd5b600085815260018088016020526040909120015415806104ab57506000858152600187016020526040902060020154155b156104b857849250610504565b600085815260018701602052604090206002015492505b6000838152600180880160205260409091200154156105045760009283526001808701602052604090932090920154916104cf565b600083815260018088016020526040909120015415610538576000838152600180880160205260409091200154935061054f565b600083815260018701602052604090206002015493505b6000838152600187016020526040808220548683529120819055915081156105c35760008281526001808801602052604090912001548314156105a757600082815260018088016020526040909120018490556105be565b600082815260018701602052604090206002018490555b6105c7565b8386555b50600082815260018601602052604090206003015460ff1615848314610652576105f2868487610adb565b60008581526001878101602052604080832080830154878552828520938401819055845281842087905560028082015490840181905584529083208690556003908101549286905201805460ff191660ff90921615159190911790559193915b8015610662576106628685610b54565b5050600090815260019384016020526040812081815593840181905560028401555050600301805460ff19169055565b60008115156106a057600080fd5b5060009081526001909101602052604090205490565b6000806000806000806106c76113cb565b8715156106d357600080fd5b885491505b81156107835781881415610743575060008781526001808a0160209081526040928390208351608081018552815480825293820154928101839052600282015494810185905260039091015460ff161515606082018190528b9a509298509096509194509250610783565b818810156107675760009182526001808a016020526040909220909101549061077e565b600091825260018901602052604090912060020154905b6106d8565b50509295509295909350565b60008082151561079e57600080fd5b5082545b80156107f057808314156107b557600191505b808310156107d65760009081526001808501602052604090912001546107eb565b60009081526001840160205260409020600201545b6107a2565b5092915050565b60008082151561080657600080fd5b50600082815260018401602052604090205480156107f057600081815260018086016020526040909120015483141561085457600081815260018501602052604090206002015491506107f0565b60009081526001938401602052604090209092015492915050565b6000808083151561087f57600080fd5b61088985856109c7565b915081156108b0575060008381526001850160205260409020546108ad85826107f7565b92505b505092915050565b6000808215156108c757600080fd5b505081546000905b801561091357809150808310156108f957600090815260018085016020526040909120015461090e565b60009081526001840160205260409020600201545b6108cf565b60408051608081018252838152600060208083018281528385018381526001606086018181528a86528b82019094529590932093518455519383019390935551600282015590516003909101805460ff191691151591909117905581151561097d578284556109b7565b818310156109a057600082815260018086016020526040909120018390556109b7565b600082815260018501602052604090206002018390555b6109c18484610f75565b50505050565b6000808215156109d657600080fd5b50600082815260018401602052604090205480156107f05760009081526001939093016020525050604090205490565b6000811515610a1457600080fd5b600082815260018401602052604090206002015415610a4c5760008281526001840160205260409020600201546103879084906111e2565b5060008181526001830160205260409020545b8015801590610a805750600081815260018401602052604090206002015482145b1561025f576000818152600184016020526040902054909150610a5f565b60005b600082815260018401602052604090206002015415610ad55760009182526001830160205260409091206002015490610aa1565b50919050565b6000818152600184016020526040808220548483529120819055801515610b04578284556109c1565b6000818152600180860160205260409091200154821415610b3a57600081815260018086016020526040909120018390556109c1565b600090815260019390930160205250604090912060020155565b6000805b83548314801590610b7d5750600083815260018501602052604090206003015460ff16155b15610f5557506000828152600180850160205260408083205480845292200154831415610d7d5760008181526001850160205260408082206002015480835291206003015490925060ff1615610c22576000828152600180860160205260408083206003908101805460ff19908116909155858552919093209092018054909216179055610c0b848261121a565b600081815260018501602052604090206002015491505b60008281526001808601602052604080832090910154825290206003015460ff16158015610c6d5750600082815260018501602052604080822060020154825290206003015460ff16155b15610c9a57600082815260018581016020526040909120600301805460ff19169091179055915081610d78565b600082815260018501602052604080822060020154825290206003015460ff161515610d19576000828152600180860160205260408083208083015484529083206003908101805460ff1990811690915593869052018054909216179055610d0284836112f4565b600081815260018501602052604090206002015491505b600081815260018501602052604080822060039081018054868552838520808401805460ff909316151560ff199384161790558254821690925560029091015484529190922090910180549091169055610d73848261121a565b835492505b610f50565b6000818152600180860160205260408083209091015480835291206003015490925060ff1615610dfc576000828152600180860160205260408083206003908101805460ff19908116909155858552919093209092018054909216179055610de584826112f4565b600081815260018086016020526040909120015491505b600082815260018501602052604080822060020154825290206003015460ff16158015610e47575060008281526001808601602052604080832090910154825290206003015460ff16155b15610e7457600082815260018581016020526040909120600301805460ff19169091179055915081610f50565b60008281526001808601602052604080832090910154825290206003015460ff161515610ef557600082815260018086016020526040808320600281015484529083206003908101805460ff1990811690915593869052018054909216179055610ede848361121a565b600081815260018086016020526040909120015491505b60008181526001808601602052604080832060039081018054878652838620808401805460ff909316151560ff19938416179055825482169092559301548452922090910180549091169055610f4b84826112f4565b835492505b610b58565b50506000908152600190910160205260409020600301805460ff19169055565b6000805b83548314801590610fa35750600083815260018501602052604080822054825290206003015460ff165b156111bf575060008281526001808501602052604080832054808452818420548452922001548114156110c75760008181526001850160205260408082205482528082206002015480835291206003015490925060ff161561104d576000818152600180860160205260408083206003808201805460ff199081169091558786528386208201805482169055825486529285200180549092169092179055908290525492506110c2565b600081815260018501602052604090206002015483141561107557809250611075848461121a565b50600082815260018085016020526040808320548084528184206003808201805460ff199081169091558254875293862001805490931690931790915591829052546110c29085906112f4565b6111ba565b6000818152600180860160205260408083205483528083209091015480835291206003015490925060ff1615611145576000818152600180860160205260408083206003808201805460ff199081169091558786528386208201805482169055825486529285200180549092169092179055908290525492506111ba565b600081815260018086016020526040909120015483141561116d5780925061116d84846112f4565b50600082815260018085016020526040808320548084528184206003808201805460ff199081169091558254875293862001805490931690931790915591829052546111ba90859061121a565b610f79565b50508154600090815260019092016020525060409020600301805460ff19169055565b60005b600082815260018085016020526040909120015415610ad55760009182526001808401602052604090922090910154906111e5565b60008181526001808401602052604080832060028101805491548286529285209093015493859052918390559091801561126257600081815260018601602052604090208490555b60008381526001860160205260409020829055811515611284578285556112d1565b60008281526001808701602052604090912001548414156112ba57600082815260018087016020526040909120018390556112d1565b600082815260018601602052604090206002018390555b505060008181526001938401602052604080822090940183905591825291902055565b6000818152600180840160205260408083209182018054925483855291842060020154938590528390559091801561133a57600081815260018601602052604090208490555b6000838152600186016020526040902082905581151561135c578285556113a9565b600082815260018601602052604090206002015484141561139257600082815260018601602052604090206002018390556113a9565b600082815260018087016020526040909120018390555b5050600081815260019093016020526040808420600201839055918352912055565b60806040519081016040528060008152602001600081526020016000815260200160001515815250905600a165627a7a723058202f44023cef57e59fa61347c3e86426f9fc50974c8bbe1ba61c5a5121498d4e530029"
    }
  },
  "version" : "0.4.25+commit.59dbf8f1.Darwin.appleclang"
};
