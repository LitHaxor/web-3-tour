import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Test contracts", () => {
    it("should say hello", async () => {
        const Hello = await ethers.getContractFactory("Hello");
        const hello = await Hello.deploy();
        await hello.deployed();
        expect(await hello.hello()).to.equal("hello world");
    });
});
