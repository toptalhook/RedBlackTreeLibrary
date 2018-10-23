#!/bin/bash
# ----------------------------------------------------------------------------------------------
# Testing the smart contract
#
# Enjoy. (c) BokkyPooBah / Bok Consulting Pty Ltd 2017. The MIT Licence.
# ----------------------------------------------------------------------------------------------

MODE=${1:-full}

source settings
echo "---------- Settings ----------" | tee $TEST2OUTPUT
cat ./settings | tee -a $TEST2OUTPUT
echo "" | tee -a $TEST2OUTPUT

CURRENTTIME=`date +%s`
CURRENTTIMES=`date -r $CURRENTTIME -u`
START_DATE=`echo "$CURRENTTIME+60*2+30" | bc`
START_DATE_S=`date -r $START_DATE -u`
END_DATE=`echo "$CURRENTTIME+60*4" | bc`
END_DATE_S=`date -r $END_DATE -u`

printf "CURRENTTIME = '$CURRENTTIME' '$CURRENTTIMES'\n" | tee -a $TEST2OUTPUT
printf "START_DATE  = '$START_DATE' '$START_DATE_S'\n" | tee -a $TEST2OUTPUT
printf "END_DATE    = '$END_DATE' '$END_DATE_S'\n" | tee -a $TEST2OUTPUT

# Make copy of SOL file and modify start and end times ---
# `cp modifiedContracts/*.sol .`
`cp $SOURCEDIR/* .`

# --- Modify parameters ---
#`perl -pi -e "s/START_DATE \= 1512921600;.*$/START_DATE \= $START_DATE; \/\/ $START_DATE_S/" $CROWDSALESOL`
#`perl -pi -e "s/endDate \= 1513872000;.*$/endDate \= $END_DATE; \/\/ $END_DATE_S/" $CROWDSALESOL`

#DIFFS1=`diff $SOURCEDIR/$LIBSOL $LIBSOL`
#echo "--- Differences $SOURCEDIR/$LIBSOL $LIBSOL ---" | tee -a $TEST2OUTPUT
#echo "$DIFFS1" | tee -a $TEST2OUTPUT

#DIFFS1=`diff $SOURCEDIR/$TESTSOL $TESTSOL`
#echo "--- Differences $SOURCEDIR/$TESTSOL $TESTSOL ---" | tee -a $TEST2OUTPUT
#echo "$DIFFS1" | tee -a $TEST2OUTPUT

solc_0.4.25 --version | tee -a $TEST2OUTPUT

# echo "var libOutput=`solc_0.4.25 --optimize --pretty-json --combined-json abi,bin,interface $LIBSOL`;" > $LIBJS
echo "var testOutput=`solc_0.4.25 --optimize --pretty-json --combined-json abi,bin,interface $TESTRAWSOL`;" > $TESTRAWJS

../scripts/solidityFlattener.pl --contractsdir=../contracts --mainsol=$TESTRAWSOL --outputsol=$TESTRAWFLATTENED --verbose | tee -a $TEST2OUTPUT

if [ "$MODE" = "compile" ]; then
  echo "Compiling only"
  exit 1;
fi

geth --verbosity 3 attach $GETHATTACHPOINT << EOF | tee -a $TEST2OUTPUT
loadScript("$TESTRAWJS");
loadScript("functions.js");

var testAbi = JSON.parse(testOutput.contracts["$TESTRAWSOL:TestBokkyPooBahsRedBlackTreeRaw"].abi);
var testBin = "0x" + testOutput.contracts["$TESTRAWSOL:TestBokkyPooBahsRedBlackTreeRaw"].bin;

// console.log("DATA: testAbi=" + JSON.stringify(testAbi));
// console.log("DATA: testBin=" + JSON.stringify(testBin));


unlockAccounts("$PASSWORD");
printBalances();
console.log("RESULT: ");


// -----------------------------------------------------------------------------
var deployTestMessage = "Deploy Test";
// -----------------------------------------------------------------------------
console.log("RESULT: ----- " + deployTestMessage + " -----");
var testContract = web3.eth.contract(testAbi);
// console.log(JSON.stringify(testContract));
var testTx = null;
var testAddress = null;
var test = testContract.new({from: deployer, data: testBin, gas: 6000000, gasPrice: defaultGasPrice},
  function(e, contract) {
    if (!e) {
      if (!contract.address) {
        testTx = contract.transactionHash;
      } else {
        testAddress = contract.address;
        addAccount(testAddress, "Test");
        console.log("DATA: var testAddress=\"" + testAddress + "\";");
        console.log("DATA: var testAbi=" + JSON.stringify(testAbi) + ";");
        console.log("DATA: var test=eth.contract(testAbi).at(testAddress);");
        addTestRedBlackTreeContractAddressAndAbi(testAddress, testAbi);
        console.log("DATA: testAddress=" + testAddress);
      }
    }
  }
);
while (txpool.status.pending > 0) {
}
printBalances();
failIfTxStatusError(testTx, deployTestMessage);
printTxData("testTx", testTx);
printTestRedBlackTreeContractDetails();
console.log("RESULT: ");


