# Donut Vending Machine

## Developers
- Fabian Egartner (feg1770)
- Fabian Dreher (fdr5185)

## About the Contract
A smart contract that lets you purchase delicious donuts. <br>
(secret insider information: Donuts are THE currency of the future, so make sure to buy many ;-))

## Contract Address in the Sepolia-Test-Network
0x96A9B22c78bEAD891475A76CaCa70c36D4BFA547

## How to interact
1.) execute ```npm install``` in your terminal to make sure you have the required dependencies installed <br>
2.) create a <b>.env</b> file in the root of this project <br> (take a look at the <i>env_structure.png</i> to see how it needs to be configured) <br>
3.) execute ```npx truffle console --network sepolia``` in your terminal <br>
4.) execute ```let instance = await VendingMachine.deployed()``` to get the contract instance <br>
5.) call the functions below and make sure you own a lot of donuts in the end ;-)

## Functions
The vending machine instance supports the following 3 functions to interact with:

- <b>getVendingMachineBalance()</b>: lets you check how many donuts are currently in the vending machine <br>
(hint: wrap your function call with a toString() like so: ```(await instance.getVendingMachineBalance()).toString()``` 
to get the result as a string instead of a BN)

- <b>purchase(uint amount)</b>: lets you purchase the specified amount of donuts. You can get one donut for a ridiculously cheap price of 0.1 ether!!! <br>
(hint: the function should look like this: ```instance.purchase(<amount of donuts to purchase>, 
{from: '<your-metamask-public-address>', value: web3.utils.toWei('<amount of donuts to purchase * 0.1>','ether')})``` )

- <b>getNumberOfOwnedDonuts()</b>: lets you check how many delicious donuts you currently own <br>
(hint: wrap your function call with a toString() like this: <br> ```(await instance.getNumberOfOwnedDonuts()).toString()``` 
to get the result as a string instead of a BN)