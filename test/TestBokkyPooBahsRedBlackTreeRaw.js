var testOutput={
  "contracts" : 
  {
    "BokkyPooBahsRedBlackTreeLibrary.sol:BokkyPooBahsRedBlackTreeLibrary" : 
    {
      "abi" : "[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820a94b6d53cf5ef1fa38cad9c5cf0b92c39760c194402240fb56b035d6495319d20029"
    },
    "TestBokkyPooBahsRedBlackTreeRaw.sol:TestBokkyPooBahsRedBlackTreeRaw" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"prev\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"first\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"last\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"remove\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"parent\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"getNode\",\"outputs\":[{\"name\":\"key\",\"type\":\"uint256\"},{\"name\":\"parent\",\"type\":\"uint256\"},{\"name\":\"left\",\"type\":\"uint256\"},{\"name\":\"right\",\"type\":\"uint256\"},{\"name\":\"red\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"exists\",\"outputs\":[{\"name\":\"_exists\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"sibling\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"uncle\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"insert\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"grandparent\",\"outputs\":[{\"name\":\"_parent\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"root\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"next\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "608060405234801561001057600080fd5b50610028600064010000000061168961002d82021704565b6100aa565b600281015460ff161561003f57600080fd5b600080825560408051608081018252828152602080820184815282840185815260608401868152868052600180890190945294909520925183555182820155925160028083019190915591516003909101805491151560ff1992831617905592018054909216179055565b611732806100b96000396000f3006080604052600436106100c45763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633567121481146100c95780633df4ddf4146100f357806347799da8146101085780634cc822151461011d5780634eaa9d22146101375780634f0f4aa91461014f5780634f558e791461019457806365e92143146101c057806383af31b9146101d857806390b5561d146101f0578063c0a4d38f14610208578063ebf0c71714610220578063edd004e514610235575b600080fd5b3480156100d557600080fd5b506100e160043561024d565b60408051918252519081900360200190f35b3480156100ff57600080fd5b506100e1610265565b34801561011457600080fd5b506100e1610276565b34801561012957600080fd5b50610135600435610282565b005b34801561014357600080fd5b506100e1600435610296565b34801561015b57600080fd5b506101676004356102a8565b60408051958652602086019490945284840192909252606084015215156080830152519081900360a00190f35b3480156101a057600080fd5b506101ac6004356102d0565b604080519115158252519081900360200190f35b3480156101cc57600080fd5b506100e16004356102e2565b3480156101e457600080fd5b506100e16004356102f4565b3480156101fc57600080fd5b50610135600435610306565b34801561021457600080fd5b506100e1600435610317565b34801561022c57600080fd5b506100e1610329565b34801561024157600080fd5b506100e160043561032f565b600061025f818363ffffffff61034116565b92915050565b600061027160006103e0565b905090565b60006102716000610427565b61029360008263ffffffff61046916565b50565b600061025f818363ffffffff6108f216565b6000808080806102be818763ffffffff61091616565b939a9299509097509550909350915050565b600061025f818363ffffffff610a0216565b600061025f818363ffffffff610a6a16565b600061025f818363ffffffff610ae216565b61029360008263ffffffff610b2b16565b600061025f818363ffffffff610c5716565b60005490565b600061025f818363ffffffff610c9616565b600081151561034f57600080fd5b60008281526001808501602052604090912001541561038e576000828152600180850160205260409091200154610387908490610d2e565b905061025f565b5060008181526001830160205260409020545b80158015906103c25750600081815260018085016020526040909120015482145b1561025f5760008181526001840160205260409020549091506103a1565b80545b80158015906104045750600081815260018084016020526040909120015415155b156104225760009081526001808301602052604090912001546103e3565b919050565b80545b801580159061044b5750600081815260018301602052604090206002015415155b1561042257600090815260018201602052604090206002015461042a565b600080808084151561047a57600080fd5b85548514806104a45750855485148015906104a45750600085815260018701602052604090205415155b15156104af57600080fd5b600085815260018088016020526040909120015415806104e057506000858152600187016020526040902060020154155b156104ed57849250610539565b600085815260018701602052604090206002015492505b600083815260018088016020526040909120015415610539576000928352600180870160205260409093209092015491610504565b60008381526001808801602052604090912001541561056d5760008381526001808801602052604090912001549350610584565b600083815260018701602052604090206002015493505b6000838152600187016020526040808220548683529120819055915081156105f85760008281526001808801602052604090912001548314156105dc57600082815260018088016020526040909120018490556105f3565b600082815260018701602052604090206002018490555b6105fc565b8386555b50600082815260018601602052604090206003015460ff161584831461068757610627868487610d6b565b60008581526001878101602052604080832080830154878552828520938401819055845281842087905560028082015490840181905584529083208690556003908101549286905201805460ff191660ff90921615159190911790559193915b8015610697576106978685610de7565b600080805260018088016020908152604080842080549381015460028201546003909201548351808501979097526060870195909552608086015260a085015260ff909216151560c084015260e08084526006908401527f72656d6f76650000000000000000000000000000000000000000000000000000610100840152610120908301819052601b908301527f6265666f72652064656c6574652073656c662e6e6f6465735b305d0000000000610140830152517f844a31e60170ca7763f26b5bccb5a4bb5e3c9a6b39b9130cf90598bb634bd20b918190036101600190a1600080805260018088016020908152604080842080549381015460028201546003909201548351808501979097526060870195909552608086015260a085015260ff909216151560c084015260e08084526006908401527f72656d6f766500000000000000000000000000000000000000000000000000006101008401526101209083018190526022908301527f6265666f72652064656c6574652073656c662e6e6f6465735b53454e54494e456101408301527f4c5d000000000000000000000000000000000000000000000000000000000000610160830152517f844a31e60170ca7763f26b5bccb5a4bb5e3c9a6b39b9130cf90598bb634bd20b918190036101800190a16000808052600187016020526040902054156108c25760008080526001808801602052604082208281559081018290556002810191909155600301805460ff191690555b5050600090815260019384016020526040812081815593840181905560028401555050600301805460ff19169055565b600081151561090057600080fd5b5060009081526001909101602052604090205490565b60008060008060008061092761165e565b87151561093357600080fd5b885491505b81156109e357818814156109a3575060008781526001808a0160209081526040928390208351608081018552815480825293820154928101839052600282015494810185905260039091015460ff161515606082018190528b9a5092985090965091945092506109f6565b818810156109c75760009182526001808a01602052604090922090910154906109de565b600091825260018901602052604090912060020154905b610938565b6000806000806000965096509650965096505b50509295509295909350565b600080821515610a1157600080fd5b5082545b8015610a635780831415610a2857600191505b80831015610a49576000908152600180850160205260409091200154610a5e565b60009081526001840160205260409020600201545b610a15565b5092915050565b600080821515610a7957600080fd5b5060008281526001840160205260409020548015610a63576000818152600180860160205260409091200154831415610ac75760008181526001850160205260409020600201549150610a63565b60009081526001938401602052604090209092015492915050565b60008080831515610af257600080fd5b610afc8585610c57565b91508115610b2357506000838152600185016020526040902054610b208582610a6a565b92505b505092915050565b60008080831515610b3b57600080fd5b505082546000915081905b8015610b975780915080841015610b70576000908152600180860160205260409091200154610b92565b80841415610b7d57600192505b60009081526001850160205260409020600201545b610b46565b8215610ba257600080fd5b60408051608081018252838152600060208083018281528385018381526001606086018181528b86528c82019094529590932093518455519383019390935551600282015590516003909101805460ff1916911515919091179055811515610c0c57838555610c46565b81841015610c2f5760008281526001808701602052604090912001849055610c46565b600082815260018601602052604090206002018490555b610c508585611208565b5050505050565b600080821515610c6657600080fd5b5060008281526001840160205260409020548015610a635760009081526001939093016020525050604090205490565b6000811515610ca457600080fd5b600082815260018401602052604090206002015415610cdc576000828152600184016020526040902060020154610387908490611475565b5060008181526001830160205260409020545b8015801590610d105750600081815260018401602052604090206002015482145b1561025f576000818152600184016020526040902054909150610cef565b60005b600082815260018401602052604090206002015415610d655760009182526001830160205260409091206002015490610d31565b50919050565b6000818152600184016020526040808220548483529120819055801515610d9457828455610de1565b6000818152600180860160205260409091200154821415610dca5760008181526001808601602052604090912001839055610de1565b600081815260018501602052604090206002018390555b50505050565b6000805b83548314801590610e105750600083815260018501602052604090206003015460ff16155b156111e8575060008281526001808501602052604080832054808452922001548314156110105760008181526001850160205260408082206002015480835291206003015490925060ff1615610eb5576000828152600180860160205260408083206003908101805460ff19908116909155858552919093209092018054909216179055610e9e84826114ad565b600081815260018501602052604090206002015491505b60008281526001808601602052604080832090910154825290206003015460ff16158015610f005750600082815260018501602052604080822060020154825290206003015460ff16155b15610f2d57600082815260018581016020526040909120600301805460ff1916909117905591508161100b565b600082815260018501602052604080822060020154825290206003015460ff161515610fac576000828152600180860160205260408083208083015484529083206003908101805460ff1990811690915593869052018054909216179055610f958483611587565b600081815260018501602052604090206002015491505b600081815260018501602052604080822060039081018054868552838520808401805460ff909316151560ff19938416179055825482169092556002909101548452919092209091018054909116905561100684826114ad565b835492505b6111e3565b6000818152600180860160205260408083209091015480835291206003015490925060ff161561108f576000828152600180860160205260408083206003908101805460ff199081169091558585529190932090920180549092161790556110788482611587565b600081815260018086016020526040909120015491505b600082815260018501602052604080822060020154825290206003015460ff161580156110da575060008281526001808601602052604080832090910154825290206003015460ff16155b1561110757600082815260018581016020526040909120600301805460ff191690911790559150816111e3565b60008281526001808601602052604080832090910154825290206003015460ff16151561118857600082815260018086016020526040808320600281015484529083206003908101805460ff199081169091559386905201805490921617905561117184836114ad565b600081815260018086016020526040909120015491505b60008181526001808601602052604080832060039081018054878652838620808401805460ff909316151560ff199384161790558254821690925593015484529220909101805490911690556111de8482611587565b835492505b610deb565b50506000908152600190910160205260409020600301805460ff19169055565b6000805b835483148015906112365750600083815260018501602052604080822054825290206003015460ff165b156114525750600082815260018085016020526040808320548084528184205484529220015481141561135a5760008181526001850160205260408082205482528082206002015480835291206003015490925060ff16156112e0576000818152600180860160205260408083206003808201805460ff19908116909155878652838620820180548216905582548652928520018054909216909217905590829052549250611355565b60008181526001850160205260409020600201548314156113085780925061130884846114ad565b50600082815260018085016020526040808320548084528184206003808201805460ff19908116909155825487529386200180549093169093179091559182905254611355908590611587565b61144d565b6000818152600180860160205260408083205483528083209091015480835291206003015490925060ff16156113d8576000818152600180860160205260408083206003808201805460ff1990811690915587865283862082018054821690558254865292852001805490921690921790559082905254925061144d565b6000818152600180860160205260409091200154831415611400578092506114008484611587565b50600082815260018085016020526040808320548084528184206003808201805460ff1990811690915582548752938620018054909316909317909155918290525461144d9085906114ad565b61120c565b50508154600090815260019092016020525060409020600301805460ff19169055565b60005b600082815260018085016020526040909120015415610d65576000918252600180840160205260409092209091015490611478565b6000818152600180840160205260408083206002810180549154828652928520909301549385905291839055909180156114f557600081815260018601602052604090208490555b6000838152600186016020526040902082905581151561151757828555611564565b600082815260018087016020526040909120015484141561154d5760008281526001808701602052604090912001839055611564565b600082815260018601602052604090206002018390555b505060008181526001938401602052604080822090940183905591825291902055565b600081815260018084016020526040808320918201805492548385529184206002015493859052839055909180156115cd57600081815260018601602052604090208490555b600083815260018601602052604090208290558115156115ef5782855561163c565b6000828152600186016020526040902060020154841415611625576000828152600186016020526040902060020183905561163c565b600082815260018087016020526040909120018390555b5050600081815260019093016020526040808420600201839055918352912055565b6080604051908101604052806000815260200160008152602001600081526020016000151581525090565b600281015460ff161561169b57600080fd5b600080825560408051608081018252828152602080820184815282840185815260608401868152868052600180890190945294909520925183555182820155925160028083019190915591516003909101805491151560ff19928316179055920180549092161790555600a165627a7a7230582094fc9b09ffc464fcc89cb62270aecdd1900ff7541a521f1d8988a87851ee45a10029"
    }
  },
  "version" : "0.4.25+commit.59dbf8f1.Darwin.appleclang"
};