var failureDetected = false;
var expected;
var result;
var section;
var message;
var NULLNODERESULT = "[\"0\",\"0\",\"0\",\"0\",false]";

if ("$MODE" == "full") {
  section = "[Empty List]";
  console.log("RESULT: ---------- Test Basics - " + section + " ----------");
  if (!assert(test.root() == "0", section + " test.root() should return 0")) {
    failureDetected = true;
  }
  if (!assert(test.first() == "0", section + " test.first() should return 0")) {
    failureDetected = true;
  }
  if (!assert(test.last() == "0", section + " test.last() should return 0")) {
    failureDetected = true;
  }
  if (!assert(test.next(123) == "0", section + " test.next(123) should return 0")) {
    failureDetected = true;
  }
  if (!assert(test.prev(123) == "0", section + " test.prev(123) should return 0")) {
    failureDetected = true;
  }
  if (!assert(test.exists(123) == false, section + " test.exists(123) should return false")) {
    failureDetected = true;
  }

  var nodeResult = test.getNode(123);
  // console.log("RESULT: nodeResult=" + nodeResult);
  if (!assert(JSON.stringify(nodeResult) == NULLNODERESULT, section + " test.getNode(123) should return " + NULLNODERESULT)) {
    failureDetected = true;
  }

  if (!assert(test.parent(123) == "0", section + " test.parent(123) should return 0")) {
    failureDetected = true;
  }
  // var nodeResult = test.parentNode(123);
  // if (!assert(JSON.stringify(nodeResult) == NULLNODERESULT, section + " test.parentNode(123) should return " + NULLNODERESULT)) {
  //   failureDetected = true;
  // }

  if (!assert(test.grandparent(123) == "0", section + " test.grandparent(123) should return 0")) {
    failureDetected = true;
  }
  // var nodeResult = test.grandparentNode(123);
  // if (!assert(JSON.stringify(nodeResult) == NULLNODERESULT, section + " test.grandparentNode(123) should return " + NULLNODERESULT)) {
  //   failureDetected = true;
  // }

  if (!assert(test.sibling(123) == "0", section + " test.sibling(123) should return 0")) {
    failureDetected = true;
  }
  // var nodeResult = test.siblingNode(123);
  // if (!assert(JSON.stringify(nodeResult) == NULLNODERESULT, section + " test.siblingNode(123) should return " + NULLNODERESULT)) {
  //   failureDetected = true;
  // }

  if (!assert(test.uncle(123) == "0", section + " test.uncle(123) should return 0")) {
    failureDetected = true;
  }
  // var nodeResult = test.uncleNode(123);
  // if (!assert(JSON.stringify(nodeResult) == NULLNODERESULT, section + " test.uncleNode(123) should return " + NULLNODERESULT)) {
  //   failureDetected = true;
  // }
  console.log("RESULT: ");
}


// -----------------------------------------------------------------------------
var setupData1_Message = "Setup Data";
// -----------------------------------------------------------------------------
console.log("RESULT: ----- " + setupData1_Message + " -----");
// var NUMBEROFITEMS = 32;
var NUMBEROFITEMS = 400;
var BATCHSIZE = NUMBEROFITEMS / 4;
var insertItems = [];
var removeItems = [];
for (var i = 1; i <= NUMBEROFITEMS; i++) {
    insertItems.push(i);
    removeItems.push(i);
}
// insertItems = shuffle(insertItems);
// insertItems=[18,28,17,32,7,5,21,14,10,3,23,16,24,4,29,8,26,12,2,22,11,1,31,19,30,9,13,15,6,20,25,27];
// TEST next, prev insertItems=[20,22,4,8,12,10,14];
// insertItems=[20,22,4,8,12,10,14];
removeItems = shuffle(removeItems);
// removeItems=[4,14,25,32,2,30,16,31,6,26,18,22,28,23,12,15,19,27,7,13,29,11,3,5,17,1,24,20,9,8,21,10];
// console.log("RESULT: insertItems=" + JSON.stringify(insertItems));
// console.log("RESULT: removeItems=" + JSON.stringify(removeItems));
console.log("RESULT: ");


// -----------------------------------------------------------------------------
var insertData1_Message = "Insert Data #1";
// -----------------------------------------------------------------------------
console.log("RESULT: ----- " + insertData1_Message + " -----");
console.log("RESULT: insertItems(First Item)=" + JSON.stringify(insertItems));
var tx = [];
for (var i = 0; i < insertItems.length; i++) {
  var item = insertItems[i];
  var itemValue = parseInt(item) + 10000;
  tx.push(test.insert(item, {from: deployer, gas: 1000000, gasPrice: defaultGasPrice}));
}
while (txpool.status.pending > 0) {
}
printTestRedBlackTreeContractDetails();
// printBalances();

