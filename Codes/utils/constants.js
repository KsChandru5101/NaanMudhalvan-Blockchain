import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0xC3142fF0a990C8654d535a234C8D981b22704e2c";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);
