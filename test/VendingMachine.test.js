const VendingMachine = artifacts.require("VendingMachine");

contract("VendingMachine", (accounts) => {
    before(async () => {
        instance = await VendingMachine.deployed()
    })

    it('ensures that the starting balance of the vending machine is 100', async () => {
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 100, 'The initial balance should be 100 donuts.')
    })

    it('ensures that the starting number of owned donuts is 0', async () => {
        let ownedDonuts = await instance.getNumberOfOwnedDonuts()
        assert.equal(ownedDonuts, 0, 'The initial number of donuts should be 0.')
    })

    it('ensures the balance of the vending machine can be updated', async () => {
        await instance.restock(100)
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 200, 'The balance should be 200 donuts after restocking.')
    })

    it('allows donuts to be purchased', async () => {
        await instance.purchase(2, {from: accounts[0], value: web3.utils.toWei('0.2','ether')})
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 198, 'The balance should be 198 donuts after sale.')
    })

    it('ensures that the purchaser owns the purchased amount of donuts', async () => {
        let ownedDonuts = await instance.getNumberOfOwnedDonuts()
        assert.equal(ownedDonuts, 2, 'The number of donuts after purchase should be 2.');
    })
})