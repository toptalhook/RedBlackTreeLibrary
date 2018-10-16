var testOutput={
  "contracts" : 
  {
    "BokkyPooBahsRedBlackTreeLibrary.sol:BokkyPooBahsRedBlackTreeLibrary" : 
    {
      "abi" : "[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820523b8ebeb92c504fcdfacb4d00e451cbaf1b9d234fb0b8bc298d3ef35154145d0029"
    },
    "TestBokkyPooBahsRedBlackTree.sol:TestBokkyPooBahsRedBlackTree" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"insert\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"prev\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"first\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"last\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"remove\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"name\":\"getNode\",\"outputs\":[{\"name\":\"key\",\"type\":\"uint256\"},{\"name\":\"parent\",\"type\":\"uint256\"},{\"name\":\"left\",\"type\":\"uint256\"},{\"name\":\"right\",\"type\":\"uint256\"},{\"name\":\"red\",\"type\":\"bool\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"exists\",\"outputs\":[{\"name\":\"_exists\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"root\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"next\",\"outputs\":[{\"name\":\"_key\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"where\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"action\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"parent\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"left\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"right\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"red\",\"type\":\"bool\"}],\"name\":\"Log\",\"type\":\"event\"}]",
      "bin" : "608060405234801561001057600080fd5b50611253806100206000396000f3006080604052600436106100985763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631d834a1b811461009d57806335671214146100ba5780633df4ddf4146100e457806347799da8146100f95780634cc822151461010e5780634f0f4aa9146101265780634f558e7914610173578063ebf0c7171461019f578063edd004e5146101b4575b600080fd5b3480156100a957600080fd5b506100b86004356024356101cc565b005b3480156100c657600080fd5b506100d26004356101ef565b60408051918252519081900360200190f35b3480156100f057600080fd5b506100d2610207565b34801561010557600080fd5b506100d2610218565b34801561011a57600080fd5b506100b8600435610224565b34801561013257600080fd5b5061013e600435610246565b6040805196875260208701959095528585019390935260608501919091521515608084015260a0830152519081900360c00190f35b34801561017f57600080fd5b5061018b6004356102bd565b604080519115158252519081900360200190f35b3480156101ab57600080fd5b506100d26102cf565b3480156101c057600080fd5b506100d26004356102d5565b6101dd60008363ffffffff6102e716565b60009182526002602052604090912055565b6000610201818363ffffffff6103f616565b92915050565b60006102136000610480565b905090565b600061021360006104c7565b61023560008263ffffffff61050916565b600090815260026020526040812055565b6000806000806000806102576111fc565b61026860008963ffffffff61073216565b156102b35761027e60008963ffffffff61079a16565b8051602080830151604080850151606086015160008f8152600290955291909320548d9c50939a509098509096509450925090505b5091939550919395565b6000610201818363ffffffff61073216565b60005490565b6000610201818363ffffffff61084c16565b6000808215156102f657600080fd5b505081546000905b8015610342578091508083101561032857600090815260018085016020526040909120015461033d565b60009081526001840160205260409020600201545b6102fe565b60408051608081018252838152600060208083018281528385018381526001606086018181528a86528b82019094529590932093518455519383019390935551600282015590516003909101805460ff19169115159190911790558115156103ac578284556103e6565b818310156103cf57600082815260018086016020526040909120018390556103e6565b600082815260018501602052604090206002018390555b6103f084846108cf565b50505050565b600081151561040457600080fd5b60008281526001808501602052604090912001541561042e576104278383610b3c565b9050610201565b5060008181526001830160205260409020545b80158015906104625750600081815260018085016020526040909120015481145b15610201576000818152600184016020526040902054909150610441565b80545b80158015906104a45750600081815260018084016020526040909120015415155b156104c2576000908152600180830160205260409091200154610483565b919050565b80545b80158015906104eb5750600081815260018301602052604090206002015415155b156104c25760009081526001820160205260409020600201546104ca565b600080808084151561051a57600080fd5b6000858152600180880160205260409091200154158061054b57506000858152600187016020526040902060020154155b15610558578492506105a4565b600085815260018701602052604090206002015492505b6000838152600180880160205260409091200154156105a457600092835260018087016020526040909320909201549161056f565b6000838152600180880160205260409091200154156105d857600083815260018088016020526040909120015493506105ef565b600083815260018701602052604090206002015493505b600083815260018701602052604080822054868352912081905591508115610663576000828152600180880160205260409091200154831415610647576000828152600180880160205260409091200184905561065e565b600082815260018701602052604090206002018490555b610667565b8386555b50600082815260018601602052604090206003015460ff16158483146106f257610692868487610b79565b60008581526001878101602052604080832080830154878552828520938401819055845281842087905560028082015490840181905584529083208690556003908101549286905201805460ff191660ff90921615159190911790559193915b8015610702576107028685610bf2565b5050600090815260019384016020526040812081815593840181905560028401555050600301805460ff19169055565b60008082151561074157600080fd5b5082545b8015610793578083141561075857600191505b8083101561077957600090815260018085016020526040909120015461078e565b60009081526001840160205260409020600201545b610745565b5092915050565b6107a26111fc565b60008215156107b057600080fd5b5082545b8015610793578083141561081157600083815260018086016020908152604092839020835160808101855281548152928101549183019190915260028101549282019290925260039091015460ff16151560608201529150610793565b80831015610832576000908152600180850160205260409091200154610847565b60009081526001840160205260409020600201545b6107b4565b600081151561085a57600080fd5b60008281526001840160205260409020600201541561087d576104278383611013565b5060008181526001830160205260409020545b80158015906108b15750600081815260018401602052604090206002015481145b15610201576000818152600184016020526040902054909150610890565b6000805b835483148015906108fd5750600083815260018501602052604080822054825290206003015460ff165b15610b1957506000828152600180850160205260408083205480845281842054845292200154811415610a215760008181526001850160205260408082205482528082206002015480835291206003015490925060ff16156109a7576000818152600180860160205260408083206003808201805460ff19908116909155878652838620820180548216905582548652928520018054909216909217905590829052549250610a1c565b60008181526001850160205260409020600201548314156109cf578092506109cf848461104b565b50600082815260018085016020526040808320548084528184206003808201805460ff19908116909155825487529386200180549093169093179091559182905254610a1c908590611125565b610b14565b6000818152600180860160205260408083205483528083209091015480835291206003015490925060ff1615610a9f576000818152600180860160205260408083206003808201805460ff19908116909155878652838620820180548216905582548652928520018054909216909217905590829052549250610b14565b6000818152600180860160205260409091200154831415610ac757809250610ac78484611125565b50600082815260018085016020526040808320548084528184206003808201805460ff19908116909155825487529386200180549093169093179091559182905254610b1490859061104b565b6108d3565b50508154600090815260019092016020525060409020600301805460ff19169055565b60005b600082815260018401602052604090206002015415610b735760009182526001830160205260409091206002015490610b3f565b50919050565b6000818152600184016020526040808220548483529120819055801515610ba2578284556103f0565b6000818152600180860160205260409091200154821415610bd857600081815260018086016020526040909120018390556103f0565b600090815260019390930160205250604090912060020155565b6000805b83548314801590610c1b5750600083815260018501602052604090206003015460ff16155b15610ff357506000828152600180850160205260408083205480845292200154831415610e1b5760008181526001850160205260408082206002015480835291206003015490925060ff1615610cc0576000828152600180860160205260408083206003908101805460ff19908116909155858552919093209092018054909216179055610ca9848261104b565b600081815260018501602052604090206002015491505b60008281526001808601602052604080832090910154825290206003015460ff16158015610d0b5750600082815260018501602052604080822060020154825290206003015460ff16155b15610d3857600082815260018581016020526040909120600301805460ff19169091179055915081610e16565b600082815260018501602052604080822060020154825290206003015460ff161515610db7576000828152600180860160205260408083208083015484529083206003908101805460ff1990811690915593869052018054909216179055610da08483611125565b600081815260018501602052604090206002015491505b600081815260018501602052604080822060039081018054868552838520808401805460ff909316151560ff199384161790558254821690925560029091015484529190922090910180549091169055610e11848261104b565b835492505b610fee565b6000818152600180860160205260408083209091015480835291206003015490925060ff1615610e9a576000828152600180860160205260408083206003908101805460ff19908116909155858552919093209092018054909216179055610e838482611125565b600081815260018086016020526040909120015491505b600082815260018501602052604080822060020154825290206003015460ff16158015610ee5575060008281526001808601602052604080832090910154825290206003015460ff16155b15610f1257600082815260018581016020526040909120600301805460ff19169091179055915081610fee565b60008281526001808601602052604080832090910154825290206003015460ff161515610f9357600082815260018086016020526040808320600281015484529083206003908101805460ff1990811690915593869052018054909216179055610f7c848361104b565b600081815260018086016020526040909120015491505b60008181526001808601602052604080832060039081018054878652838620808401805460ff909316151560ff19938416179055825482169092559301548452922090910180549091169055610fe98482611125565b835492505b610bf6565b50506000908152600190910160205260409020600301805460ff19169055565b60005b600082815260018085016020526040909120015415610b73576000918252600180840160205260409092209091015490611016565b60008181526001808401602052604080832060028101805491548286529285209093015493859052918390559091801561109357600081815260018601602052604090208490555b600083815260018601602052604090208290558115156110b557828555611102565b60008281526001808701602052604090912001548414156110eb5760008281526001808701602052604090912001839055611102565b600082815260018601602052604090206002018390555b505060008181526001938401602052604080822090940183905591825291902055565b6000818152600180840160205260408083209182018054925483855291842060020154938590528390559091801561116b57600081815260018601602052604090208490555b6000838152600186016020526040902082905581151561118d578285556111da565b60008281526001860160205260409020600201548414156111c357600082815260018601602052604090206002018390556111da565b600082815260018087016020526040909120018390555b5050600081815260019093016020526040808420600201839055918352912055565b60806040519081016040528060008152602001600081526020016000815260200160001515815250905600a165627a7a72305820bc9365590f704180d9adddd81728e9b188154d419764846b482f401c69937de80029"
    }
  },
  "version" : "0.4.25+commit.59dbf8f1.Darwin.appleclang"
};