for (var i = 0; i < tx.length; i++) {
  var item = insertItems[i];
  failIfTxStatusError(tx[i], insertData1_Message + " - test.insert(" + item + ")");
}
var minGasUsedInsert = new BigNumber(0);
var maxGasUsedInsert = new BigNumber(0);
var totalGasUsedInsert = new BigNumber(0);
for (var i = 0; i < tx.length; i++) {
  var item = insertItems[i];
  var itemValue = parseInt(item) + 10000;
  printTxData("setup_1Tx[" + i + "]", tx[i]);
  var gasUsed = eth.getTransactionReceipt(tx[i]).gasUsed;
  if (i == 0) {
    minGasUsedInsert = gasUsed;
    maxGasUsedInsert = gasUsed;
  } else {
    if (gasUsed < minGasUsedInsert) {
      minGasUsedInsert = gasUsed;
    }
    if (gasUsed > maxGasUsedInsert) {
      maxGasUsedInsert = gasUsed;
    }
  }
  totalGasUsedInsert = totalGasUsedInsert.add(eth.getTransactionReceipt(tx[i]).gasUsed);
}
// var averageGasUsedInsert = totalGasUsedInsert.div(tx.length);
// console.log("RESULT: totalGasUsedInsert=" + totalGasUsedInsert);
// console.log("RESULT: minGasUsedInsert=" + minGasUsedInsert);
// console.log("RESULT: averageGasUsedInsert=" + averageGasUsedInsert);
// console.log("RESULT: maxGasUsedInsert=" + maxGasUsedInsert);
console.log("RESULT: ");

printTestRedBlackTreeContractDetails();
console.log("RESULT: ");


// -----------------------------------------------------------------------------
var removeData2_Message = "Remove Data #2";
// -----------------------------------------------------------------------------
console.log("RESULT: ----- " + removeData2_Message + " -----");
// items = shuffle(items);
expected = removeItems;
console.log("RESULT: removeItems=" + JSON.stringify(removeItems));
var tx = [];
for (var i = 0; i < removeItems.length; i++) {
  var item = removeItems[i];
  console.log("RESULT: removing " + item);
  tx.push(test.remove(item, {from: deployer, gas: 1000000, gasPrice: defaultGasPrice}));
  expected = listMinusItem(expected, item);
  if ((i + 1) % BATCHSIZE == 0) {
    while (txpool.status.pending > 0) {
    }
    console.log("RESULT: expected=" + JSON.stringify(expected));
    var result = treeAsList(test);
    console.log("RESULT: result=" + JSON.stringify(result));
    if (JSON.stringify(expected) == JSON.stringify(result)) {
      console.log("RESULT: comparison OK");
    } else {
      console.log("RESULT: comparison ERROR !!!!!!!!!!!!!!");
      failureDetected = true;
    }
    printTestRedBlackTreeContractDetails();
  }
}

for (var i = 0; i < removeItems.length; i++) {
  var item = removeItems[i];
  failIfTxStatusError(tx[i], removeData2_Message + " - test.remove(" + item + ")");
}
var minGasUsedRemove = new BigNumber(0);
var maxGasUsedRemove = new BigNumber(0);
var totalGasUsedRemove = new BigNumber(0);
for (var i = 0; i < removeItems.length; i++) {
  var item = removeItems[i];
  var itemValue = parseInt(item) + 10000;
  printTxData("tx[" + i + "]", tx[i]);
  var gasUsed = eth.getTransactionReceipt(tx[i]).gasUsed;
  if (i == 0) {
    minGasUsedRemove = gasUsed;
    maxGasUsedRemove = gasUsed;
  } else {
    if (gasUsed < minGasUsedRemove) {
      minGasUsedRemove = gasUsed;
    }
    if (gasUsed > maxGasUsedRemove) {
      maxGasUsedRemove = gasUsed;
    }
  }
  totalGasUsedRemove = totalGasUsedRemove.add(gasUsed);
}
var averageGasUsedRemove = totalGasUsedRemove.div(removeItems.length);
// console.log("RESULT: totalGasUsedRemove=" + totalGasUsedRemove);
console.log("RESULT: minGasUsedRemove=" + minGasUsedRemove);
console.log("RESULT: averageGasUsedRemove=" + averageGasUsedRemove);
console.log("RESULT: maxGasUsedRemove=" + maxGasUsedRemove);
console.log("RESULT: ");


if (!failureDetected) {
  console.log("RESULT: ---------- PASS - no failures detected ----------");
} else {
  console.log("RESULT: ---------- FAIL - some failures detected ----------");
}

EOF
grep "DATA: " $TEST2OUTPUT | sed "s/DATA: //" > $DEPLOYMENTDATA
cat $DEPLOYMENTDATA
grep "RESULT: " $TEST2OUTPUT | sed "s/RESULT: //" > $TEST2RESULTS
cat $TEST2RESULTS
grep GasUsed $TEST2RESULTS
