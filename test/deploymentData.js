var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var wallet="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var user1="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var user2="0xa44a08d3f6933c69212114bb66e2df1813651844";
var user3="0xa55a151eb00fded1634d27d1127b4be4627079ea";
var testRawAddress="0xfb17b26b309078fc61d1648c39bcc42c94bde3f2";
var testRawAbi=[{"constant":true,"inputs":[{"name":"key","type":"uint256"}],"name":"prev","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"first","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"last","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"uint256"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"uint256"}],"name":"getNode","outputs":[{"name":"key","type":"uint256"},{"name":"parent","type":"uint256"},{"name":"left","type":"uint256"},{"name":"right","type":"uint256"},{"name":"red","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"key","type":"uint256"}],"name":"exists","outputs":[{"name":"_exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"uint256"}],"name":"insert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"root","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"key","type":"uint256"}],"name":"next","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"where","type":"string"},{"indexed":false,"name":"key","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Log","type":"event"}];
var testRaw=eth.contract(testRawAbi).at(testRawAddress);
testRawAddress=0xfb17b26b309078fc61d1648c39bcc42c94bde3f2
