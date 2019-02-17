# BokkyPooBahs Red-Black Binary Search Tree Library

Status: **Currently being tested and bug bounty open. Don't use in production without an audit, yet.**

A gas-efficient Solidity library using the iterative (rather than recursive) Red-Black binary search tree algorithm to help you maintain a sorted `uint` key index for your data. Insertions, deletions and searches are in **O(log n)** time (and ~gas). Note that the key of 0 is prohibited. Use the sorted keys as indices to your mapping tables of data to access your data in sorted order.

Inserting a key into an empty tree costs 68,459 gas. Inserting a key into a tree with 9,999 keys costs 127,210 gas on average. Removing an element from a tree with a single key costs 44,835 gas. Removing a key from a tree with 10,000 keys cost 81,486 gas on average.

An important use-case for this library is to maintain a sorted on-chain order book in decentralised exchange smart contracts, providing a provably fair order matching algorithm.

<br />

<hr />

## Table Of Contents

* [Overview](#overview)
  * [Binary Search Tree](#binary-search-tree)
  * [Red-Black Binary Search Tree](#red-black-binary-search-tree)
  * [Red-Black Tree With Random Insertion](#red-black-tree-with-random-insertion)
  * [Red-Black Tree With Sequential Insertion](#red-black-tree-with-sequential-insertion)
  * [Gas Cost](#gas-cost)
* [History](#history)
* [Bug Bounty Scope And Donations](#bug-bounty-scope-and-donations)
* [Deployment](#deployment)
* [Questions And Answers](#questions-and-answers)
* [Functions](#functions)
  * [init](#init)
  * [root](#root)
  * [inserted](#inserted)
  * [removed](#removed)
  * [count](#count)
  * [first](#first)
  * [last](#last)
  * [next](#next)
  * [prev](#prev)
  * [exists](#exists)
  * [getNode](#getnode)
  * [parent](#parent)
  * [grandparent](#grandparent)
  * [sibling](#sibling)
  * [uncle](#uncle)
  * [insert](#insert)
  * [remove](#remove)
* [Testing](#testing)
* [References](#references)

<br />

<hr />

## Overview

### Binary Search Tree

The [Red-Black Tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) binary search tree is a self-rebalancing [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree). Following is a diagram of a fairly well-balanced binary search tree.

<kbd><img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg" /></kbd>

The following unbalanced binary search tree was generated by inserting the numbers 1 to 32 in sequential order `[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]`:

<kbd><img src="docs/RedBlackTree1To32SequentialNoRebalance.png" /></kbd>

Inserting the keys into the binary search tree in sequential order will result in this unbalanced tree resembling a linked-list.

<br />

### Red-Black Binary Search Tree

The red-black algorithm maintains a red or black colouring for each node in the tree, and uses this information to maintain a reasonably balanced tree. From [Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree):

> In addition to the requirements imposed on a binary search tree the following must be satisfied by a red–black tree:
>
> * Each node is either red or black.
> * The root is black. This rule is sometimes omitted. Since the root can always be changed from red to black, but not necessarily vice versa, this rule has little effect on analysis.
> * All leaves (NIL) are black.
> * If a node is red, then both its children are black.
> * Every path from a given node to any of its descendant NIL nodes contains the same number of black nodes.

When an element is inserted into or removed from a red-black tree, the binary search tree is rebalanced to satisfy the red-black rules.

From Wikipedia's [Red-Black Tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) page, the following Red-Black tree was created by inserting the items `[13,8,17,11,15,22,25,27,1,6]`:

<kbd><img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg" /></kbd>

<br />

### Red-Black Tree With Random Insertion

The following fairly well-balanced red-black tree was generated by inserting the numbers 1 to 32 in random order `[15,14,20,3,7,10,11,16,18,2,4,5,8,19,1,9,12,6,17,13]`:

<kbd><img src="docs/RedBlackTree1To32Random.png" /></kbd>

The root node of the tree is 18, `k` represents the key numbers, `p` the parent, `l` the left node, `r` the right node. Nodes with `l0 r0` are the leaves of the tree.

<br />

### Red-Black Tree With Sequential Insertion

The following red-black tree was generated by inserting the numbers 1 to 32 in sequential order `[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]`:

<kbd><img src="docs/RedBlackTree1To32Sequential.png" /></kbd>

A property of the red-black tree is that the path from the root to the farthest leaf is no more than twice as long as the path from the root to the nearest leaf. The shortest path has all black nodes and the longest path alternate between red and black nodes.

The shortest path is 4 levels deep: (8 black), (4 black), (2 black), (1 black).

The longest path is 8 levels deep: (8 black), (16 red), (20 black), (24 red), (28 black), (30 red), (31 black), (32 red). This is no more than twice as long as the shortest path.


<br />

<hr />

### Gas Cost

#### Average Case - Random Insert

The following table shows the minimum, average and maximum gas cost for the insertion of items in a **random** order and removal of items from a red-black tree:

Items  | Ins Min | Ins Avg  | Ins Max | Rem Min | Rem Avg | Rem Max
------:| -------:| --------:| -------:| -------:| -------:| -------:
1      | 68,459   | 68,459  | 68,459  | 44,835  | 44,835  | 44,835
5      | 68,459   | 99,166  | 140,002 | 30,521  | 48,024  | 74,259
10     | 68,459   | 118,401 | 167,610 | 30,671  | 71,973  | 119,593
50     | 68,459   | 124,688 | 182,637 | 30,067  | 82,894  | 213,514
100    | 68,459   | 123,377 | 190,137 | 30,521  | 79,761  | 191,060
500    | 68,459   | 124,567 | 191,240 | 30,521  | 80,108  | 261,153
1,000  | 68,459   | 125,335 | 188,278 | 29,950  | 81,032  | 219,352
5,000  | 68,523   | 127,270 | 196,563 | 30,521  | 81,972  | 283,499
10,000 | 68,523   | 127,210 | 208,293 | 30,099  | 81,486  | 307,296
<br />

#### Worst Case - Sequential Insert

The following table shows the minimum, average and maximum gas cost for the insertion of items in a **sequential** order and removal of items from a red-black tree:

Items  | Ins Min | Ins Avg  | Ins Max | Rem Min | Rem Avg | Rem Max
------:| -------:| --------:| -------:| -------:| -------:| -------:
1      | 68,459   | 68,459  | 68,459  | 44,835  | 44,835  | 44,835
5      | 68,459   | 107,349 | 140,753 | 29,918  | 56,072  | 86,075
10     | 68,459   | 116,513 | 149,588 | 30,067  | 75,757  | 119,064
50     | 68,459   | 137,949 | 158,598 | 30,067  | 86,002  | 213,537
100    | 68,459   | 142,907 | 163,103 | 30,521  | 87,266  | 218,371
500    | 68,459   | 149,290 | 191,089 | 30,521  | 86,200  | 266,556
1,000  | 68,459   | 150,802 | 208,341 | 29,950  | 87,266  | 287,889
5,000  | 68,459   | 153,263 | 242,846 | 30,521  | 88,336  | 310,295
10,000 | 68,459   | 154,113 | 260,099 | 29,950  | 88,003  | 333,443

<br />

If you find this library useful for your project, **especially commercial projects**, please donate to [0xb6dAC2C5A0222f6794265249ACE15568B750c2d1](https://etherscan.io/address/0xb6dAC2C5A0222f6794265249ACE15568B750c2d1). I hope to cover my cost of getting this library independently audited.

<br />

<hr />

## Bug Bounty Scope And Donations

Details of the bug bounty program for this project can be found at [BokkyPooBah's Hall Of Fame And Bug Bounties](https://github.com/bokkypoobah/BokkyPooBahsHallOfFameAndBugBounties). Please consider [donating](https://github.com/bokkypoobah/BokkyPooBahsHallOfFameAndBugBounties#donations) to support the bug bounty, and the development and maintenance of decentralised applications.

The scope of the bug bounty for this project follows:

* [contracts/BokkyPoobahsRedBlackTreeLibrary.sol](contracts/BokkyPoobahsRedBlackTreeLibrary.sol)

<br />

<hr />

## History

Version             | Date         | Notes
:------------------ |:------------ |:---------------------------------------
v0.90-pre-release   | Feb 17 2019  | Bug bounty added

<br />

<hr />

## Deployment

This library has been designed to be automatically compiled into your Ethereum Solidity contract or library, instead of having to deploy this library and then linking your contract or library to this library.

<br />

<hr />

## Questions And Answers

<br />

<hr />

## Functions

See [contracts/TestBokkyPooBahsRedBlackTree.sol](contracts/TestBokkyPooBahsRedBlackTree.sol) (or the [flattened](flattened/TestBokkyPooBahsRedBlackTree_flattened.sol) version) for an example contract that uses this library.

Notes:

* The function parameter `Tree storage self` has been omitted in the documentation below, as Solidity automatically injects the library data structure in place of this first parameter
* There is a constant `SENTINEL` that is set to 0 in the library source code by default

<br />

### init

```javascript
function init() internal
```

Call this function from your contract constructor to initialises some data. Note that this is really only necessary when `SENTINEL` is non-0.

<br />

### root
```javascript
function root() internal view returns (uint _key);
```

Returns the root of the tree, or `SENTINEL` is the tree is empty.

<br />

### inserted
```javascript
function inserted() internal view returns (uint _inserted);
```

Number of keys inserted into the tree.

<br />

### removed
```javascript
function removed() internal view returns (uint _removed);
```

Number of keys removed from the tree.

<br />

### count
```javascript
function count() internal view returns (uint _count);
```

Number of items in the tree.

<br />

### first

```javascript
function first() internal view returns (uint _key);
```

Returns the smallest key in the tree.

Return Value  | Condition
:------------ |:--------
_{first key}_ | Tree has at least one key
`SENTINEL`    | Tree empty

<br />

### last

```javascript
function last() internal view returns (uint _key);
```

Returns the largest key in the tree.

Return Value | Condition
:----------- |:--------
_{last key}_ | Tree has at least one key
`SENTINEL`   | Tree empty

<br />

### next

```javascript
function next(uint x) internal view returns (uint y);
```

Returns the next key in the tree with a value larger than `x`.

Return Value | Condition
:----------- |:--------
_{next key}_ | There exists a key with a value larger than the `x` key
`SENTINEL`   | Tree empty
`SENTINEL`   | `x` is not an existing key in the tree
`SENTINEL`   | `x` is the only key in the tree
`SENTINEL`   | `x` is the last key in the tree

<br />

### prev

```javascript
function prev(uint x) internal view returns (uint y);
```

Returns the previous key in the tree with a value smaller than `x`.

Return Value | Condition
:----------- |:--------
_{prev key}_ | There exists a key with a value smaller than the `x` key
`SENTINEL`   | Tree empty
`SENTINEL`   | `x` is not an existing key in the tree
`SENTINEL`   | `x` is the only element in the tree
`SENTINEL`   | `x` is the last element in the tree

<br />

### exists

```javascript
function exists(uint key) internal view returns (bool _exists);
```

Returns _true_ if the key exists in the tree, _false_ otherwise.

Return Value | Condition
:----------- |:--------
_true_       | `key` is an existing key in the tree
_false_      | Tree empty
_false_      | `key` is not an existing key in the tree

<br />

### getNode

```javascript
function getNode(uint key) internal view returns (uint _returnKey, uint _parent, uint _left, uint _right, bool _red);
```

Returns the node information if `key` exists in the tree. All `uint` values will be set to `SENTINEL` if `key` does not exist in the tree.

<br />

### parent

```javascript
function parent(uint key) internal view returns (uint _parent);
```

Returns the parent of `key`.

Return Value   | Condition
:------------- |:--------
_{parent key}_ | `key` has a parent, when there are more than one item in the tree
`SENTINEL`     | Tree is empty
`SENTINEL`     | `key` is not an existing key in the tree
`SENTINEL`     | `key` is the only element in the tree

<br />

### grandparent

```javascript
function grandparent(uint key) internal view returns (uint _grandparent);
```

Returns the grandparent of `key`.

Return Value        | Condition
:------------------ |:--------
_{grandparent key}_ | `key` has a parent that has a parent
`SENTINEL`          | Tree is empty
`SENTINEL`          | `key` is not an existing key in the tree
`SENTINEL`          | `key` does not have a parent, or the parent does not have a parent

<br />

### sibling

```javascript
function sibling(uint key) internal view returns (uint _sibling);
```

Returns the sibling of `key`.

Return Value    | Condition
:-------------- |:--------
_{sibling key}_ | `key` has a sibling
`SENTINEL`      | Tree is empty
`SENTINEL`      | `key` is not an existing key in the tree
`SENTINEL`      | `key` does not have a sibling

<br />

### uncle

```javascript
function uncle(uint key) internal view returns (uint _uncle);
```

Returns the uncle of `key`.

Return Value  | Condition
:------------ |:--------
_{uncle key}_ | `key` has an uncle
`SENTINEL`    | Tree is empty
`SENTINEL`    | `key` is not an existing key in the tree
`SENTINEL`    | `key` does not have an uncle

<br />

### insert

```javascript
function insert(uint z) internal;
```

Insert the key `z` into the tree.

Transaction | Condition
:---------- |:--------
_success_   | The key `z` has been successfully inserted into the tree
_failure_   | The key `z` already exists in the tree

<br />

### remove

```javascript
function remove(uint z) internal;
```

Remove the key `z` from the tree.

Transaction | Condition
:---------- |:--------
_success_   | The key `z` has been successfully removed from the tree
_failure_   | The key `z` does exist in the tree

<br />

<hr />

## Algorithm

The main Red-Black binary search tree algorithm is listed in [Algorithms for Red Black Tree Operations
(from CLRS text)](http://www.cse.yorku.ca/~aaw/Sotirios/RedBlackTreeAlgorithm.html).

Note that this algorithm is designed to work with memory pointers to the node data. The rebalancing process after the removal of an item from the tree may result in a swapping of data values between nodes.


As the nodes are stored as elements in a Solidity *mapping* data structure, [Iterative Algorithm for Red-Black Tree](https://stackoverflow.com/a/11328289) provides an alternative algorithm to perform this swapping. In particular, the function `RB-Delete` in the main Red-Black algorithm will need the line `then key[z] := key[y]` replaced with the alternative swapping algorithm.

<br />

<hr />

## Testing

* [x] Test random insertions and deletions of 1, 10, 100, 1000 and 10000 keys
* [x] Test the insert function, including inserting a duplicate key
* [x] Test the `remove` function, including removing a non-existent key
* [x] Test the `view` functions, including what happens when a non-existent key is passed
* [x] Test sequential insertions
* [ ] Test repeated random insertions and deletions

<br />

<hr />

## References

* [Red–black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) - Wikipedia
* [Algorithms for Red Black Tree Operations](http://www.cse.yorku.ca/~aaw/Sotirios/RedBlackTreeAlgorithm.html) - from *Introduction to Algorithms* by Cormen, Leiserson, Rivest and Stein.
* [Iterative Algorithm for Red-Black Tree](https://stackoverflow.com/questions/3758356/iterative-algorithm-for-red-black-tree)
* [Laboratory Module 6 - Red-Black Trees](http://software.ucv.ro/~mburicea/lab8ASD.pdf) - Mihail Buricea. A copy has been saved to [docs/lab8ASD.pdf](docs/lab8ASD.pdf)
* https://www.cs.dartmouth.edu/~thc/cs10/lectures/0519/0519.html
  * https://www.cs.dartmouth.edu/~thc/cs10/lectures/0519/RBTree.java
* https://www.csee.umbc.edu/courses/undergraduate/341/fall13/section3/lectures/10-Red-Black-Trees.pdf
* http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec7/lec7.pdf
* https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/

<br />

<br />

Thanks to [James Zaki](https://github.com/jzaki) and [Solidified](https://solidified.io/) for the 3 minor issues they picked up at the Web3 Summit.


Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd - Nov 03 2018. The MIT Licence.
